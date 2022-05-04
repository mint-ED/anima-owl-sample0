import React from "react";
import Property1heroTablet from "../Property1heroTablet";
import FilmGridTablet from "../FilmGridTablet";
import MenuTablet from "../MenuTablet";
import Property1containerPromoTablet from "../Property1containerPromoTablet";
import "./IndiTablet768.css";

function IndiTablet768(props) {
  const {
    property1heroTabletProps,
    filmGridTablet1Props,
    filmGridTablet2Props,
    property1containerPromoTabletProps,
  } = props;

  return (
    <div className="indi-tablet-768 screen">
      <div className="content-1">
        <Property1heroTablet
          heroContainer={property1heroTabletProps.heroContainer}
          title={property1heroTabletProps.title}
          filmInfo={property1heroTabletProps.filmInfo}
          filmAbout={property1heroTabletProps.filmAbout}
          filmCredits={property1heroTabletProps.filmCredits}
          property1btnWatchTabletProps={property1heroTabletProps.property1btnWatchTabletProps}
        />
        <FilmGridTablet {...filmGridTablet1Props} />
        <FilmGridTablet {...filmGridTablet2Props} />
      </div>
      <MenuTablet />
      <Property1containerPromoTablet
        title={property1containerPromoTabletProps.title}
        paragraph={property1containerPromoTabletProps.paragraph}
        inputType={property1containerPromoTabletProps.inputType}
        inputPlaceholder={property1containerPromoTabletProps.inputPlaceholder}
        gifCinema={property1containerPromoTabletProps.gifCinema}
        property1btnSubmitDesktopProps={property1containerPromoTabletProps.property1btnSubmitDesktopProps}
      />
    </div>
  );
}

export default IndiTablet768;
