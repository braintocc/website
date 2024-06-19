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
      const oldSocials = user.notion.socials[0]
      const newSocials = oldSocials 
        ?   {
                ...oldSocials,
                credentials: {
                    ...oldSocials.credentials,
                    linkedIn: {
                        accessToken
                    }
                }
            } 
        : {
            credentials: {
                linkedIn: {
                    accessToken
                }
            }
        }
      await updateUser({
        ...user, 
        notion: {
          ...user.notion, 
          socials: [ newSocials ]
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
