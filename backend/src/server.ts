import express, {Application, Request, Response, NextFunction}  from 'express';
import session from 'express-session';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import passport from 'passport';
// import { renderPage } from 'vite-plugin-ssr'

import Logging from './Library/Logging';
import {config} from './config/index';
import tokenRouter from './routes/getToken';
import passportSetup from './config/passport';

const Server: Application = express();

const port: number = config.server.port;
const CLIENT_URL: string = `http://localhost:${port}`;


Server.use(
	session({
		secret: 'black cat',
		resave: false,
		saveUninitialized: false,
		cookie: {maxAge: 3600000},
		store: MongoStore.create({ mongoUrl: config.mongo.url })
	})
)

Server.use(passport.initialize());
Server.use(passport.session());
passportSetup();

/** Connect to MongoDB */
mongoose
.connect(`${config.mongo.url}/calendar_web_app`, {retryWrites: true, w: 'majority'})
.then(() => {
  Logging.info('Connected to MongoDB.');
  StartServer();
})
.catch((error) => {
  Logging.error('Unable to connect: ');
  Logging.error(error);
});

/** Server Starter Function  */
const StartServer = () => {
  // Log Relevant Info on Server Startup [URL, IP Address, Server Status]
  Server.use((req: Request, res: Response, next: NextFunction) => {
		// Log The Request
		Logging.info(`Incoming => Method [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

		res.on('finish', () => {
			// Log The Response
			Logging.info(`Incoming => Method [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
		});

		next();
	});

	Server.use(express.urlencoded({ extended: true }));
	Server.use(express.json());

  // Cors Check
  Server.use(cors({ credentials: true, origin: CLIENT_URL }));
		Server.use(cors())

	// Rules of our API
	Server.use((req: Request, res: Response, next: NextFunction) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

		if (req.method == 'OPTIONS') {
			res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
			return res.status(200).json({});
		}

		next();
	});

  /** API ROUTES */
    // Routes
    // Server.use('/users', userRoutes);
			Server.use('/getToken', tokenRouter)

    // Server API Check
    Server.get('/ping', (req: Request, res: Response) => {
      res.status(200).json({message: 'pong'});
    });

  // Error Handling
	Server.use((req: Request, res: Response, next: NextFunction) => {
		const error = new Error('Not Found');
		Logging.error(error);

		return res.status(404).json({ message: error.message });
	});

  // Log Server Port
	http.createServer(Server).listen(port, () => Logging.info(`Server is running on port ${port}.`));
}


