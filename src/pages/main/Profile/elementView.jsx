import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import planet from "../../../assets/images/planet.png";
import timeLineYellow from "../../../assets/images/time-line-yellow.svg";
import timeLineVa from "../../../assets/images/time-line-va.svg";
import timeLineGreen from "../../../assets/images/time-line-green.svg";
import timeLineRed from "../../../assets/images/time-line-red.svg";
import timeLineBlue from "../../../assets/images/time-line-blue.svg";
import { useIsLogin } from "../../../hooks/useIsLogin";
import AppButton from "../../../components/Button";
import { useParseUrl } from "../../../hooks/useParseUrl";
import styles from "./profile.module.scss";
import RenderElement from "../../../components/Cards/renderElement";
import { getListElementByCreator } from "../../../api/element";
import Pagination from "../../../components/Pagination";
function ElementView() {
  const { username } = useParams();
  const { search } = useParseUrl();
  const { isLogin, profileRes } = useIsLogin();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [postApproved, setPostApproved] = useState([]);
  const isActive = (path) => {
    if (search?.element === path) return styles.active;
    else return "false";
  };  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    useEffect(
      () => {
        getListElementByCreator({
          username,
          handleStatus: search?.element,
          page,
          pageSize: windowSize.width > 1600 ? 15 : 12,
        }).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setPostApproved(data.data);
            setTotalPages(
              Math.ceil(
                data.metadata.total / (windowSize.width > 1600 ? 15 : 12)
              )
            );
          }
        });
      },
      // eslint-disable-next-line
      [username, search?.element, page]
    );
  return (
    <>
      <div className={styles.elementContainer}>
        <div className={styles.elementTab}>
          <div>
            <nav className="flex space-x-2" aria-label="Tabs">
              <Link
                className={`${styles.timeLineGreen} ${
                  search?.element === undefined && styles.active
                }`}
                to=""
              >
                <img className="tag-icon" src={timeLineGreen} alt="" />
                Public
              </Link>
              {isLogin && profileRes.username === username && (
                <>
                  <Link
                    className={`${styles.timeLineGreen} ${isActive(
                      "variations"
                    )}`}
                    to="?element=variations"
                  >
                    <img className="tag-icon" src={timeLineVa} alt="" />
                    Variations
                  </Link>
                  <Link
                    className={`${styles.timeLineYellow} ${isActive(
                      "pending"
                    )}`}
                    to="?element=pending"
                  >
                    <img className="tag-icon" src={timeLineYellow} alt="" />
                    Review
                  </Link>
                  <Link
                    className={`${styles.timeLineRed} ${isActive("rejected")}`}
                    to="?element=rejected"
                  >
                    <img className="tag-icon" src={timeLineRed} alt="" />
                    Rejected
                  </Link>
                  <Link
                    className={`${isActive("draft")} ${styles.timeLineBlue}`}
                    to="?element=draft"
                  >
                    <img className="tag-icon" src={timeLineBlue} alt="" />
                    Drafts
                  </Link>
                </>
              )}
            </nav>
          </div>
          <div className={styles.filter}>
            <div className="dropdown-container dropdown-orderBy">
              <button className="text-gray-300 h-[40px] text-sm dropdown-trigger px-3 py-2 hover:bg-dark-600 rounded-lg false">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M20 4H4v2.586a1 1 0 0 0 .293.707l5.414 5.414a1 1 0 0 1 .293.707V18l4 3v-7.586a1 1 0 0 1 .293-.707l5.414-5.414A1 1 0 0 0 20 6.586V4Z" />
                  </svg>
                </span>
                favorites
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  />
                </svg>
              </button>
            </div>
            <div className="dropdown-container dropdown-theme">
              <button className="text-gray-300 h-[40px] text-sm dropdown-trigger px-3 py-2 hover:bg-dark-600 rounded-lg false">
                <span className="icon" />
                Any theme
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {postApproved?.length > 0 ? (
        <section className="content">
          <div className="cards-container">
            {postApproved.map((post, index) => (
              <RenderElement post={post} search={search?.element} key={index} />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination value={page} range={totalPages} onChange={setPage} />
          )}
          {/* {totalPages !== page && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="button cta-button"
                onClick={() => setPage(page + 1)}
              >
                {true ? "Load..." : "See More Elements"}
              </button>
            </div>
          )} */}
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
