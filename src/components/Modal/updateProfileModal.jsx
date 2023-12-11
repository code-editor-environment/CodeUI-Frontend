import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { validateUpdateProfile } from "../validateInput/validateInput";
import useForm from "../../hooks/useForm";
import Validate from "../validateInput";

import styles from "./modal.module.scss";
import { storeImageToFireBase } from "./../../utils/storeImageToFirebase.";
import { putProfiles } from "../../api/account";
import { setStorage } from "../../utils/helper";
import { close } from "../../store/modal/modal-slice";
import { userProfileRes } from "../../store/profile/profile-slice";
function UpdateProfileModal() {
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state.profile);
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const [selectedGender, setSelectedGender] = useState({
    value: "other",
    label: "Other",
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
    validateUpdateProfile
  );
  function register() {
    putProfiles({
      username: values.username || profiles.username,
      firstName: values.firstName || profiles.firstName,
      lastName: "",
      dateOfBirth: "2002-10-16",
      phone: "",
      gender: selectedGender.value,
      location: selectedCountry.value,
      description: values.description || profiles.description,
      wallet: 0,
      imageUrl: image || profiles.imageUrl,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(close());
                    dispatch(
                      userProfileRes({
                        username: values.username,
                        imageUrl: data.data.imageUrl,
                      })
                    );
        setStorage({
          key: "profileResponse",
          value: JSON.stringify({
            username: values.username,
            imageUrl: data.data.imageUrl,
          }),
        });
      }
    });
  }
  useEffect(
    () => {
      const uploadImage = async () => {
        setIsLoading(true);
        if (!selectedFile) {
          setIsLoading(false);
          return;
        }
        const { isSuccess, imageUrl, message } = await storeImageToFireBase(
          selectedFile
        );
        if (isSuccess) {
          setImage(imageUrl);
          setIsLoading(false);
          return imageUrl;
        } else {
          console.log(message);
        }
        setIsLoading(false);
      };
      uploadImage();
    },
    // eslint-disable-next-line
    [selectedFile]
  );
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="customModal--sign-in options-modal">
      <h3 className={styles.heading}>
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
        </svg>{" "}
        Edit Profile
      </h3>
      <form className="form-login" onSubmit={handleSubmit} noValidate>
        <div
          className="form-label grid-cols-6 relative"
          style={{ display: "flex" }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={image || profiles.imageUrl}
              alt=""
              style={{
                marginRight: "20px",
                maxWidth: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "5px",
                left: "0px",
                width: "88%",
                textAlign: "center",
              }}
            >
              {isLoading ? (
                "load"
              ) : (
                <>
                  <input
                    type="file"
                    name="profileImageUrl"
                    accept="image/*"
                    onChange={onSelectFile}
                    id="upload"
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      opacity: " 0",
                    }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={34}
                    height={34}
                    viewBox="0 0 512 512"
                    className="inline"
                  >
                    <g>
                      <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                      ></linearGradient>
                      <path
                        fill="url(#a)"
                        d="M512 104.471v217a80.091 80.091 0 0 1-80 80h-86.5a16 16 0 0 1 0-32H432a48.054 48.054 0 0 0 48-48v-217a48.054 48.054 0 0 0-48-48H80a48.054 48.054 0 0 0-48 48v217a48.054 48.054 0 0 0 48 48h92.546a16 16 0 0 1 0 32H80a80.091 80.091 0 0 1-80-80v-217a80.09 80.09 0 0 1 80-80h352a80.09 80.09 0 0 1 80 80zM344.907 284.4a16 16 0 0 0 1.572-22.572l-78.407-90.142a16 16 0 0 0-24.144 0l-78.407 90.144a16 16 0 0 0 24.145 21L240 224.963v246.566a16 16 0 0 0 32 0V224.963l50.334 57.867a16 16 0 0 0 22.573 1.572z"
                      />
                    </g>
                  </svg>
                </>
              )}
            </div>
          </div>
          <div style={{ width: "100%", display: "grid", gap: "1rem" }}>
            <div className="form-label grid-cols-3 relative">
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                onChange={handleChange}
                value={values.username || profiles.username}
                required
              />
              <Validate errors={errors.username} valiSmall={true} />
            </div>
            <div className="form-label grid-cols-3 relative">
              <label>Full Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter full name"
                onChange={handleChange}
                value={values.firstName || profiles.firstName}
              />
              <Validate errors={errors.firstName} valiSmall={true} />
            </div>
          </div>
        </div>
        <div className="form-label grid-cols-6 relative">
          <label>phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter phone"
            onChange={handleChange}
            value={values.phone || profiles.username}
          />
        </div>
        <div className="form-label grid-cols-3">
          <label>Gender</label>
          <Select
            styles={colorStyles}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
            value={selectedGender}
            onChange={(selectedOption) => setSelectedGender(selectedOption)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-label grid-cols-3">
          <label>Location</label>
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
          <label>Description</label>
          <textarea
            className="block w-full border border-none rounded-md shadow-sm sm:text-sm bg-dark-500 text-offwhite"
            type="text"
            name="description"
            id="description"
            placeholder="Enter description"
            onChange={handleChange}
            value={values.description || profiles.description}
          />
        </div>
        <div
          className="form-label grid-cols-6"
          style={{ display: "grid", justifyContent: "end" }}
        >
          <button className="button sup-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfileModal;
