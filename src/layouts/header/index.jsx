import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useIsLogin } from "../../hooks/useIsLogin";
import Menu from "./menu";
import logo from "../../assets/images/logo.png";
import Notification from "./notifications/index";
// import { open } from "../../store/modal/modal-slice";
// import LoginModal from "../../components/Modal/loginModal";
// import RegisterModal from "../../components/Modal/registerModal";
import { auth } from "../../configs/firebase.configs";
import { signInMail } from "../../api/auth";
import {
  actLogout,
  userProfile,
  userProfileRes,
} from "../../store/profile/profile-slice";
import AppButton from "../../components/Button";
import { setStorage } from "../../utils/helper";
import Point from "./point";
// import Element from './../../pages/main/Element/index';

function Header() {
  const history = window.location.pathname;
  const dispatch = useDispatch();
  const { isLogin, profileRes } = useIsLogin();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const queryString = window.location.search;
    const ulrParams = new URLSearchParams(queryString);
    const codeParams = ulrParams.get("code");
    if (codeParams && localStorage.getItem("userLogin") === null) {
      async function getAccessToken() {
        await axios({
          method: "GET",
          url: `${import.meta.env.NODE_DOMAIN}/signIn?code=` + codeParams,
        }).then((response) => {
          if (response.data) {
            dispatch(userProfile(response.data));
            localStorage.setItem("userLogin", JSON.stringify(response.data));
          }
        });
      }
      getAccessToken();
    }
    // eslint-disable-next-line
  }, []);

  const loginWithGithub = () => {
    // window.location.assign(
    //   "https://github.com/login/oauth/authorize?client_id=" +
    //     process.env.CLIENT_ID
    // );
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=058e13ea18e2678c39aa"
    );
  };
  // const onLoginModal = () => {
  //   dispatch(open(<LoginModal />));
  // };
  // const onRegisterModal = () => {
  //   dispatch(open(<RegisterModal />));
  // };
  const SignInMail = (type) => {
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    signInWithPopup(auth, type ? providerGoogle : providerGithub)
      .then(function (result) {
        setLoading(true);
        signInMail(result.user.accessToken).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            dispatch(
              userProfile({
                accessToken: data.data.access_token,
                id: data.data.account.id,
              })
            );
            dispatch(
              userProfileRes({
                username: data.data.account.profileResponse.username,
                imageUrl: data.data.account.profileResponse.imageUrl,
              })
            );
            setStorage([
              {
                key: "codeUiLog",
                value: JSON.stringify({
                  accessToken: data.data.access_token,
                  id: data.data.account.id,
                }),
              },
              {
                key: "profileResponse",
                value: JSON.stringify({
                  username: data.data.account.profileResponse.username,
                  imageUrl: data.data.account.profileResponse.imageUrl,
                }),
              },
            ]);
          }
          setLoading(false);
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  // const gitHubSignIn = () => {
  //   const provider = new GithubAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then(function (result) {
  //       var user = result.user;
  //       console.log("accessToken: ", user);
  //     })
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.error(errorCode, errorMessage);
  //     });
  // };
  function handleLogout(e) {
    e.preventDefault();
    dispatch(actLogout());
  }
  return (
    <header className="root-container header">
      <Link className="logo-wrapper" to="/">
        <h1
          className="home-page__heading"
          style={{ fontSize: "26px", margin: 0, padding: 0 }}
        >
          {/* <span>CODE</span>UI */}
          <img src={logo} alt="logo" />
        </h1>
      </Link>
      <nav className="navigation">
        <div className="links">
          <Link
            className={`hover-underline-animation ${
              history === "/" ? "active" : "false"
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`hover-underline-animation browse-link ${
              history !== "/" &&
              history !== "/subscription" &&
              history !== "/creators"
                ? "active"
                : "false"
            }`}
            to="/elements?category=all"
          >
            Elements
          </Link>
          <Link
            className={`hover-underline-animation ${
              history === "/creators" ? "active" : "false"
            }`}
            to="/creators"
          >
            Creators
          </Link>
          <Link
            className={`hover-underline-animation ${
              history === "/subscription" ? "active" : "false"
            }`}
            to="/subscription"
          >
            Subscription
          </Link>
          <div className="category-links">
            <Link className="hover-underline-animation null" to="/all">
              Browse all
            </Link>
            <Link className="hover-underline-animation null" to="/buttons">
              Buttons
            </Link>
            <Link className="hover-underline-animation null" to="/checkboxes">
              Checkboxes
            </Link>
            <Link className="hover-underline-animation null" to="/switches">
              Toggle switches
            </Link>
            <Link className="hover-underline-animation null" to="/cards">
              Cards
            </Link>
            <Link className="hover-underline-animation null" to="/loaders">
              Loaders
            </Link>
            <Link className="hover-underline-animation null" to="/inputs">
              Inputs
            </Link>
            <Link className="hover-underline-animation null" to="/favorites">
              My favorites
            </Link>
          </div>
        </div>
        <div className="buttons">
          {isLogin ? (
            <>
              <Point/>
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
              <Notification />
              <Link
                className="button button--secondary button--notifications false"
                to="/chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <linearGradient
                      id="a"
                      x1="12"
                      x2="12"
                      y1="2"
                      y2="21.99"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#138bd7"></stop>
                      <stop offset="1" stopColor="#62aafb"></stop>
                    </linearGradient>
                    <path
                      fill="url(#a)"
                      d="M17 2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V6.98C22 4.23 19.76 2 17 2zm-4 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zm4-5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75z"
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </Link>
              <Menu handleLogout={handleLogout} user={profileRes} />
            </>
          ) : (
            <>
              {/* <button
                className="button button--secondary button--sign-in"
                onClick={onLoginModal}
              >
                Log In
              </button>
              <button
                className="button button--secondary button--sign-in"
                onClick={onRegisterModal}
              >
                Register
              </button> */}
              <button
                className="button button--secondary button--sign-in"
                onClick={() => SignInMail(true)}
                disabled={loading}
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="48px"
                  height="48px"
                  viewBox="0,0,256,256"
                >
                  <g transform="scale(5.33333,5.33333)">
                    <path
                      d="M43.611,20.083h-1.611v-0.083h-18v8h11.303c-1.649,4.657 -6.08,8 -11.303,8c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c3.059,0 5.842,1.154 7.961,3.039l5.657,-5.657c-3.572,-3.329 -8.35,-5.382 -13.618,-5.382c-11.045,0 -20,8.955 -20,20c0,11.045 8.955,20 20,20c11.045,0 20,-8.955 20,-20c0,-1.341 -0.138,-2.65 -0.389,-3.917z"
                      fill="#fbc02d"
                    ></path>
                    <path
                      d="M6.306,14.691l6.571,4.819c1.778,-4.402 6.084,-7.51 11.123,-7.51c3.059,0 5.842,1.154 7.961,3.039l5.657,-5.657c-3.572,-3.329 -8.35,-5.382 -13.618,-5.382c-7.682,0 -14.344,4.337 -17.694,10.691z"
                      fill="#e53935"
                    ></path>
                    <path
                      d="M24,44c5.166,0 9.86,-1.977 13.409,-5.192l-6.19,-5.238c-2.008,1.521 -4.504,2.43 -7.219,2.43c-5.202,0 -9.619,-3.317 -11.283,-7.946l-6.522,5.025c3.31,6.477 10.032,10.921 17.805,10.921z"
                      fill="#4caf50"
                    ></path>
                    <path
                      d="M43.611,20.083l-0.016,-0.083h-1.595h-18v8h11.303c-0.792,2.237 -2.231,4.166 -4.087,5.571c0.001,-0.001 0.002,-0.001 0.003,-0.002l6.19,5.238c-0.438,0.398 6.591,-4.807 6.591,-14.807c0,-1.341 -0.138,-2.65 -0.389,-3.917z"
                      fill="#1565c0"
                    ></path>
                  </g>
                </svg>
                Login Google
              </button>
              <button
                className="button button--secondary button--sign-in"
                // onClick={() => SignInMail(false)}
                onClick={loginWithGithub}
                disabled={loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Login Github
              </button>
            </>
          )}
        </div>
      </nav>
      <button className="button button--secondary burger-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;
