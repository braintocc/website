import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '@site/src/components/LoginButton/index';
import LogoutButton from '@site/src/components/LogoutButton/index';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const { isAuthenticated } = useAuth0();
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  const filteredLeftItems = isAuthenticated
    ? items.map(item => ({...item, label: item.label.replace("_secure", "")}))
    : items.filter(item => !item.label.includes("_secure"))
  return (
    <>
    <ul className="menu__list">
      {filteredLeftItems.map((item, i) => {
        return(
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      )})}
      {!isAuthenticated && <LoginButton mobile/>}
      {isAuthenticated && <LogoutButton mobile/>}
    </ul>
  </>
  );
}
