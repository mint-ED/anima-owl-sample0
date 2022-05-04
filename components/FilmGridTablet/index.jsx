import React from "react";
import FilmThumbTablet from "../FilmThumbTablet";
import "./FilmGridTablet.css";

function FilmGridTablet(props) {
  const {
    sectionTitle,
    rowProps,
    rowProps2,
    rowProps3,
    rowProps4,
    rowProps5,
    rowProps6,
    rowProps7,
    rowProps8,
    rowProps9,
    rowProps10,
    rowProps11,
    rowProps12,
  } = props;

  return (
    <div className="container-films-1-3">
      <div className="title-5 worksans-medium-white-17px">{sectionTitle}</div>
      <div className="row">
        <FilmThumbTablet src={rowProps.src} />
        <FilmThumbTablet src={rowProps2.src} className={rowProps2.className} />
        <FilmThumbTablet src={rowProps3.src} className={rowProps3.className} />
        <FilmThumbTablet src={rowProps4.src} className={rowProps4.className} />
      </div>
      <div className="row-1">
        <FilmThumbTablet src={rowProps5.src} />
        <FilmThumbTablet src={rowProps6.src} className={rowProps6.className} />
        <FilmThumbTablet src={rowProps7.src} className={rowProps7.className} />
        <FilmThumbTablet src={rowProps8.src} className={rowProps8.className} />
      </div>
      <div className="row-2">
        <FilmThumbTablet src={rowProps9.src} className={rowProps9.className} />
        <FilmThumbTablet src={rowProps10.src} className={rowProps10.className} />
        <FilmThumbTablet src={rowProps11.src} className={rowProps11.className} />
        <FilmThumbTablet src={rowProps12.src} className={rowProps12.className} />
      </div>
    </div>
  );
}

export default FilmGridTablet;
