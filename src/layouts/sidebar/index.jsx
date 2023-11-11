import React from "react";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import { useParseUrl } from "../../hooks/useParseUrl";
import styles from "./sidebar.module.scss";
import { useSelector } from "react-redux";
function Sidebar() {
  const { listCategories } = useSelector((state) => state.element);
  const { search, objectToQueryString } = useParseUrl();
  const { isLogin } = useIsLogin();
  const isActive = (path) => {
    if (search.category === path) return "active";
    else return "false";
  };
  return (
    <div className="navigation-section">
      <div className="sticky-wrapper">
        <nav className="navigation-categories">
          <Link
            className={`tab tab--all ${isActive("all")}`}
            to={`/elements?category=all&${objectToQueryString("category")}`}
          >
            <div className="tab-content">All</div>
          </Link>
          {listCategories?.map((category, i) => (
            <Link
              className={`tab tab--button ${isActive(category.name)}`}
              to={`/elements?category=${category.name}&${objectToQueryString(
                "category"
              )}`}
              key={i}
            >
              <div className="tab-content">{category.description}</div>
            </Link>
          ))}
          {isLogin && (
            <Link
              className={`tab tab--favorites ${isActive("favorites")}`}
              to={`/elements?category=favorites&${objectToQueryString(
                "category"
              )}`}
            >
              <div className="tab-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"
                  />
                </svg>
                My favorites
              </div>
            </Link>
          )}
        </nav>
        <div className={styles.ads}>
          <div className={styles.adsContent}>
            <Link to="#">
              <img
                alt="ads via Carbon"
                className="block "
                border={0}
                height={100}
                width={150}
              />
            </Link>
          </div>
          <span>ads via Carbon</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
