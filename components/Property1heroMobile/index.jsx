import React from "react";
import Property1btnWatchMobile from "../Property1btnWatchMobile";
import "./Property1heroMobile.css";

function Property1heroMobile(props) {
  const { filmPreview, indiLogo, title, filmInfo, filmAbout, filmCredits, property1btnWatchMobileProps } = props;

  return (
    <div className="hero-container">
      <div className="film-preview" style={{ backgroundImage: `url(${filmPreview})` }}>
        <img className="indi-logo" src={indiLogo} />
      </div>
      <div className="title valign-text-middle headline---mobile-40px">{title}</div>
      <p className="film-info">{filmInfo}</p>
      <p className="film-about worksans-light-white-10px">{filmAbout}</p>
      <p className="film-credits">{filmCredits}</p>
      <Property1btnWatchMobile
        btnWatch={property1btnWatchMobileProps.btnWatch}
        watchNow={property1btnWatchMobileProps.watchNow}
      />
    </div>
  );
}

export default Property1heroMobile;
