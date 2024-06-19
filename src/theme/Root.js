import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { initialize } from "@site/src/api";
import { ConfigCatProvider } from "configcat-react";

// Default implementation, that you can customize
export default function Root({children}) {
  const {
    siteConfig: {
      customFields: {
        Auth0Domain,
        Auth0ClientId,
        auth0RedirectUri,
        auth0Audience,
        Auth0Scope, 
        ServerUrl
      }
    }
  } = useDocusaurusContext();
    initialize(ServerUrl)
    return <Auth0Provider
    domain={Auth0Domain}
    clientId={Auth0ClientId}
    authorizationParams={{
      redirect_uri: auth0RedirectUri,
      audience: auth0Audience,
      scope: Auth0Scope,
    }}
  >
      <ConfigCatProvider sdkKey="G3vbCMF-h0CE4nKKNOQECg/zPhekRQ1_k-Bvk1ct2O9Gw"> 
        {children}
      </ConfigCatProvider> 
    
    </Auth0Provider>
}