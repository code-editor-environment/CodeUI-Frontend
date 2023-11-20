import React from "react";
import points from "../../../../assets/images/logoCover.png";
import { Link } from "react-router-dom";
import AppButton from "../../../../components/Button";
import SkeletonCreator from "../../../../components/Skeleton/skeletonCreator";
function TopCreate({ topCreator }) {
  return (
    <div className="creators-section">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div className="absolute inset-x-0 top-0 h-full bg-[url('/images/background-gradient/4-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/4-dark.png')]"></div>
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] absolute inset-x-0 top-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[center_top_-1px]"></div>
      </div>
      <h2 className="creators-section__heading">Top Creators</h2>
      <section className="creators">
        {topCreator.length > 0 ? (
          topCreator.map((user, index) => (
            <Link
              to={`/profile/${user.id}`}
              className="creator"
              key={index}
            >
              <span className="rank">{index + 1}</span>
              <img
                className="avatar"
                src={user.profileResponse.imageUrl}
                alt=""
                loading="lazy"
              />
              <span className="username">{user.username}</span>
              <div className="number-of-posts">
                <span className="value">
                  {user.profileResponse.totalApprovedElement}
                </span>
                <span className="label">posts</span>
              </div>
              <div className="points-tag">
                <img src={points} alt="" /> {user.profileResponse.wallet}
              </div>
            </Link>
          ))
        ) : (
          <SkeletonCreator total={6} />
        )}
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
