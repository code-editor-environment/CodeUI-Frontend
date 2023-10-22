import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useIsHidden } from "../../../hooks/useIsHidden";
import { useDispatch, useSelector } from "react-redux";
// import { ref, set, onValue, update } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import PostStatusModal from "../../../components/Modal/postStatusModal";
import {
  defaultButtonHTML,
  defaultCardHTML,
  defaultCheckboxHTML,
  defaultInputHTML,
  defaultSpinnerHTML,
  defaultSwitchHTML,
} from "./defaultHTML";
import {
  defaultButtonCSS,
  defaultCardCSS,
  defaultCheckboxCSS,
  defaultInputCSS,
  defaultSpinnerCSS,
  defaultSwitchCSS,
} from "./defaultCSS";
import { open, postElementID } from "../../../store/modal/modal-slice";
import { db } from "../../../configs/firebase.configs";
import { toast } from "react-toastify";
import EditorHeader from "../Detail/editorHeader";
import ColorPicker from "react-pick-color";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";
import AppButton from "../../../components/Button";
import { createElement } from "../../../api/element";
import { useIsLogin } from "../../../hooks/useIsLogin";
function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profileRes } = useIsLogin();
  const { ref, isComponentVisible, onClick } = useDetectOutsideClick();
  const { hidden, handleClick } = useIsHidden();
  const [cssText, setCssText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [changeEditor, setChangeEditor] = useState(false);
  // const [srcDoc, setSrcDoc] = useState("");
  const [theme, setTheme] = useState("dark");
  const [convert, setConvert] = useState(false);
  const [color, setColor] = useState("#212121");
  const { elementID, category } = useSelector((state) => state.modal);
  useEffect(
    () => {
      dispatch(open(<PostStatusModal />));
    },
    // eslint-disable-next-line
    []
  );
  useEffect(
    () => {
      switch (category) {
        case "button":
          setHtmlText(defaultButtonHTML);
          setCssText(defaultButtonCSS);
          break;
        case "switch":
          setHtmlText(defaultSwitchHTML);
          setCssText(defaultSwitchCSS);
          break;
        case "checkbox":
          setHtmlText(defaultCheckboxHTML);
          setCssText(defaultCheckboxCSS);
          break;
        case "card":
          setHtmlText(defaultCardHTML);
          setCssText(defaultCardCSS);
          break;
        case "spinner":
          setHtmlText(defaultSpinnerHTML);
          setCssText(defaultSpinnerCSS);
          break;
        case "input":
          setHtmlText(defaultInputHTML);
          setCssText(defaultInputCSS);
          break;
        default:
          setHtmlText(defaultButtonHTML);
          setCssText(defaultButtonCSS);
          break;
      }
    },
    // eslint-disable-next-line
    [category]
  );
  function handleEditorChangeCss(value, event) {
    setCssText(value);
  }
  function handleEditorChangeHtml(value, event) {
    setHtmlText(value);
    // const updates = {};
    // updates["collaborations/" + 1] = {
    //   test: value,
    // };
    // update(ref(database), updates)
    //   .then(() => {
    //     // Success
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  // function handleEditorChangeJs(value, event) {
  //   setJsText(value);
  // }
  const options = { fontSize: 17 };
  const clickSubmitReview = () => {
    createElement({
      title: category,
      description: category,
      categoryName: category,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        // dispatch(getTopCreator(data.list));
      }
    });
  };
  const clickSubmitDraft = () => {
    setDoc(doc(db, "elements", elementID.toString()), {
      background: color,
      category: category,
      css: cssText,
      html: htmlText,
      status: "draft",
      theme: theme,
      usernameCreator: profileRes.username,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  };
  // useEffect(() => {
  //   var contents = $("iframe").contents(),
  //     body = contents.find("body"),
  //     styleTag = contents.find("head");
  //   $("#html").keyup(function () {
  //     var $this = $(this);
  //     body.html(htmlText);
  //   });
  //   // body.html(`${htmlText} <script async >${jsText}</script>`);
  //   styleTag.html(`<style>${cssText}</style>`);
  // }, [htmlText]);
  useEffect(
    () => {
      const autoSave = setTimeout(() => {
        elementID && clickSubmitDraft();
      }, 3000);
      return () => clearTimeout(autoSave);
    }, // eslint-disable-next-line
    [htmlText, cssText]
  );

  const [state, setState] = useState(false);
  const [test, setTest] = useState(null);
  // const testUp = () => {
  //   setState(!state);
  //   const updates = {};
  //   updates["collaborations/" + 1] = {
  //     check: !state,
  //   };
  //   update(ref(database), updates)
  //     .then(() => {
  //       // Success
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const getUserData = () => {
  //   const cartRef = ref(database, "/collaborations/" + 1);
  //   onValue(cartRef, (snapshot) => {
  //     const data = snapshot.val();
  //     if (!!data) {
  //       console.log("data", data);
  //       setTest(data.test);
  //     } else {
  //       console.log("Data not found");
  //     }
  //   });
  // };
  //   useEffect(
  //     () => {
  //       //  writeUserData();
  //       getUserData();
  //     },
  //     // eslint-disable-next-line
  //     []
  //   )

  return (
    <main className="wrapper" style={{ padding: "10px" }}>
      <div className="detail-page detail-page--button">
        <section className="css-editor">
          <EditorHeader
            changeEditor={changeEditor}
            setChangeEditor={setChangeEditor}
            htmlText={htmlText}
            cssText={cssText}
            convert={convert}
            setConvert={setConvert}
            setCssText={setCssText}
            setHtmlText={setHtmlText}
          />
          <div
            className={`editor-wrapper ${
              changeEditor ? "editor-wrapper_html" : ""
            }`}
          >
            <Editor
              height="100%"
              options={options}
              theme="vs-dark"
              language="html"
              value={test || htmlText}
              onChange={handleEditorChangeHtml}
            />
          </div>
          <div
            className={`editor-wrapper ${
              !changeEditor ? "editor-wrapper_css" : ""
            }`}
          >
            <Editor
              height="100%"
              options={options}
              theme="vs-dark"
              language={convert ? "scss" : "css"}
              value={cssText}
              onChange={handleEditorChangeCss}
            />
          </div>
        </section>
        <div className="preview-section second">
          <div
            className={`preview-container ${
              hidden
                ? `${theme === "dark" ? "light-preview" : "dark-preview"}`
                : `${theme === "dark" ? "dark-preview" : "light-preview"}`
            }`}
            style={{ background: color }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `.prefix123 ${cssText}`,
              }}
            />
            <div
              className="preview prefix123"
              dangerouslySetInnerHTML={{
                __html: htmlText,
              }}
            ></div>
            <div className="preview-controls" />
            <label className="theme-switcher" style={{ left: "15px" }}>
              Background:
              <label
                className="switch-color"
                onClick={onClick}
                style={{ backgroundColor: color }}
              ></label>
              <label className="switch-label" htmlFor="preview-theme">
                {color}
              </label>
              <div
                ref={ref}
                className={`dropdown-menu ${
                  isComponentVisible ? "open" : "closed"
                }`}
                style={{ left: "3px", right: "auto", background: "none" }}
              >
                <ColorPicker
                  color={color}
                  onChange={(color) => setColor(color.hex)}
                  hideInputs
                  theme={{
                    background: "#fff",
                    borderColor: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                    color: "#262626",
                    inputBackground: "#f4f4f4",
                    width: "280px",
                  }}
                />
              </div>
            </label>
            <label className="theme-switcher">
              Theme:
              <label className="switch">
                <input
                  type="checkbox"
                  id="preview-theme"
                  defaultChecked
                  onClick={handleClick}
                />
                <div />
              </label>
              <label className="switch-label" htmlFor="preview-theme">
                {hidden
                  ? `${theme === "dark" ? "light" : "dark"}`
                  : `${theme !== "dark" ? "light" : "dark"}`}
              </label>
            </label>
            <span className="preview-color">
              {hidden
                ? `${theme === "dark" ? "#e8e8e8" : "#212121"}`
                : `${theme !== "dark" ? "#e8e8e8" : "#212121"}`}
            </span>
          </div>
        </div>
      </div>
      <div className="detail-action">
        <div className="info-bar">Category | {category}</div>
        <div className="controls">
          <div className="user-controls">
            <div className="errors" />
            <div className="buttons">
              <AppButton
                children="Save as a draft"
                btnType="button_2"
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
                      d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2l-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z"
                    />
                  </svg>
                }
                onClick={() => {
                  navigate(`/profile/${profileRes.username}?element=draft`);
                  toast.success("successfully!");
                  dispatch(postElementID(null));
                }}
              />
              <AppButton
                children="Submit for review"
                btnType="button_0"
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
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    />
                  </svg>
                }
                // onClick={(e) => addElementFirebase(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Create;
