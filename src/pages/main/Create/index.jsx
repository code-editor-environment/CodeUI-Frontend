import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useIsHidden } from "../../../hooks/useIsHidden";
import { useDispatch, useSelector } from "react-redux";
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
import AppButton from "../../../components/Button";
import { putElement } from "../../../api/element";
import { useIsLogin } from "../../../hooks/useIsLogin";
import BackgroundColor from "./backgroundColor";
function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profileRes } = useIsLogin();
  const { hidden, handleClick } = useIsHidden();
  const [cssText, setCssText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [changeEditor, setChangeEditor] = useState(false);
  // const [srcDoc, setSrcDoc] = useState("");
  const [theme, setTheme] = useState("dark");
  const [convert, setConvert] = useState(false);
  const [color, setColor] = useState("#212121");
  const { elementID, category } = useSelector((state) => state.modal);
  const { settingEditor } = useSelector((state) => state.profile);
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
  }
    const options = {
      fontSize: settingEditor?.fontSize || 17,
      minimap: {
        enabled: settingEditor?.miniMap === "enabled" ? true : false,
      },
    };
  const clickSubmitReview = () => {
    clickSubmitDraft();
    putElement(elementID).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        navigate(`/profile/${profileRes.username}?element=pending`);
        toast.success("successfully!");
        dispatch(postElementID(null));
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
    })
  };
  useEffect(
    () => {
      const autoSave = setTimeout(() => {
        elementID && clickSubmitDraft();
      }, settingEditor?.autoSave || 3000);
      return () => clearTimeout(autoSave);
    }, // eslint-disable-next-line
    [htmlText, cssText, color]
  );

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
              theme={settingEditor?.theme || "vs-dark"}
              language="html"
              value={htmlText}
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
              theme={settingEditor?.theme || "vs-dark"}
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
            <iframe
              srcDoc={`
        <html style="height: 100%;overflow: hidden;">
        <style>${cssText}</style>
        <body style="width: 95%; height: 95%; display: flex; align-items: center; justify-content: center; font-family: Montserrat, sans-serif;">${htmlText}</body>
        </html>
      `}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
            <div className="preview-controls" />
            <BackgroundColor color={color} setColor={setColor} />
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
                  clickSubmitDraft();
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
                onClick={() => clickSubmitReview()}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Create;
