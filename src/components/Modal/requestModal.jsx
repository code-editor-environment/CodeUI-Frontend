import { useDispatch } from "react-redux";
import useForm from "./../../hooks/useForm";
import { validateRequest } from "../validateInput/validateInput";
import Validate from "./../validateInput/index";
import { useEffect, useState } from "react";
import { storeImageToFireBase } from "../../utils/storeImageToFirebase.";
import { close } from "../../store/modal/modal-slice";
import { postCreateRequest } from "../../api/account";

function RequestModal() {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateRequest
  );
  function login() {
    postCreateRequest({
      requestDescription: values.requestDescription,
      reward: parseInt(values.reward),
      name: values.requestDescription,
      deadline: parseInt(values.deadline),
      avatar: image,
      categoryName: values.categoryName,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(close());
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
      <h3 className="heading">Create request</h3>
      <form className="form-login" onSubmit={handleSubmit} noValidate>
        <div
          className="form-label grid-cols-6 relative"
          style={{ display: "flex" }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={
                image ||
                "https://archaeology.co.uk/wp-content/themes/fox/images/placeholder.jpg"
              }
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
              <label>Category name</label>
              <input
                type="text"
                name="categoryName"
                placeholder="Enter categoryName"
                onChange={handleChange}
                value={values.categoryName || ""}
                required
              />
              <Validate errors={errors.categoryName} valiSmall={true} />
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
        <div className="form-label grid-cols-6 relative">
          <label>Deadline</label>
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
