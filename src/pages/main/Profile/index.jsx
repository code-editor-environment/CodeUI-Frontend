import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../configs/firebase.configs";
import planet from "../../../assets/images/planet.png";
import timeLineYellow from "../../../assets/images/time-line-yellow.svg";
import timeLineGreen from "../../../assets/images/time-line-green.svg";
import timeLineRed from "../../../assets/images/time-line-red.svg";
import timeLineBlue from "../../../assets/images/time-line-blue.svg";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { actLogout, getProfile } from "../../../store/profile/profile-slice";
import {
  getProfiles,
  getFollower,
  getFollowing,
  postFollowCreator,
} from "../../../api/account";
import { getListElementByCreator } from "../../../api/element";
import AppButton from "../../../components/Button";
import { open } from "../../../store/modal/modal-slice";
import UpdateProfileModal from "../../../components/Modal/updateProfileModal";
import styles from "./profile.module.scss";
import { useParseUrl } from "../../../hooks/useParseUrl";
// import Element from './../Element/index';
function Profile() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { search } = useParseUrl();
  const { isLogin, profileRes } = useIsLogin();
  const { profiles } = useSelector((state) => state.profile);
  const [postApproved, setPostApproved] = useState([]);
  // const [postReview, setPostReview] = useState([]);
  const [follow, setFollow] = useState(false);
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
      setLoading(true);
      getProfiles(username).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          dispatch(getProfile(data.data));
          setFollow(data.data.isFollow);
        }
        setLoading(false);
      });
      getFollower(username).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setFollower(data.metadata?.total);
        }
      });
      // getFollowing(username).then((data) => {
      //   if (data.error) {
      //     console.log(data.error);
      //   } else {
      //     setFollowing(data.metadata?.total);
      //   }
      // });
    },
    // eslint-disable-next-line
    [username]
  );
  const fetchPost = async () => {
    await getDocs(
      query(
        collection(db, `elements`),
        where("category", "==", "input")
      )
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // setPostApproved(newData);
      console.log(newData);
    });
  };
  useEffect(
    () => {
      const handleStatus = search?.element
        ? search?.element.toUpperCase()
        : "APPROVED";
      getListElementByCreator({ handleStatus, username, page }).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          fetchPost(data.data);
          // setPostApproved(data.data);
          setTotalPages(data.metadata?.total);
        }
      });
    },
    // eslint-disable-next-line
    [username, search?.element, page]
  );
  const onUpdateProfileModal = () => {
    dispatch(open(<UpdateProfileModal />));
  };
  function handleLogout(e) {
    e.preventDefault();
    dispatch(actLogout());
  }
  const isActive = (path) => {
    if (search?.element === path) return styles.active;
    else return "false";
  };
      const onFollow =() => {
        setFollow(!follow);
      const timeout = setTimeout(() => {
        postFollowCreator(username);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  return (
    <main className="profile-page">
      {!profiles ? (
        ""
      ) : (
        <>
          <section className="profile">
            <img
              className="profile-image"
              src={profiles.imageUrl}
              alt={profiles.username}
            />
            <aside>
              <h1 className="username">
                {profiles.firstName || profiles.username}
              </h1>
              <h4 className="profile-name">@{profiles.username}</h4>
              <div className="bio">{profiles.description}</div>
              <div className="details">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2zm-5-2h2v-8h-6v8h2v-6h2v6zm0-10V5H5v14h6V9h6zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7V7z"
                    />
                  </svg>
                  {profiles.company}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                    />
                  </svg>
                  {profiles.location}
                </span>
                <Link to={profiles.html_url} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                    />
                  </svg>
                  {profiles.login}
                </Link>
              </div>
              <div className="details">
                <div className="detailTag">
                  <span>{follow ? follower + 1 : follower}</span>
                  <span>Follower</span>
                </div>
                <div className="detailTag">
                  <span>{following}</span>
                  <span>Following</span>
                </div>
                <div className="detailTag">
                  <span>{totalPages}</span>
                  <span>total Elements</span>
                </div>
                {/* <div className="detailTag">
                  <span>100</span>
                  <span>favorited </span>
                </div> */}
              </div>
              {isLogin && profileRes.username === username ? (
                <div className="buttons">
                  <AppButton
                    children="Edit profile"
                    btnType="button_0"
                    Icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"
                        ></path>
                      </svg>
                    }
                    onClick={onUpdateProfileModal}
                  />
                  <AppButton
                    children="Log out"
                    btnType="button_2"
                    onClick={handleLogout}
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
                          d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
                        />
                      </svg>
                    }
                  />
                </div>
              ) : (
                <div className="buttons">
                  <AppButton
                    children={follow ? "UnFollow" : "Follow"}
                    btnType="button_0"
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
                    onClick={onFollow}
                  />
                  <AppButton
                    children="Donate"
                    btnType="button_1"
                    htmlType="a"
                    Icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 512.001 512.001"
                      >
                        <g>
                          <path
                            d="M402.178 28.989C385.544 10.295 362.487 0 337.253 0c-28.166 0-52.581 13.318-70.606 38.513a120.76 120.76 0 0 0-3.801 5.648 119.433 119.433 0 0 0-3.8-5.648C241.02 13.318 216.605 0 188.439 0c-25.234 0-48.292 10.295-64.925 28.988-15.784 17.74-24.478 41.456-24.478 66.779 0 27.519 10.679 52.912 33.604 79.916 20.003 23.56 48.695 47.777 81.919 75.819 12.277 10.363 24.973 21.078 38.464 32.771a14.967 14.967 0 0 0 9.822 3.664 14.97 14.97 0 0 0 9.822-3.664c13.489-11.69 26.183-22.405 38.46-32.766 21.337-18.01 39.764-33.563 55.755-48.649 31.046-29.292 59.774-62.539 59.774-107.09 0-25.324-8.693-49.039-24.478-66.779zm-55.879 152.052c-15.386 14.517-33.52 29.822-54.517 47.544-9.341 7.883-18.921 15.969-28.936 24.557-10.017-8.587-19.6-16.675-28.941-24.56-65.399-55.199-104.875-88.517-104.875-132.814-.002-37.497 25.538-65.773 59.408-65.773 18.095 0 33.484 8.518 45.739 25.317 10.058 13.786 14.187 28.078 14.215 28.174a14.998 14.998 0 0 0 28.906 0c.148-.535 15.33-53.491 59.955-53.491 33.869 0 59.41 28.277 59.41 65.773 0 27.169-14.121 51.077-50.364 85.273zM466.954 302.047c-12.441 0-24.442 5.223-32.925 14.329l-44.077 47.318c-5.697-18.316-22.805-31.653-42.971-31.653h-69.28a39.843 39.843 0 0 1-26.334-9.937c-39.163-34.464-98.029-34.767-137.564-.953-8.153-11.543-21.587-19.103-36.763-19.103H15.054c-8.282 0-14.997 6.714-14.997 14.997v179.96c0 8.282 6.714 14.997 14.997 14.997H77.04c13.468 0 25.564-5.957 33.816-15.365l8.881 2.496a344.898 344.898 0 0 0 93.335 12.868H346.98c32.866 0 64.261-15.698 83.981-41.991l71.999-95.997.004-.006c5.875-7.834 8.98-17.16 8.98-26.971 0-24.807-20.183-44.989-44.99-44.989zM92.037 467.01c0 8.269-6.727 14.997-14.997 14.997H30.05V332.04h46.99c8.269 0 14.997 6.727 14.997 14.997V467.01zm386.93-110.996-.002.002-71.998 95.999c-14.086 18.781-36.511 29.993-59.987 29.993H213.075a314.925 314.925 0 0 1-85.219-11.749l-5.865-1.649c.019-.532.041-1.063.041-1.599V353.816l10.451-9.197c28.24-24.85 70.831-24.852 99.073 0a69.815 69.815 0 0 0 46.147 17.413h69.28c8.269 0 14.997 6.728 14.997 14.997s-6.727 14.997-14.997 14.997H240.398c-8.282 0-14.997 6.714-14.997 14.997s6.714 14.997 14.997 14.997h116.634c12.441 0 24.44-5.221 32.921-14.325l66.023-70.876c2.871-3.082 6.77-4.779 10.978-4.779 8.269 0 14.997 6.727 14.997 14.997 0 3.27-1.032 6.374-2.984 8.977z"
                            fill="#fff"
                          ></path>
                        </g>
                      </svg>
                    }
                  />
                </div>
              )}
            </aside>
          </section>
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
                        className={`${styles.timeLineYellow} ${isActive(
                          "pending"
                        )}`}
                        to="?element=pending"
                      >
                        <img className="tag-icon" src={timeLineYellow} alt="" />
                        Review
                      </Link>
                      <Link
                        className={`${styles.timeLineRed} ${isActive(
                          "rejected"
                        )}`}
                        to="?element=rejected"
                      >
                        <img className="tag-icon" src={timeLineRed} alt="" />
                        Rejected
                      </Link>
                      <Link
                        className={`${isActive("draft")} ${
                          styles.timeLineBlue
                        }`}
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
          {postApproved.length > 0 ? (
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
                        {post.favoriteCount?.length} Favorites
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
                  It looks like you're new here. Don't be shy, click the
                  'Create' button and introduce yourself to the rest of the
                  galaxy.
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
      )}
    </main>
  );
}

export default Profile;
