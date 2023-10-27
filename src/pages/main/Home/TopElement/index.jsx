import React from "react";
import Buttons from "./../Buttons";
import Tabs from "./Tab/tabs";

function TopElement() {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[url('/images/background-gradient/1-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/1-dark.png')]"></div>
      </div>
      <div></div>
      <Tabs>
        <div label="Buttons">
          <Buttons category="button" />
        </div>
        <div label="Checkboxes">
          <Buttons category="checkbox" />
        </div>
        <div label="Toggle">
          <Buttons category="switch" />
        </div>
        <div label="Cards">
          <Buttons category="card" />
        </div>
        <div label="Loaders">
          <Buttons category="spinner" />
        </div>
        <div label="Inputs">
          <Buttons category="input" />
        </div>
      </Tabs>
    </div>
  );
}

export default TopElement;
