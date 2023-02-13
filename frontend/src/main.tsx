import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <GoogleOAuthProvider
        clientId='427300417838-cn2hdh3jkk5pnccfkl5lk4cc0a2uk5b3.apps.googleusercontent.com'
    >
        <App />
    </GoogleOAuthProvider>
)
