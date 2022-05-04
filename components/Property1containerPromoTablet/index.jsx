import React from "react";
import Property1btnSubmitDesktop from "../Property1btnSubmitDesktop";
import "./Property1containerPromoTablet.css";

function Property1containerPromoTablet(props) {
  const { title, paragraph, inputType, inputPlaceholder, gifCinema, property1btnSubmitDesktopProps } = props;

  return (
    <div className="container-promotion-2">
      <div className="stay-connected">
        <div className="stay-connected-text-1">
          <div className="title-6">{title}</div>
          <p className="paragraph-2 worksans-light-white-11px">{paragraph}</p>
        </div>
        <div className="stay-connected-form-1">
          <div className="email-input-2">
            <input
              className="your-email-1 worksans-normal-white-12px"
              name="youremail"
              placeholder={inputPlaceholder}
              type={inputType}
            />
            <div className="underline-2"></div>
          </div>
          <Property1btnSubmitDesktop className={property1btnSubmitDesktopProps.className} />
        </div>
      </div>
      <div className="gif-cinema-1" style={{ backgroundImage: `url(${gifCinema})` }}></div>
    </div>
  );
}

export default Property1containerPromoTablet;
