import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import points from "../../../assets/images/logoCover.png";
// import useQuery from "../../../hooks/useQuery";
import { getTopCreators } from "../../../api/account";
import { useDispatch, useSelector } from "react-redux";
import { getTopCreator } from "../../../store/creator/creator-slice";
import AppButton from "../../../components/Button";
function Creators() {
  const dispatch = useDispatch();
  // const query = useQuery();
  // const text = query.get("text");
  const { topCreator } = useSelector((state) => state.creator);
  const [pageSize, setPageSize] = useState(8);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    getTopCreators({ page: 1, pageSize: pageSize }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(getTopCreator(data.data));
      }
    });
    // eslint-disable-next-line
  }, [pageSize]);
  return (
    <div className="creators-page">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[url('/images/background-gradient/1-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/1-dark.png')]"></div>
      </div>
      <h1 className="heading">Top Creators</h1>
      <section className="topCreators creators">
        {topCreator?.length > 0 ? (
          <>
            {topCreator.map((user, index) => (
              <Link
                to={`/profile/${user.username}`}
                className="creator"
                key={index}
              >
                <span className="rank">{index + 1}</span>
                <img
                  className="avatar"
                  src={user.profileResponse.imageUrl}
                  alt=""
                />
                <span className="username" style={{ maxWidth: "100%" }}>
                  {user.username}
                </span>
                <Link to={`/profile/${user.login}`} className="number-of-posts">
                  <div className="points-tag">
                    <img src={points} alt="" /> <span>100</span>
                  </div>
                </Link>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <div className="points-tag">Element: 0</div>
                  <div className="points-tag">Follow: 0</div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          "not found"
        )}
      </section>
      {pageSize === 8 && (
        <AppButton
          children="See more Creators"
          btnType="button_0"
          onClick={() => setPageSize(40)}
        />
      )}
    </div>
  );
}

export default Creators;
