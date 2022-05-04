import React from "react";
import "./IconLarge.css";

function IconLarge(props) {
  const { iconId, className } = props;

  return (
    <div className={`menu-ico-desktop-1 ${className || ""}`}>
      <div className="search-icon valign-text-middle icons-pack-regular-normal-white-17px">{iconId}</div>
    </div>
  );
}

export default IconLarge;
