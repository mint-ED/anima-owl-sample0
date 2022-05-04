import React from "react";
import Property1btnSubmitDesktop from "../Property1btnSubmitDesktop";
import "./Property1containerPromoDesktop.css";

function Property1containerPromoDesktop(props) {
  const { title, paragraph, inputType, inputPlaceholder, gifCinema, property1btnSubmitDesktopProps } = props;

  return (
    <div className="container-promotion-1">
      <div className="stay-conncted">
        <div className="stay-connected-text">
          <div className="title-3">{title}</div>
          <p className="paragraph-1 worksans-light-white-15px">{paragraph}</p>
        </div>
        <div className="stay-connected-form">
          <div className="email-input-1">
            <input
              className="email worksans-light-white-15px"
              name="email"
              placeholder={inputPlaceholder}
              type={inputType}
            />
            <div className="underline-1"></div>
          </div>
          <Property1btnSubmitDesktop className={property1btnSubmitDesktopProps.className} />
        </div>
      </div>
      <div className="gif-cinema" style={{ backgroundImage: `url(${gifCinema})` }}></div>
    </div>
  );
}

export default Property1containerPromoDesktop;
