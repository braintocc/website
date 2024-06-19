import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({mobile}: any) => {
  const { logout } = useAuth0();

  return (
    <div className={!mobile && "navbar__item"} style={{cursor: "pointer"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </div>
  );
};

export default LogoutButton;