import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import points from "../../../assets/images/logoCover.png";
// import useQuery from "../../../hooks/useQuery";
import { getTopCreators } from "../../../api/account";
import { useDispatch, useSelector } from "react-redux";
import { getTopCreator } from "../../../store/creator/creator-slice";
function Creators() {
  const dispatch = useDispatch();
  // const query = useQuery();
  // const text = query.get("text");
  const { topCreator } = useSelector((state) => state.creator);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    getTopCreators().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(getTopCreator(data.list));
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="creators-page">
      <div>
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block"></div>
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[url('/images/background-gradient/1-light.jpg')] bg-[length:125rem_100%] bg-top bg-no-repeat dark:bg-[url('/images/background-gradient/1-dark.png')]"></div>
      </div>
      <h1 className="heading">Top Creators</h1>
      <section className="creators">
        {topCreator.length > 0 ? (
          <>
            {topCreator.map((user, index) => (
              <article className="creator" key={index}>
                <span className="rank">{index + 1}</span>
                <img className="avatar" src={user.avatar_url} alt="" />
                <span className="username">{user.name}</span>
                <Link to={`/profile/${user.login}`} className="number-of-posts">
                  <span className="span-gradient-lighterMain">
                    Visit profile
                  </span>
                </Link>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <div className="points-tag">
                    <img src={points} alt="" /> 100
                  </div>
                  <div className="points-tag">Post: 100</div>
                  <div className="points-tag">
                    Follow: 100
                  </div>
                </div>
              </article>
            ))}
          </>
        ) : (
          "not found"
        )}
      </section>
      <button className="button cre-button">See more Creator</button>
    </div>
  );
}

export default Creators;
