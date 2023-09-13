import React from "react";
import { useDispatch } from "react-redux";
import { open } from "../../store/modal/modal-slice";
import LoginModal from "./loginModal";

function RegisterModal() {
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
  const onLoginModal = () => {
    dispatch(open(<LoginModal />));
  };
  return (
    <div className="customModal--sign-in options-modal">
      <h3 className="heading">Register</h3>
      <form method="post" className="form-login">
        <div className="form-label grid-cols-6">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-label grid-cols-6">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter full name"
          />
        </div>
        <div className="form-label grid-cols-3">
          <label>Company</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="company"
          />
        </div>
        <div className="form-label grid-cols-3">
          <label>Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="location"
          />
        </div>
        <div className="form-label grid-cols-6">
          <label>Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div className="form-label grid-cols-6">
          <label>Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm password"
          />
        </div>
      </form>
      <div className="buttons">
        <button className="button sup-button">Register</button>
      </div>
      <p style={{ marginTop: "26px" }}>
        Do you already have an account ?{" "}
        <span className="span-gradient-lighter" onClick={onLoginModal}>
          Login
        </span>
      </p>
    </div>
  );
}

export default RegisterModal;
