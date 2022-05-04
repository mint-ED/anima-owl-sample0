import React from "react";
import "./Property1btnWatchDesktop.css";

function Property1btnWatchDesktop(props) {
  const { btnWatch, watchNow } = props;

  return (
    <div className="btn-watch-2">
      <div className="watch-container-1">
        <img className="btn-watch-3" src={btnWatch} />
        <div className="watch-now-1 valign-text-middle">{watchNow}</div>
      </div>
    </div>
  );
}

export default Property1btnWatchDesktop;
