import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useIsLogin } from "../../hooks/useIsLogin";
import Menu from "./menu";
import logo from "../../assets/images/logo.png";
import Notification from "./notifications/index";
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

function Header() {
  const history = window.location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, profileRes } = useIsLogin();
  const [loading, setLoading] = useState(false);

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
  function handleLogout(e) {
    e.preventDefault();
    navigate("/");
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
          {/* <Link
            className={`hover-underline-animation ${
              history === "/" ? "active" : "false"
            }`}
            to="/"
          >
            Home
          </Link> */}
          <Link
            className={`hover-underline-animation browse-link ${
              history !== "/" &&
              history !== "/subscription" &&
              history !== "/challenges" &&
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
              history === "/challenges" ? "active" : "false"
            }`}
            to="/challenges"
          >
            Challenges
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
              <Point />
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
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48px"
                  height="48px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M10.5,7c-3.57194,0 -6.5,2.92806 -6.5,6.5v17c0,3.57194 2.92806,6.5 6.5,6.5h1.5v5.5c0,1.96599 2.4273,3.17893 4,2l10,-7.5h11.5c3.57194,0 6.5,-2.92806 6.5,-6.5v-17c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM10.5,10h27c1.95006,0 3.5,1.54994 3.5,3.5v17c0,1.95006 -1.54994,3.5 -3.5,3.5h-12c-0.32478,0.00015 -0.64073,0.1057 -0.90039,0.30078l-9.59961,7.19922v-6c-0.00008,-0.82839 -0.67161,-1.49992 -1.5,-1.5h-3c-1.95006,0 -3.5,-1.54994 -3.5,-3.5v-17c0,-1.95006 1.54994,-3.5 3.5,-3.5z" />
                    </g>
                  </g>
                </svg>
              </Link>
              <Menu
                handleLogout={handleLogout}
                user={profileRes}
                isLogin={isLogin}
              />
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
                  xmlnsXlink="http://www.w3.org/1999/xlink"
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
                onClick={() => SignInMail(false)}
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
