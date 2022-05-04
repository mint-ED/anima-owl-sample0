import React from "react";
import Property1btnWatchDesktop from "../Property1btnWatchDesktop";
import "./Property1heroDesktop.css";

function Property1heroDesktop(props) {
  const { heroContainer, mainTitle, filmInfo, filmAbout, filmCredits, property1btnWatchDesktopProps } = props;

  return (
    <div className="hero-container-1" style={{ backgroundImage: `url(${heroContainer})` }}>
      <h1 className="main-title valign-text-middle headline---desktop-80px">{mainTitle}</h1>
      <p className="film-info-1">{filmInfo}</p>
      <p className="film-about-1 worksans-light-white-15px">{filmAbout}</p>
      <p className="film-credits-1 worksans-normal-white-12px">{filmCredits}</p>
      <Property1btnWatchDesktop
        btnWatch={property1btnWatchDesktopProps.btnWatch}
        watchNow={property1btnWatchDesktopProps.watchNow}
      />
    </div>
  );
}

export default Property1heroDesktop;
