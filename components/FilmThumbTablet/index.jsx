import React from "react";
import "./FilmThumbTablet.css";

function FilmThumbTablet(props) {
  const { src, className } = props;

  return <img className={`film-thumb-8 ${className || ""}`} src={src} />;
}

export default FilmThumbTablet;
