import React from "react";
import "./Property1btnWatchTablet.css";

function Property1btnWatchTablet(props) {
  const { btnWatch, watchNow } = props;

  return (
    <div className="btn-watch-4">
      <div className="watch-container-2">
        <img className="btn-watch-5" src={btnWatch} />
        <div className="watch-now-2 valign-text-middle">{watchNow}</div>
      </div>
    </div>
  );
}

export default Property1btnWatchTablet;
