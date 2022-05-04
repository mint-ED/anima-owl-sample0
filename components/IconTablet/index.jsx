import React from "react";
import "./IconTablet.css";

function IconTablet(props) {
  const { iconId, className } = props;

  return (
    <div className={`menu-ico-tablet-3 ${className || ""}`}>
      <div className="film-icon valign-text-middle icons-pack-regular-normal-white-14px">{iconId}</div>
    </div>
  );
}

export default IconTablet;
