import React from "react";
import IconTablet from "../IconTablet";
import "./MenuTablet.css";

function MenuTablet() {
  return (
    <div className="sidebar-menu-2">
      <img className="indi-logo-2" src="/img/indi-logo-2@2x.png" />
      <IconTablet iconId="1" />
      <IconTablet iconId="2" className="menu-ico-tablet-1" />
      <IconTablet iconId="3" className="menu-ico-tablet-2" />
      <IconTablet iconId="4" />
    </div>
  );
}

export default MenuTablet;
