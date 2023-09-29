import React from "react";
import points from "../../../../assets/images/logoCover.png";
import { Link } from "react-router-dom";
import AppButton from "../../../../components/Button";
// import SkeletonCreator from "../../../../components/Skeleton/skeletonCreator";
function TopCreate() {
  return (
    <div className="creators-section">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div className="absolute inset-x-0 top-0 h-full bg-[url('/images/background-gradient/4-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/4-dark.png')]"></div>
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] absolute inset-x-0 top-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[center_top_-1px]"></div>
      </div>
      <h2 className="creators-section__heading">Top Creators</h2>
      {/* <SkeletonCreator total ={6}/> */}
      <section className="creators">
        <Link className="creator" to="/creators">
          <span className="rank">1</span>
          <img
            className="avatar"
            src="https://img.icons8.com/?size=200&id=keI1M862UTP2&format=png"
            alt=""
            loading="lazy"
          />
          <span className="username">username</span>
          <div className="number-of-posts">
            <span className="value">10</span>
            <span className="label">posts</span>
          </div>
          <div className="points-tag">
            <img src={points} alt="" /> 100
          </div>
        </Link>
        <Link className="creator" to="/creators">
          <span className="rank">2</span>
          <img
            className="avatar"
            src="https://img.icons8.com/?size=200&id=keI1M862UTP2&format=png"
            alt=""
            loading="lazy"
          />
          <span className="username">username</span>
          <div className="number-of-posts">
            <span className="value">10</span>
            <span className="label">posts</span>
          </div>
          <div className="points-tag">
            <img src={points} alt="" /> 100
          </div>
        </Link>
        <Link className="creator" to="/creators">
          <span className="rank">3</span>
          <img
            className="avatar"
            src="https://img.icons8.com/?size=200&id=keI1M862UTP2&format=png"
            alt=""
            loading="lazy"
          />
          <span className="username">username</span>
          <div className="number-of-posts">
            <span className="value">10</span>
            <span className="label">posts</span>
          </div>
          <div className="points-tag">
            <img src={points} alt="" /> 100
          </div>
        </Link>
        <Link className="creator" to="/creators">
          <span className="rank">4</span>
          <img
            className="avatar"
            src="https://img.icons8.com/?size=200&id=keI1M862UTP2&format=png"
            alt=""
            loading="lazy"
          />
          <span className="username">username</span>
          <div className="number-of-posts">
            <span className="value">10</span>
            <span className="label">posts</span>
          </div>
          <div className="points-tag">
            <img src={points} alt="" /> 100
          </div>
        </Link>
        <Link className="creator" to="/creators">
          <span className="rank">5</span>
          <img
            className="avatar"
            src="https://img.icons8.com/?size=200&id=keI1M862UTP2&format=png"
            alt=""
            loading="lazy"
          />
          <span className="username">username</span>
          <div className="number-of-posts">
            <span className="value">10</span>
            <span className="label">posts</span>
          </div>
          <div className="points-tag">
            <img src={points} alt="" /> 100
          </div>
        </Link>
        <Link className="creator" to="/creators">
          <span className="rank">6</span>
          <img
            className="avatar"
            src="https://img.icons8.com/?size=200&id=keI1M862UTP2&format=png"
            alt=""
            loading="lazy"
          />
          <span className="username">username</span>
          <div className="number-of-posts">
            <span className="value">10</span>
            <span className="label">posts</span>
          </div>
          <div className="points-tag">
            <img src={points} alt="" /> 100
          </div>
        </Link>
      </section>
      <AppButton
        children="See all Creators"
        btnType="button_0"
        htmlType="link"
        url="/creators"
      />
    </div>
  );
}

export default TopCreate;
