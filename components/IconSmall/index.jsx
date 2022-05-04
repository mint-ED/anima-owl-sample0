import React from "react";
import "./IconSmall.css";

function IconSmall(props) {
  const { iconId, className } = props;

  return (
    <div className={`menu-ico-mobile ${className || ""}`}>
      <div className="fav-icon valign-text-middle icons-pack-regular-normal-white-18px">{iconId}</div>
    </div>
  );
}

export default IconSmall;
