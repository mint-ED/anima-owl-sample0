import React from "react";
import IconSmall from "../IconSmall";
import "./MenuMobile.css";

function MenuMobile() {
  return (
    <div className="sidebar-menu">
      <div className="bottom-menu-icons">
        <IconSmall iconId="1" />
        <IconSmall iconId="2" className="menu-ico-mobile-1" />
        <IconSmall iconId="3" className="menu-ico-mobile-2" />
        <IconSmall iconId="4" className="menu-ico-mobile-3" />
      </div>
    </div>
  );
}

export default MenuMobile;
