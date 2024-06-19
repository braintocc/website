import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({mobile}: any) => {
  const { loginWithRedirect } = useAuth0();

  return <div className={!mobile && "navbar__item"} id="button-login" style={{cursor: "pointer"}} onClick={() => loginWithRedirect()}>Log In</div>;
};

export default LoginButton;