import React from "react";
// import points from "../../../../assets/images/logoCover.png";
import { Link } from "react-router-dom";
function Supporters() {
  return (
    <div className="supporters-section creators-section">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div className="absolute inset-x-0 top-0 h-full bg-[url('/images/background-gradient/4-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/4-dark.png')]"></div>
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] absolute inset-x-0 top-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[center_top_-1px]"></div>
      </div>
      <h2 className="supporters-section__heading">Supporters</h2>
      <section className="supporters creators">
        <Link className="creator" to="/profile/tranquoclong">
          <img className="avatar" src="" alt="" loading="lazy" />
          <span className="username-sup">tranquoclong</span>
          <div className="number-of-posts">
            <span className="button button--sup">PRO</span>
          </div>
        </Link>
        <Link className="creator" to="/profile/tranquoclong">
          <img className="avatar" src="" alt="" loading="lazy" />
          <span className="username-sup">quannguyen</span>
          <div className="number-of-posts">
            <span className="button button--sup">PRO</span>
          </div>
        </Link>
        <Link className="creator" to="/profile/tranquoclong">
          <img className="avatar" src="" alt="" loading="lazy" />
          <span className="username-sup">tuanlac</span>
          <div className="number-of-posts">
            <span className="button button--sup">PRO</span>
          </div>
        </Link>
        <Link className="creator" to="/profile/tranquoclong">
          <img className="avatar" src="" alt="" loading="lazy" />
          <span className="username-sup">nguyenductai</span>
          <div className="number-of-posts">
            <span className="button button--sup">PRO</span>
          </div>
        </Link>
      </section>
      <Link className="button sup-button" to="/creators">
        Become a supporter
      </Link>
    </div>
  );
}

export default Supporters;
