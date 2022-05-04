import React from "react";
import "./FilmThumbMobile.css";

function FilmThumbMobile(props) {
  const { src, className } = props;

  return <img className={`film-thumb-5 ${className || ""}`} src={src} />;
}

export default FilmThumbMobile;
