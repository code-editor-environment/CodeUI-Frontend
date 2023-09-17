import React from "react";

import "./err.scss";

function Err() {
  return (
    <div className="err-container">
      <div className="meteors-container">
        <div className="meteor meteor--1" />
        <div className="meteor meteor--2" />
      </div>
      <div className="moon-container">
        <div className="moon__light-container">
          <div className="moon__light moon__light--1" />
          <div className="moon__light moon__light--2" />
          <div className="moon__light moon__light--3" />
        </div>
        <div style={{ display: "contents" }}>
          <div
            className="num_light num_light-1"
          >
            <span>4</span>
          </div>
          <div className="moon" />
          <div
            className="num_light num_light-2"
          >
            <span>4</span>
          </div>
        </div>
        <div className="moon__stain-container">
          <div className="moon__stain moon__stain--1" />
          <div className="moon__stain moon__stain--2" />
          <div className="moon__stain moon__stain--3" />
        </div>
      </div>
    </div>
  );
}

export default Err;
