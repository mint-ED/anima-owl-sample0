import React from "react";
import Property1btnSubmitDesktop from "../Property1btnSubmitDesktop";
import "./Property1containerPromoMobile.css";

function Property1containerPromoMobile(props) {
  const { containerPromotion, title, paragraph, inputType, inputPlaceholder } = props;

  return (
    <div className="container-promotion" style={{ backgroundImage: `url(${containerPromotion})` }}>
      <div className="title-2">{title}</div>
      <p className="paragraph worksans-light-white-10px">{paragraph}</p>
      <div className="email-input">
        <input
          className="your-email worksans-normal-white-10px"
          name="youremail"
          placeholder={inputPlaceholder}
          type={inputType}
        />
        <div className="underline"></div>
      </div>
      <Property1btnSubmitDesktop />
    </div>
  );
}

export default Property1containerPromoMobile;
