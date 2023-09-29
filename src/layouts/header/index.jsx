import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import Menu from "./menu";
import logo from "../../assets/images/logo.png";
import Notification from "./notifications/index";
import { open } from "../../store/modal/modal-slice";
import LoginModal from "../../components/Modal/loginModal";
import RegisterModal from "../../components/Modal/registerModal";
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

  // const loginWithGithub = () => {
  //   // window.location.assign(
  //   //   "https://github.com/login/oauth/authorize?client_id=" +
  //   //     process.env.CLIENT_ID
  //   // );
  //   window.location.assign(
  //     "https://github.com/login/oauth/authorize?client_id=058e13ea18e2678c39aa"
  //   );
  // };
  const onLoginModal = () => {
    dispatch(open(<LoginModal />));
  };
  const onRegisterModal = () => {
    dispatch(open(<RegisterModal />));
  };
  function handleLogout(e) {
    e.preventDefault();
    // dispatch(actLogout());
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
                Log In
              </button>
              <button
                className="button button--secondary button--sign-in"
                onClick={onRegisterModal}
              >
                Register
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
