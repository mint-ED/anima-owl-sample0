import React from "react";
import IconLarge from "../IconLarge";
import "./MenuDesktop.css";

function MenuDesktop() {
  return (
    <div className="sidebar-menu-1">
      <img className="indi-logo-1" src="/img/indi-logo-1@2x.png" />
      <IconLarge iconId="1" />
      <IconLarge iconId="2" className="menu-ico-desktop-2" />
      <IconLarge iconId="3" className="menu-ico-desktop" />
      <IconLarge iconId="4" className="menu-ico-desktop" />
    </div>
  );
}

export default MenuDesktop;
