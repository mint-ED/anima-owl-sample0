import React from "react";
import "./FilmThumbDesktop.css";

function FilmThumbDesktop(props) {
  const { src, className } = props;

  return <img className={`film-thumb-6 ${className || ""}`} src={src} />;
}

export default FilmThumbDesktop;
