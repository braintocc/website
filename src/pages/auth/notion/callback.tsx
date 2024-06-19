import React from 'react';
import { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {Redirect} from '@docusaurus/router';
import { getUser } from '@site/src/api/user/get';
import { updateUser } from '@site/src/api/user/update';

export default function Callback(): JSX.Element {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    (async () => {
      let search = window.location.search;
      let params = new URLSearchParams(search);
      const email = window.localStorage.getItem('email')
      const user = await getUser(email)
      const accessToken = params.get('access_token');
      await updateUser({
        ...user, 
        notion: {
          ...user.notion, 
          credentials: {
            accessToken
          } 
        }
      })
      setReady(true)
    })()
  }, []);

  return (
        <BrowserOnly>
          { () => ready && <Redirect to="/social" /> }
        </BrowserOnly>
  );
}
