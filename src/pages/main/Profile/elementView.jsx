import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import planet from "../../../assets/images/planet.png";
// import timeLineYellow from "../../../assets/images/time-line-yellow.svg";
import timeLineGreen from "../../../assets/images/time-line-green.svg";
// import timeLineRed from "../../../assets/images/time-line-red.svg";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { getListElementByCreator } from "../../../api/element";
import AppButton from "../../../components/Button";
import { useParseUrl } from "../../../hooks/useParseUrl";
function ElementView({ username }) {
  const { search } = useParseUrl();
  const { isLogin, profileRes } = useIsLogin();
  const [postApproved, setPostApproved] = useState([]);
//   const [postReview, setPostReview] = useState([]);
//   const [postRejected, setPostRejected] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(
    () => {
      setLoading(true);
      getListElementByCreator({ username, page }).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setPostApproved([...postApproved, ...data.posts]);
          setTotalPages(data.totalPage);
        }
        setLoading(false);
      });
    },
    // eslint-disable-next-line
    [page, search?.element]
  );
//   const renderElementView = ({ role }) => {
//     const currentView = { approved: "", pending: "", rejected: "", draft: "" }[
//       role
//     ];
//     return <div> {currentView} </div>;
//   };
  return (
    <>
      {postApproved?.length > 0 ? (
        <section className="content">
          <h3 className="posts-title">
            <img className="tag-icon" src={timeLineGreen} alt="" />
            <span className="title">Approved</span>
            <span className="subtitle">public</span>
          </h3>
          <div className="cards-container">
            {postApproved.map((post, index) => (
              <article
                className={`card card--button ${
                  post.theme === "dark" && "dark-background"
                }`}
                key={index}
              >
                <div className="card-content">
                  <Link to={`/detail/${post._id}`} className="get-html-css">
                    Get <span className="html">HTML</span> &amp;{" "}
                    <span className="css">CSS</span>
                  </Link>
                  <style
                    // dangerouslySetInnerHTML={{
                    //   __html: `.${"ui" + post._id} ` + post.css,
                    // }}
                    dangerouslySetInnerHTML={{
                      __html: `.ui${post._id} ${post.css} `,
                    }}
                  />
                  <div
                    id="container"
                    className={`card__button-container ${"ui" + post._id}`}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  ></div>
                </div>
                <div className="card__footer">
                  <div className="card__views">
                    {post.favoriteCount.length} Favorites
                  </div>
                </div>
              </article>
            ))}
          </div>
          {totalPages !== page && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="button cta-button"
                onClick={() => setPage(page + 1)}
                disabled={loading}
              >
                {loading ? "Load..." : "See More Elements"}
              </button>
            </div>
          )}
        </section>
      ) : (
        <article className="no-posts-card">
          <div className="no-posts-card__content">
            <div className="image-container">
              <img className="image" src={planet} alt="" />
            </div>
            <h3 className="heading">
              It looks like you're new here. Don't be shy, click the 'Create'
              button and introduce yourself to the rest of the galaxy.
            </h3>
            <p className="paragraph" />
            {isLogin && profileRes.username === username && (
              <AppButton
                children="Create"
                btnType="button_1"
                htmlType="link"
                url="/create"
                Icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    />
                  </svg>
                }
              />
            )}
          </div>
        </article>
      )}
    </>
  );
}

export default ElementView;
