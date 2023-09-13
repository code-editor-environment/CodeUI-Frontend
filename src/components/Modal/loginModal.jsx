import React from "react";
import { useDispatch } from "react-redux";
import { open } from "../../store/modal/modal-slice";
import RegisterModal from "./registerModal";

function LoginModal() {
  const dispatch = useDispatch();
  //   const [type, setType] = useState("button");
  //   const changeStatus = (e) => {
  //     setType(e.target.value);
  //   };
  //   const close = () => {
  //     dispatch({
  //       type: CLOSE_MODAL,
  //     });
  //   };
  const onRegisterModal = () => {
    dispatch(open(<RegisterModal />));
  };
  return (
    <div className="customModal--sign-in options-modal">
      <h3 className="heading">Login</h3>
      <form method="post" className="form-login">
        {/* <div className="form-label grid-cols-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder
            defaultValue="Trần Quốc Long"
          />
        </div>
        <div className="form-label grid-cols-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder
            defaultValue="VietNam"
          />
        </div> */}
        <div className="form-label grid-cols-6">
          <label htmlFor="blog">Username</label>
          <input
            type="text"
            name="blog"
            id="blog"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-label grid-cols-6">
          <label htmlFor="blog">Password</label>
          <input
            type="text"
            name="blog"
            id="blog"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-label grid-cols-6">
          <label htmlFor="blog">Forgot your password ? </label>
        </div>
      </form>

      <div className="buttons">
        <button className="button sup-button">Login</button>
      </div>
      <p style={{ marginTop: "26px" }}>
        Are you new to CodeUi ?{" "}
        <span className="span-gradient-lighter" onClick={onRegisterModal}>
          Register
        </span>
      </p>
    </div>
  );
}

export default LoginModal;
