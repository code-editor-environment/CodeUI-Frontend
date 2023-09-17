import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { open } from "../../store/modal/modal-slice";
import LoginModal from "./loginModal";
import { validateRegister } from "../validateInput/validateInput";
import useForm from "../../hooks/useForm";
import Validate from "../validateInput";

function RegisterModal() {
  const dispatch = useDispatch();
  const onLoginModal = () => {
    dispatch(open(<LoginModal />));
  };
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    value: "vn",
    label: (
      <>
        <img
          src={`https://flagcdn.com/vn.svg`}
          alt="vn"
          style={{ width: "34px", height: "22px" }}
        />
        <span>Vietnam</span>
      </>
    ),
  });
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.countries.length; i++) {
          data.countries[i].search = data.countries[i].label;
          data.countries[i].label = (
            <>
              <img
                src={`https://flagcdn.com/${data.countries[
                  i
                ].value.toLowerCase()}.svg`}
                alt={data.countries[i].value}
                style={{ width: "34px", height: "22px" }}
              />{" "}
              <span>{data.countries[i].label.slice(4)}</span>
            </>
          );
        }
        for (let i = 0; i < data.countries.length; i++) {
          data.countries[i].value = data.countries[i].search;
        }
        setCountries(data.countries);
      });
  }, []);
  const colorStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "rgb(41, 41, 41)" : "rgb(41, 41, 41)",
      };
    },
  };
  const { values, errors, handleChange, handleSubmit } = useForm(
    register,
    validateRegister
  );
  function register() {
    console.log(values);
  }
  return (
    <div className="customModal--sign-in options-modal">
      <h3 className="heading">Register</h3>
      <form className="form-login" onSubmit={handleSubmit} noValidate>
        <div className="form-label grid-cols-3 relative">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
            value={values.username || ""}
            required
          />
          {errors.username ? (
            <Validate errors={errors.username} />
          ) : (
            <Validate errors={errors.fullName} />
          )}
        </div>
        <div className="form-label grid-cols-3">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter full name"
            onChange={handleChange}
            value={values.fullName || ""}
            required
          />
        </div>
        <div className="form-label grid-cols-6 relative">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          <Validate errors={errors.email} />
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
          {/* <input
            type="text"
            name="location"
            id="location"
            placeholder="location"
          /> */}
          <Select
            styles={colorStyles}
            options={countries}
            value={selectedCountry}
            onChange={(selectedOption) => setSelectedCountry(selectedOption)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-label grid-cols-6 relative">
          <label>Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          <Validate errors={errors.password} />
        </div>
        <div className="form-label grid-cols-6 relative">
          <label>Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm password"
            onChange={handleChange}
            value={values.confirmPassword || ""}
            required
          />
          <Validate errors={errors.confirmPassword} />
        </div>
        <div
          className="form-label grid-cols-6"
          style={{ display: "grid", justifyContent: "end" }}
        >
          <button className="button sup-button">Register</button>
        </div>
      </form>
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
