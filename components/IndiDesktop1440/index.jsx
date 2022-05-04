import React from "react";
import Property1heroDesktop from "../Property1heroDesktop";
import Property1filmGridDesktop from "../Property1filmGridDesktop";
import MenuDesktop from "../MenuDesktop";
import Property1containerPromoDesktop from "../Property1containerPromoDesktop";
import "./IndiDesktop1440.css";

function IndiDesktop1440(props) {
  const {
    property1heroDesktopProps,
    property1filmGridDesktop1Props,
    property1filmGridDesktop2Props,
    property1containerPromoDesktopProps,
  } = props;

  return (
    <div className="indi-desktop-1440 screen">
      <div className="group-7">
        <Property1heroDesktop
          heroContainer={property1heroDesktopProps.heroContainer}
          mainTitle={property1heroDesktopProps.mainTitle}
          filmInfo={property1heroDesktopProps.filmInfo}
          filmAbout={property1heroDesktopProps.filmAbout}
          filmCredits={property1heroDesktopProps.filmCredits}
          property1btnWatchDesktopProps={property1heroDesktopProps.property1btnWatchDesktopProps}
        />
        <Property1filmGridDesktop {...property1filmGridDesktop1Props} />
        <Property1filmGridDesktop {...property1filmGridDesktop2Props} />
      </div>
      <MenuDesktop />
      <Property1containerPromoDesktop
        title={property1containerPromoDesktopProps.title}
        paragraph={property1containerPromoDesktopProps.paragraph}
        inputType={property1containerPromoDesktopProps.inputType}
        inputPlaceholder={property1containerPromoDesktopProps.inputPlaceholder}
        gifCinema={property1containerPromoDesktopProps.gifCinema}
        property1btnSubmitDesktopProps={property1containerPromoDesktopProps.property1btnSubmitDesktopProps}
      />
    </div>
  );
}

export default IndiDesktop1440;
