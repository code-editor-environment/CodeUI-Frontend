import React from 'react'
import point from "../../../assets/images/logoCover.png";
import styles from "./point.module.scss";
function Point() {
  return (
    <div className={styles.point}>
      <div
        className="hover:bg-sky-500 points-tag pl-3.5 pr-4 rounded-lg h-[42px]"
        id="points-tooltip"
      >
        <img src={point} alt="" />
        100
      </div>
      <div
        className={`${styles.info} styles-module_tooltip__mnnfp styles-module_dark__xNqje points-tooltip shadow-lg bg-dark-600 styles-module_show__2NboJ styles-module_clickable__Bv9o7`}
        style={{ left: "-125px", top: "55px" }}
      >
        <span className="heading">
          <img src={point} alt="" />
          Creator Points
        </span>
        <p className="font-normal text-gray-300">
          Join the ranks of top contributors by accumulating points for your
          published posts and popular content.
        </p>
        <div
          className="react-tooltip-arrow styles-module_arrow__K0L3T"
          style={{ left: 171, top: "-4px" }}
        />
      </div>
    </div>
  );
}

export default Point