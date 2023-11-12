import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import {
  postElementID,
  categories,
  typeCSSs,
  close,
} from "../../store/modal/modal-slice";
import { db } from "../../configs/firebase.configs";
import { createElement } from "../../api/element";
import tailwindIcon from "../../assets/images/tailwind.svg";
import cssIcon from "../../assets/images/css.svg";
import { useIsLogin } from "../../hooks/useIsLogin";
import { pushElements } from "../../store/element/elements-slice";
function PostStatusModal() {
  const dispatch = useDispatch();
  const { listCategories } = useSelector((state) => state.element);
  const { isLogin, profileRes } = useIsLogin();
  const [type, setType] = useState("button");
  const [typeCSS, setTypeCSS] = useState("css");
  const changeStatus = (e) => {
    setType(e.target.value);
  };
  const submit = () => {
    dispatch(categories(type));
    dispatch(typeCSSs(typeCSS));
    createElement({
      title: type,
      description: type,
      categoryName: type,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(postElementID(data.data.id));
        const currentDate = new Date();
        setDoc(doc(db, "elements", data.data.id.toString()), {
          accountID: isLogin.id,
          background: "#212121",
          category: type,
          createDate: currentDate.toISOString(),
          css: "",
          html: "",
          status: "DRAFT",
          subscription: "normal",
          theme: "dark",
          typeCSS: typeCSS,
          usernameCreator: profileRes.username,
        });
        dispatch(
          pushElements({
            id: data.data.id.toString(),
            accountID: isLogin.id,
            background: "#212121",
            category: type,
            createDate: currentDate.toISOString(),
            css: "",
            html: "",
            status: "DRAFT",
            subscription: "normal",
            theme: "dark",
            typeCSS: typeCSS,
            usernameCreator: profileRes.username,
          })
        );
      }
    });
    dispatch(close());
  };

  return (
    <div className="options-modal">
      <h3 className="heading">What are you making?</h3>
      <div className="options">
        {listCategories?.map((category, i) => (
          <label
            className={`option ${type === category.name ? "active" : "false"}`}
            key={i}
          >
            <input
              type="radio"
              name="option"
              id={category.id}
              value={category.name}
              checked={type === category.name}
              onChange={changeStatus}
            />
            <div dangerouslySetInnerHTML={{ __html: category.img }} />
            <span className="option-label">{category.name}</span>
          </label>
        ))}
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="pr-4 font-semibold text-gray-200">
          What do you work with?
        </div>
        <button
          className={`px-6 py-1 text-gray-200 flex items-center gap-2 border-2 border-solid pl-5 cursor-pointer font-sans text-lg font-semibold  transition-colors  rounded-lg rounded-r-none label bg-dark-600 ${
            typeCSS === "css"
              ? " hover:sky-500 border-sky-500 hover:border-sky-500"
              : " hover:border-gray-400 border-dark-300"
          }`}
          onClick={() => setTypeCSS("css")}
        >
          <img
            src={cssIcon}
            alt="htmlIcon"
            style={{ width: "27px", marginRight: "6px" }}
          />{" "}
          CSS
        </button>
        <button
          className={`px-6 py-1 text-gray-200 flex items-center gap-2 border-2 border-solid pl-5 cursor-pointer font-sans text-lg font-semibold  rounded-l-none transition-colors  rounded-lg label bg-dark-600  ${
            typeCSS === "tailwind"
              ? " hover:sky-500 border-sky-500 hover:border-sky-500"
              : " hover:border-gray-400 border-dark-300"
          }`}
          onClick={() => setTypeCSS("tailwind")}
        >
          <img
            src={tailwindIcon}
            alt="htmlIcon"
            style={{ width: "27px", marginRight: "6px" }}
          />{" "}
          Tailwind CSS
        </button>
      </div>

      <div className="buttons">
        <button className="button button--primary" onClick={submit}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default PostStatusModal;
