import React from "react";
import Buttons from "./../Buttons";
import Cards from "./../Cards";
import Checkboxes from "./../Checkboxes";
import Inputs from "./../Inputs";
import Loaders from "./../Loaders";
import Tabs from "./Tab/tabs";
import Toggle from "./../Toggle";

function TopElement() {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <div class="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div class="absolute inset-x-0 top-0 h-[32rem] bg-[url('/images/background-gradient/1-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/1-dark.png')]"></div>
      </div>
      <div></div>
      <Tabs>
        <div label="Buttons">
          <Buttons />
        </div>
        <div label="Checkboxes">
          <Checkboxes />
        </div>
        <div label="Toggle">
          <Toggle />
        </div>
        <div label="Cards">
          <Cards />
        </div>
        <div label="Loaders">
          <Loaders />
        </div>
        <div label="Inputs">
          <Inputs />
        </div>
      </Tabs>
    </div>
  );
}

export default TopElement;
