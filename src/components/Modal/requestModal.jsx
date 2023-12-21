import { useDispatch } from "react-redux";
import useForm from "./../../hooks/useForm";
import Select from "react-select";
import { validateRequest } from "../validateInput/validateInput";
import Validate from "./../validateInput/index";
import { useEffect, useState } from "react";
import { storeImageToFireBase } from "../../utils/storeImageToFirebase.";
import { close } from "../../store/modal/modal-slice";
import { postCreateRequest } from "../../api/account";
import { postRequest } from "../../store/creator/creator-slice";
import { toast } from "react-toastify";
import { loadingMoney } from "../../store/profile/profile-slice";
function RequestModal() {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGender, setSelectedGender] = useState({
    value: "mixed",
    label: "Mixed",
  });
    const [selectedCate, setSelectedCate] = useState({
      value: "button",
      label: "Button",
    });
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateRequest
  );
  function login() {
    postCreateRequest({
      requestDescription: values.requestDescription,
      reward: parseInt(values.reward),
      name: values.name,
      deadline: parseInt(values.deadline),
      avatar: image,
      categoryName: selectedCate.value,
      typeCss: selectedGender.value,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(loadingMoney(data.data.id));
        dispatch(postRequest(data.data));
        dispatch(close());
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
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
  const colorStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "rgb(41, 41, 41)" : "rgb(41, 41, 41)",
      };
    },
  };
  return (
    <div className="customModal--sign-in options-modal">
      <h3 className="heading">Create request</h3>
      <form className="form-login" onSubmit={handleSubmit} noValidate>
        <div
          className="form-label grid-cols-6 relative"
          style={{ display: "flex" }}
        >
          {image ? (
            <div style={{ position: "relative" }}>
              <img
                src={image}
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
                  textAlign: "-webkit-center",
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
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={32}
                      height={32}
                      x={0}
                      y={0}
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                      className
                    >
                      <g>
                        <linearGradient
                          id="a"
                          x1="-12.14"
                          x2="31.14"
                          y1="-8.14"
                          y2="35.14"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#9cecfb" />
                          <stop offset=".51" stopColor="#65c7f7" />
                          <stop offset={1} stopColor="#0052d4" />
                        </linearGradient>
                        <path
                          fill="url(#a)"
                          d="M20 23H4a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zm-8-4a1 1 0 0 1-1-1V4.41l-2.29 2.3a1 1 0 1 1-1.42-1.42l4-4a1 1 0 0 1 1.42 0l4 4a1 1 0 0 1-1.42 1.42L13 4.41V18a1 1 0 0 1-1 1z"
                          opacity={1}
                          data-original="url(#a)"
                        />
                      </g>
                    </svg>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div
              className="relative flex items-center justify-center cursor-pointer false border-2 border-gray-600 bg-transparent border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{
                width: "150px",
                height: "150px",
                marginRight: "20px",
              }}
            >
              {!isLoading && (
                <input
                  type="file"
                  name="profileImageUrl"
                  accept="image/*"
                  onChange={onSelectFile}
                  id="upload"
                  style={{
                    height: "100%",
                    cursor: "pointer",
                    position: "absolute",
                    opacity: " 0",
                  }}
                />
              )}
              <span className="flex items-center gap-3 mt-2 font-sans font-semibold text-gray-600 text-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-auto text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                </svg>
                {isLoading ? "loading" : "add image!"}
              </span>
            </div>
          )}
          <div style={{ width: "100%", display: "grid", gap: "1rem" }}>
            <div className="form-label grid-cols-3 relative">
              <label>Category name</label>
              <Select
                styles={colorStyles}
                options={[
                  { value: "button", label: "Button" },
                  { value: "card", label: "Card" },
                  { value: "checkbox", label: "Checkbox" },
                  { value: "input", label: "Input" },
                  { value: "spinner", label: "Loaders" },
                  { value: "switch", label: "Toggle switch" },
                ]}
                value={selectedCate}
                onChange={(selectedOption) => setSelectedCate(selectedOption)}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
            <div className="form-label grid-cols-3 relative">
              <label>Reward</label>
              <input
                type="text"
                name="reward"
                placeholder="Enter your reward"
                onChange={handleChange}
                value={values.reward || ""}
              />
              <Validate errors={errors.reward} valiSmall={true} />
            </div>
          </div>
        </div>
        <div className="form-label grid-cols-6 relative">
          <label>Name request</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name request"
            onChange={handleChange}
            value={values.name || ""}
            required
          />
          <Validate errors={errors.name} />
        </div>
        <div className="form-label grid-cols-3 relative">
          <label>Deadline (hour)</label>
          <input
            type="text"
            name="deadline"
            placeholder="Enter your deadline"
            onChange={handleChange}
            value={values.deadline || ""}
            required
          />
          <Validate errors={errors.deadline} />
        </div>
        <div className="form-label grid-cols-3">
          <label>TypeCSS</label>
          <Select
            styles={colorStyles}
            options={[
              { value: "mixed", label: "Mixed" },
              { value: "css", label: "CSS" },
              { value: "tailwind", label: "Tailwind CSS" },
            ]}
            value={selectedGender}
            onChange={(selectedOption) => setSelectedGender(selectedOption)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>

        <div className="form-label grid-cols-6 relative">
          <label>Description</label>
          <textarea
            className="block w-full border border-none rounded-md shadow-sm sm:text-sm bg-dark-500 text-offwhite"
            type="text"
            name="requestDescription"
            placeholder="Enter requestDescription"
            onChange={handleChange}
            value={values.requestDescription || ""}
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

export default RequestModal;
