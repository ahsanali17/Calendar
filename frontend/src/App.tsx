import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import axios from "axios";

import GoogleLogin from '@leecheuk/react-google-login';
import {Calendar} from "./components/Calendar/index";
import CalendarContextWrapper from "./context/CalendarContext/CalendarContext";

const App = () => {
  const [calendarOn, setCalendarOn] = useState(false);

  const responseSuccess = async (response:any) => {
    try {
        // setResponse(response);
        setCalendarOn(true);
        const { code } = response;

        await axios.post('http://localhost:5000/getToken/createToken', { code })
        .then((response) => {
          console.log('response:', response.data)
        })
    } catch(error) {
      console.error('caught error', error);
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
       clientId: '427300417838-cn2hdh3jkk5pnccfkl5lk4cc0a2uk5b3.apps.googleusercontent.com',
       scope: 'openid email profile https://www.googleapis.com/auth/calendar',
       plugin_name: 'Calendar'
      })
    }

  }, [])

  return (
      <>
        <div>
          <GoogleLogin
            clientId="427300417838-cn2hdh3jkk5pnccfkl5lk4cc0a2uk5b3.apps.googleusercontent.com"
            onSuccess={responseSuccess}
            onFailure={(() => { console.log('log in failed')})}
            cookiePolicy={'single_host_origin'}
            responseType="code"
            accessType="offline"
            scope='openid email profile https://www.googleapis.com/auth/calendar'
          />
          <br/>

        </div>
        {calendarOn && (
          <CalendarContextWrapper>
            <Calendar />
          </CalendarContextWrapper>
        )}
    </>
  );
};

export default App;