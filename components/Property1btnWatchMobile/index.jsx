import React from "react";
import "./Property1btnWatchMobile.css";

function Property1btnWatchMobile(props) {
  const { btnWatch, watchNow } = props;

  return (
    <div className="btn-watch">
      <div className="watch-container">
        <img className="btn-watch-1" src={btnWatch} />
        <div className="watch-now valign-text-middle">{watchNow}</div>
      </div>
    </div>
  );
}

export default Property1btnWatchMobile;
