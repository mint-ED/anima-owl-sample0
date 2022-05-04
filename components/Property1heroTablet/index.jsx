import React from "react";
import Property1btnWatchTablet from "../Property1btnWatchTablet";
import "./Property1heroTablet.css";

function Property1heroTablet(props) {
  const { heroContainer, title, filmInfo, filmAbout, filmCredits, property1btnWatchTabletProps } = props;

  return (
    <div className="hero-container-2" style={{ backgroundImage: `url(${heroContainer})` }}>
      <div className="title-4 valign-text-middle headline---tablet-50px">{title}</div>
      <p className="film-info-2">{filmInfo}</p>
      <p className="film-about-2 worksans-light-white-11px">{filmAbout}</p>
      <p className="film-credits-2 worksans-normal-white-10px">{filmCredits}</p>
      <Property1btnWatchTablet
        btnWatch={property1btnWatchTabletProps.btnWatch}
        watchNow={property1btnWatchTabletProps.watchNow}
      />
    </div>
  );
}

export default Property1heroTablet;
