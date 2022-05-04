import React from "react";
import FilmThumbMobile from "../FilmThumbMobile";
import "./Property1filmGridMobile.css";

function Property1filmGridMobile(props) {
  const {
    title,
    filmThumbMobile1Props,
    filmThumbMobile2Props,
    filmThumbMobile3Props,
    filmThumbMobile4Props,
    filmThumbMobile5Props,
    filmThumbMobile6Props,
    filmThumbMobile7Props,
    filmThumbMobile8Props,
    filmThumbMobile9Props,
    filmThumbMobile10Props,
    filmThumbMobile11Props,
    filmThumbMobile12Props,
  } = props;

  return (
    <div className="container-films-1">
      <div className="title-1 worksans-medium-white-16px">{title}</div>
      <div className="flex-row">
        <div className="film-thumb-container">
          <FilmThumbMobile src={filmThumbMobile1Props.src} />
          <FilmThumbMobile src={filmThumbMobile2Props.src} className={filmThumbMobile2Props.className} />
          <FilmThumbMobile src={filmThumbMobile3Props.src} className={filmThumbMobile3Props.className} />
          <FilmThumbMobile src={filmThumbMobile4Props.src} className={filmThumbMobile4Props.className} />
        </div>
        <div className="film-thumb-container-1">
          <FilmThumbMobile src={filmThumbMobile5Props.src} className={filmThumbMobile5Props.className} />
          <FilmThumbMobile src={filmThumbMobile6Props.src} className={filmThumbMobile6Props.className} />
          <FilmThumbMobile src={filmThumbMobile7Props.src} className={filmThumbMobile7Props.className} />
          <FilmThumbMobile src={filmThumbMobile8Props.src} className={filmThumbMobile8Props.className} />
        </div>
        <div className="film-thumb-container-1">
          <FilmThumbMobile src={filmThumbMobile9Props.src} />
          <FilmThumbMobile src={filmThumbMobile10Props.src} className={filmThumbMobile10Props.className} />
          <FilmThumbMobile src={filmThumbMobile11Props.src} className={filmThumbMobile11Props.className} />
          <FilmThumbMobile src={filmThumbMobile12Props.src} className={filmThumbMobile12Props.className} />
        </div>
      </div>
    </div>
  );
}

export default Property1filmGridMobile;
