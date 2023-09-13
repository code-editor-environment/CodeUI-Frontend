import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import { actLogout } from "../../store/actions/user.action";
import Menu from "./menu";
import logo from "../../assets/images/logo.png";
import Notification from "./notifications/index";
import { open } from "../../store/modal/modal-slice";
import LoginModal from "../../components/Modal/loginModal";
// import Element from './../../pages/main/Element/index';

function Header() {
  const history = window.location.pathname;
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
//   useEffect(() => {
//     const queryString = window.location.search;
//     const ulrParams = new URLSearchParams(queryString);
//     const codeParams = ulrParams.get("code");
//     if (codeParams && localStorage.getItem("userLogin") === null) {
//       async function getAccessToken() {
//         await axios({
//           method: "GET",
//           url: `${process.env.REACT_APP_API_URL}/signIn?code=` + codeParams,
//         }).then((response) => {
//           if (response.data) {
//             dispatch({
//               type: LOGIN_SUCCESS,
//               payload: response.data,
//             });
//             localStorage.setItem("userLogin", JSON.stringify(response.data));
//           }
//         });
//       }
//       getAccessToken();
//     }
//     // eslint-disable-next-line
//   }, []);

  const loginWithGithub = () => {
    // window.location.assign(
    //   "https://github.com/login/oauth/authorize?client_id=" +
    //     process.env.CLIENT_ID
    // );
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=058e13ea18e2678c39aa"
    );
  };
  const onLoginModal = () => {
    dispatch(open(<LoginModal />));
  };
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
              history !== "/" && history !== "/creators" ? "active" : "false"
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
              <Link
                to="/create"
                className="button button--primary button--icon button--create"
              >
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
                Create
              </Link>
              <Notification />
              <Menu handleLogout={handleLogout} user={isLogin.user} />
            </>
          ) : (
            <>
              <button
                className="button button--secondary button--sign-in"
                onClick={onLoginModal}
              >
                Sign in
              </button>
              <button
                className="button button--secondary button--sign-in"
                onClick={loginWithGithub}
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
                Sign in Github
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
