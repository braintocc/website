import React, { FormEvent, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getUser } from "@site/src/api/user/get";
import { createUser } from "@site/src/api/user/create";
import {Redirect} from '@docusaurus/router';
import { updateUser } from "@site/src/api/user/update";
import { getSocials } from "@site/src/api/social/get";
import styles from './styles.module.css';
import { useFeatureFlag } from "configcat-react";

const Social = () => {
  const {
    siteConfig: {
      customFields: {
        ServerUrl,
        auth0Audience,
        Auth0Scope,

      }
    }
  } = useDocusaurusContext();
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } = useAuth0();
  const [appUser, setAppUser] = useState({ _id: "", notion: { socials: []} });
  const [socials, setSocials] = useState([]);
  useEffect(() => {
    if(!user)
      return 
    (async () => {
        let notionUser
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: auth0Audience as string,
            scope: Auth0Scope as string,
          }
        });
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('email', user.email);
        try {
          notionUser = await getUser(user.email)
          setAppUser(notionUser)
      } catch (e) {
        await createUser(user.email)
        notionUser = await getUser(user.email)
        setAppUser(notionUser)
      }
      setSocials(await getSocials(notionUser.notion.credentials?.accessToken))
    })();
  }, [getAccessTokenSilently, user, ServerUrl]);
  const selectSocial = async (databaseId: string) => {
    const updatedUser = {...appUser, notion: {...appUser.notion, socials: [{...appUser.notion.socials[0], databaseId}]}}
    await updateUser(updatedUser)
    setAppUser(updatedUser)
  }
  const updateTwitterCredentials = async (e: any) => {
    const data = Array.from(e.target.elements)
      .filter((input: any) => input.name)
      .reduce((obj: any, input:any) => Object.assign(obj, { [input.name]: input.value }), {});
    const updatedUser = {
      ...appUser, 
      notion: 
        {
          ...appUser.notion, 
          socials: [
            {
              ...appUser.notion.socials[0], 
              credentials: 
              {
                ...appUser.notion.socials[0].credentials, 
                twitter: data
              }
            }
          ]
        }
      }
    await updateUser(updatedUser)
  }
  const updateSubstackCredentials = async (e: any) => {
    const data = Array.from(e.target.elements)
      .filter((input: any) => input.name)
      .reduce((obj: any, input:any) => Object.assign(obj, { [input.name]: input.value }), {});
    const updatedUser = {
      ...appUser, 
      notion: 
        {
          ...appUser.notion, 
          socials: [
            {
              ...appUser.notion.socials[0], 
              credentials: 
              {
                ...appUser.notion.socials[0].credentials, 
                substack: data
              }
            }
          ]
        }
      }
    await updateUser(updatedUser)
  }
  
  const updateBlueskyCredentials = async (e: any) => {
    const data = Array.from(e.target.elements)
      .filter((input: any) => input.name)
      .reduce((obj: any, input:any) => Object.assign(obj, { [input.name]: input.value }), {});
    const updatedUser = {
      ...appUser, 
      notion: 
        {
          ...appUser.notion, 
          socials: [
            {
              ...appUser.notion.socials[0], 
              credentials: 
              {
                ...appUser.notion.socials[0].credentials, 
                bluesky: data
              }
            }
          ]
        }
      }
    await updateUser(updatedUser)
  }
  return !isAuthenticated
    ? <Redirect to="/" />
    : isLoading
      ? (<div>Loading ...</div>)
      : (isAuthenticated && (
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Notion Authorization State: {appUser.notion.credentials?.accessToken ? <span className="badge badge--success">Ok</span> : <span className="badge badge--danger">Fail</span>} </h2>
              </div>
              <div className="col col--2 col--offset-1">
                <a className="button button--primary" href={`${ServerUrl}/connect/notion`}>Authorize Notion</a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>LinkedIn Authorization State: {appUser.notion.socials[0]?.credentials?.linkedIn?.accessToken ? <span className="badge badge--success">Ok</span> : <span className="badge badge--danger">Fail</span>} </h2>
              </div>
              <div className="col col--2 col--offset-1">
                <a className="button button--primary" href={`${ServerUrl}/connect/linkedin`}>Authorize LinkedIn</a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>Twitter Authorization State: {appUser.notion.socials[0]?.credentials?.twitter?.accessToken ? <span className="badge badge--success">Ok</span> : <span className="badge badge--danger">Fail</span>} </h2>
              </div>
              <div className="col">
                <form action={`${ServerUrl}/connect/twitter2`} method="POST" accept-charset="utf-8" onSubmit={updateTwitterCredentials}>
                  <input type="text" name="key" placeholder="Twitter Key" />
                  <input type="text" name="secret" placeholder="Twitter Secret" />
                  <button className="button button--primary">Authorize Twitter</button>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>Mastodon.social Authorization State: {appUser.notion.socials[0]?.credentials?.mastodon?.accessToken ? <span className="badge badge--success">Ok</span> : <span className="badge badge--danger">Fail</span>} </h2>
              </div>
              <div className="col col--2 col--offset-1">
                <a className="button button--primary" href={`${ServerUrl}/connect/mastodon`}>Authorize Mastodon</a>
              </div>
            </div>
            
            <div className="row">
              <div className="col">
                <h2>Substack Authorization State: {appUser.notion.socials[0]?.credentials?.substack?.cookie ? <span className="badge badge--success">Ok</span> : <span className="badge badge--danger">Fail</span>} </h2>
              </div>
              <div className="col">
                <form accept-charset="utf-8" onSubmit={updateSubstackCredentials}>
                  <input type="text" name="cookie" placeholder="Substack Cookie" />
                  <button className="button button--primary">Authorize Substack</button>
                </form>
              </div>
            </div>
                        
            <div className="row">
              <div className="col">
                <h2>Bluesky Authorization State: {appUser.notion.socials[0]?.credentials?.bluesky?.identifier && appUser.notion.socials[0]?.credentials?.bluesky?.password ? <span className="badge badge--success">Ok</span> : <span className="badge badge--danger">Fail</span>} </h2>
              </div>
              <div className="col">
                <form accept-charset="utf-8" onSubmit={updateBlueskyCredentials}>
                  <input type="text" name="identifier" placeholder="Bluesky Identifier" />
                  <input type="text" name="password" placeholder="Bluesky App Password" />
                  <button className="button button--primary">Authorize Bluesky</button>
                </form>
              </div>
            </div>
            {socials.map((social:any) => (
                <div key={social.id} className={`row ${styles.database}`}>
                  <div className="col"> 
                    <div className="avatar">
                      <a
                        className="avatar__photo-link avatar__photo avatar__photo--sm"
                        href={social.url}>
                        { social.icon.type === "emoji" ? <h3>{social.icon.emoji}</h3> : <img src={social.icon} />}
                      </a>
                      <div className="avatar__intro">
                        <div className="avatar__name">{social.title}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col"> 
                    {!appUser.notion.socials.some((listedSocial) => listedSocial.databaseId === social.id) 
                    ? <button className="button button--primary" onClick={() => selectSocial(social.id)}>Activate</button>
                    : <button className="button button--primary" disabled>Active</button>}
                  </div>
                </div>
              ))}
          </div>
        )
      );
};

export default Social;