import React, { useMemo } from "react";
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
// import { getListElementByCreator } from "../../../api/element";
import Pagination from "../../../components/Pagination";
import Randomized from "../Element/randomized";
import { useSelector } from "react-redux";
import useTimeBasedRandom from "../../../core/useTimeBasedRandom";
import cssIcon from "../../../assets/images/css.svg";
import scssIcon from "../../../assets/images/scss.svg";
import tailwindIcon from "../../../assets/images/tailwind.svg";
import CategoryView from "./categoryView";
function ElementView() {
  const { username } = useParams();
  const { search, objectToQueryString, pathname } = useParseUrl();
  const { isLogin, profileRes } = useIsLogin();
  const { elements, totalElements } = useSelector((state) => state.element);
  const filteredElements = useMemo(() => {
    return elements.filter((element) => element.usernameCreator === username);
  }, [elements, username]);
  const { randomizedArray } = useTimeBasedRandom(filteredElements);
  const renderElements = useMemo(() => {
    return randomizedArray
      .filter((post) => {
        return (
          (search.element
            ? post.status === search.element.toUpperCase()
            : post.status === "APPROVED") &&
          (search.category && search.category !== "all"
            ? post.category === search.category
            : true) &&
          (search.c ? post.typeCSS === search.c : true)
        );
      })
      .sort((a, b) => {
        return search.filter === "desc"
          ? new Date(b.createDate) - new Date(a.createDate)
          : true && search.filter === "asc"
          ? new Date(a.createDate) - new Date(b.createDate)
          : true;
      });
  }, [randomizedArray, search]);
  const navC = [
    {
      name: "Mixed",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 mr-1"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M18.189 4c.986.74 1.878 1.599 2.654 2.556.105.13.157.287.157.444m-2.811 3a14.998 14.998 0 0 0 2.654-2.556A.703.703 0 0 0 21 7m0 0h-3.876a6 6 0 0 0-4.915 2.56L8.79 14.44A6 6 0 0 1 3.876 17H2m16.189 3a14.998 14.998 0 0 0 2.654-2.556A.704.704 0 0 0 21 17m-2.811-3c.986.74 1.878 1.599 2.654 2.556.105.13.157.287.157.444m0 0h-3.876a6 6 0 0 1-3.808-1.363M2 7h1.876a6 6 0 0 1 3.969 1.5" />
        </svg>
      ),
      url: false,
    },
    {
      name: "Tailwind CSS",
      icon: (
        <img
          src={tailwindIcon}
          alt="scssIcon"
          style={{ width: "30px", padding: "2px" }}
        />
      ),
      url: "tailwind",
    },
    {
      name: "CSS",
      icon: <img src={cssIcon} alt="cssIcon" style={{ width: "27px" }} />,
      url: "css",
    },
    {
      name: "SCSS",
      icon: <img src={scssIcon} alt="scssIcon" style={{ width: "22px" }} />,
      url: "scss",
    },
  ];
  const isActive = (path) => {
    if (search?.element === path) return styles.active;
    else return "false";
  };

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
          <div className="filters-controls flex justify-end flex-wrap gap-1 gap-y-2 false">
            <div className="h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block" />
            <div className="items-center hidden gap-1 text-sm lg:flex">
              {navC.map((c, i) => (
                <Link
                  to={`/${pathname}?${objectToQueryString("c")}${
                    c.url ? "&c=" + c.url : ""
                  }`}
                  className={`flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 ${
                    c.url === search.c || (!search.c && !c.url)
                      ? "bg-dark-600"
                      : "hover:bg-dark-600"
                  } rounded-lg text-gray-200`}
                  key={i}
                >
                  {c.icon}
                  {c.name}
                </Link>
              ))}
            </div>
            <div className="h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block" />
            <Randomized />
            <CategoryView />
          </div>
        </div>
      </div>
      {renderElements?.length > 0 ? (
        <section className="content">
          <div className="cards-container">
            {renderElements
              .slice(
                ((search.page || 1) - 1) * totalElements.windowSize,
                (search.page || 1) * totalElements.windowSize
              )
              .map((post, index) => (
                <RenderElement
                  post={post}
                  search={search?.element}
                  key={index}
                />
              ))}
          </div>
          {Math.ceil(renderElements?.length / totalElements.windowSize) > 1 && (
            <Pagination
              value={parseInt(search.page) || 1}
              range={Math.ceil(
                renderElements?.length / totalElements.windowSize
              )}
            />
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
