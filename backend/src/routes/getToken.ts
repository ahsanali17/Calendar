import express from 'express';
import cors from 'cors';

import { google } from 'googleapis'

const oauth2Client = new google.auth.OAuth2(
 process.env.GOOGLE_CLIENT_ID,
 process.env.GOOGLE_SECRET,
 'http://localhost:5173'
)

export let REFRESH_TOKEN: string | null | undefined = '';
export let ACCESS_TOKEN: string | null | undefined = '';

const tokenRouter = express.Router();

tokenRouter.use(cors());

tokenRouter.get('/', async(req, res, next) => {
 res.send({message: 'api is online'})
})

tokenRouter.post('/createToken', async (req,res, next) => {
 try {
  const { code } = req.body;
  console.log("backend", code);
  const {tokens} = await oauth2Client.getToken(code)
  REFRESH_TOKEN = tokens ? tokens?.refresh_token : '' ;
  ACCESS_TOKEN = tokens ? tokens?.access_token : '';
  res.send(tokens);
 } catch(error) {
  console.error('backend:', error)
  next(error);
 }
})

tokenRouter.post('/createEvent', async (req, res, next) => {
  try {

  } catch(error) {
   next(error)
  }
})

export default tokenRouter;