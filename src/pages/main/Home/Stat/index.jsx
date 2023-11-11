import React from "react";
import { useSelector } from "react-redux";

function Stat({ users }) {
   const { elements } = useSelector((state) => state.element);
  return (
    <div className="home-page__stats">
      <div className="stat">
        <span className="stat__heading">{elements?.length}</span>
        <p className="stat__text">UI elements, ready for you to use</p>
      </div>
      <div className="stat">
        <span className="stat__heading">100%</span>
        <p className="stat__text">Free for personal and commercial use</p>
      </div>
      <div className="stat">
        <span className="stat__heading">{users}</span>
        <p className="stat__text">
          Contributors to the community and users of codeui
        </p>
      </div>
    </div>
  );
}

export default Stat;
