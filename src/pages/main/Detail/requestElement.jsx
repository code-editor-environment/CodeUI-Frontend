import { useState } from "react";
import Editor from "@monaco-editor/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useIsHidden } from "../../../hooks/useIsHidden";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { toast } from "react-toastify";
import ColorPicker from "react-pick-color";
import {
  acceptFulfillment,
  rejectFulfillment,
  submitFulfillment,
  sendFulfillment,
  // getListElementById,
} from "../../../api/element";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";
import EditorHeader from "./editorHeader";
import { db } from "../../../configs/firebase.configs";
import { useParseUrl } from "../../../hooks/useParseUrl";
import AppButton from "../../../components/Button";
import timeLineYellow from "../../../assets/images/time-line-yellow.svg";
import timeLineRed from "../../../assets/images/time-line-red.svg";
import timeLineBlue from "../../../assets/images/time-line-blue.svg";
import { pushElements } from "../../../store/element/elements-slice";
import { open } from "../../../store/modal/modal-slice";
import ConfirmModal from "../../../components/Modal/confirmModal";
import RejectFulfillmentModal from "../../../components/Modal/rejectFulfillmentModal";
import { loadingMoney } from "../../../store/profile/profile-slice";
function RequestElement() {
  const { postId } = useParams();
  const { search } = useParseUrl();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isActive, setIsActive, nodeRef, triggerRef } =
    useDetectOutsideClick(false);
  const { isLogin } = useIsLogin();
  const { hidden, handleClick } = useIsHidden();
  const [convert, setConvert] = useState(false);
  const [elementById, setElementById] = useState(false);
  // const [element, setElement] = useState(false);
  const [cssText, setCssText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [changeEditor, setChangeEditor] = useState(false);
  const [color, setColor] = useState("#e8e8e8");
  const { settingEditor } = useSelector((state) => state.profile);
  // const { fav } = useSelector((state) => state.profile);
  const fetchPost = async () => {
    await getDoc(doc(db, `request`, postId)).then((querySnapshot) => {
      setElementById(querySnapshot.data());
      setColor(querySnapshot.data().background);
    });
  };
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
      fetchPost();
      // getListElementById(postId).then((data) => {
      //   if (data.error) {
      //     console.log(data.error);
      //   } else {
      //     setElement(data.data);
      //   }
      // });
    },
    // eslint-disable-next-line
    [postId]
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

  const clickAcceptFulfillment = () => {
    acceptFulfillment(postId).then((data) => {
      if (data.errorCode) {
        toast.error("Fulfillment not found!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      } else {
        clickSubmitDraft("APPROVED");
        navigate(`/request/${data.data.id}`);
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        dispatch(loadingMoney(data.data.id));
        sendFulfillment({
          email: data.data.receiverEmail,
          action: data.data.id,
          type: "approved",
        });
      }
    });
  };
  const clickRejectFulfillment = (data) => {
    rejectFulfillment({ postId, data }).then((data) => {
      if (data.errorCode) {
        toast.error("Fulfillment not found!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      } else {
        clickSubmitDraft("REJECTED");
        navigate(`/request/${data.data.id}`);
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        sendFulfillment({
          email: data.data.receiverEmail,
          action: data.data.id,
          type: "reject",
        });
      }
    });
  };
  const clickSubmitReview = () => {
    submitFulfillment(postId).then((data) => {
      if (data.errorCode) {
        console.log(data.errorCode);
      } else {
        clickSubmitDraft("PENDING");
        navigate(`/request/${data.data.requestId}`);
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        sendFulfillment({
          email: data.data.requesterEmail,
          action: data.data.requestId,
          type: "submit",
        });
      }
    });
  };
  const clickSubmitDraft = async (status) => {
    const elementRef = doc(db, "request", postId.toString());
    const dataUpdate = {
      background: color,
      css: cssText === "" ? elementById.css : cssText,
      html: htmlText === "" ? elementById.html : htmlText,
      status: status,
      theme: elementById.theme,
    };
    await updateDoc(elementRef, dataUpdate);
    const updatedDoc = await getDoc(elementRef);
    if (updatedDoc.exists()) {
      const dataUpdated = {
        id: postId.toString(),
        ...updatedDoc.data(),
      };
      dispatch(pushElements(dataUpdated));
    } else {
      throw new Error("Document not found");
    }
  };
  useEffect(
    () => {
      const autoSave = setTimeout(() => {
        elementById.accountID === isLogin?.id && clickSubmitDraft("DRAFT");
      }, settingEditor?.autoSave || 3000);
      return () => clearTimeout(autoSave);
    }, // eslint-disable-next-line
    [htmlText, cssText, color]
  );
  return (
    <main className="wrapper" style={{ padding: "10px" }}>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <button
          className="button button--secondary button--icon button--back"
          onClick={() => navigate(`/request/${elementById.requestId}`)}
        >
          <div style={{ display: "flex" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
              />
            </svg>
            Go back request
          </div>
        </button>
        <div className="rounded-lg text-sm font-semibold">
          <div className="flex items-center gap-1.5">
            {search?.status === "pending" ? (
              <>
                <img className="tag-icon" src={timeLineYellow} alt="" />
                <span className="text-yellow-400">
                  This post is waiting to be reviewed.
                </span>
              </>
            ) : search?.status === "rejected" ? (
              <>
                <img className="tag-icon" src={timeLineRed} alt="" />
                <span className="text-red-400">
                  This post has been rejected. Try to read the{" "}
                  <Link
                    rel="noreferrer"
                    className="inline-flex items-baseline gap-0.5 text-offwhite underline"
                    to="/guidelines"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="h-4 w-4 translate-y-0.5 flex-none"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
                      />
                    </svg>
                    Guidelines
                  </Link>{" "}
                  and see if it can be improved.
                </span>
              </>
            ) : search?.status === "draft" ? (
              <>
                <img className="tag-icon" src={timeLineBlue} alt="" />
                <span className="text-blue-400">
                  This post is saved as a draft.
                </span>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {elementById && (
        <>
          <div className="detail-page detail-page--button">
            <section className="css-editor">
              <EditorHeader
                postId={postId}
                elementById={elementById}
                changeEditor={changeEditor}
                typeCSS={elementById?.typeCSS || "css"}
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
                  value={htmlText === "" ? elementById.html : htmlText}
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
                  value={cssText === "" ? elementById.css : cssText}
                  onChange={handleEditorChangeCss}
                />
              </div>
            </section>
            <div className="preview-section second">
              <div
                className={`preview-container ${
                  hidden
                    ? `${
                        elementById.theme === "dark"
                          ? "light-preview"
                          : "dark-preview"
                      }`
                    : `${
                        elementById.theme === "dark"
                          ? "dark-preview"
                          : "light-preview"
                      }`
                }`}
                style={{ background: color }}
              >
                <iframe
                  srcDoc={`
        <html style="height: 100%;overflow: hidden;">
        <head>
        <style>${cssText === "" ? elementById.css : cssText}</style>
        ${
          elementById?.typeCSS === "tailwind"
            ? `<script src="https://cdn.tailwindcss.com"></script>`
            : ""
        }
        </head>
        <body style="width: 95%; height: 95%; display: flex; align-items: center; justify-content: center; font-family: Montserrat, sans-serif;">${
          htmlText === "" ? elementById.html : htmlText
        }</body>
        </html>
      `}
                  title="output"
                  sandbox="allow-scripts"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                />
                <label className="theme-switcher" style={{ left: "15px" }}>
                  Background:
                  <label
                    className="switch-color"
                    ref={triggerRef}
                    onClick={() => setIsActive(!isActive)}
                    style={{ backgroundColor: color }}
                  ></label>
                  <label className="switch-label" htmlFor="preview-theme">
                    {color}
                  </label>
                  <div
                    ref={nodeRef}
                    className={`dropdown-menu ${isActive ? "open" : "closed"}`}
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
                      ? `${elementById.theme === "dark" ? "light" : "dark"}`
                      : `${elementById.theme !== "dark" ? "light" : "dark"}`}
                  </label>
                </label>
                <span className="preview-color">
                  {" "}
                  {hidden
                    ? `${elementById.theme === "dark" ? "#e8e8e8" : "#212121"}`
                    : `${elementById.theme !== "dark" ? "#e8e8e8" : "#212121"}`}
                </span>
              </div>
            </div>
          </div>
          <div className="detail-action">
            <div className="info-bar">
              <div className="left"></div>
              <div className="right">
                <div className="info-bar">
                  Category | {elementById.category}
                </div>
              </div>
            </div>
            {elementById.createBy === isLogin?.id && (
              <div className="controls">
                <div className="user-controls">
                  <div className="buttons">
                    <AppButton
                      children="Reject fulfillment"
                      btnType="button_2"
                      Icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path d="m16 7-1.106-2.211a3.236 3.236 0 0 0-5.788 0L8 7M4 7h16M6 7h12v8c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165C14.796 21 13.864 21 12 21s-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C6 17.796 6 16.864 6 15V7Z" />
                        </svg>
                      }
                      onClick={() =>
                        dispatch(
                          open(
                            <RejectFulfillmentModal
                              onClick={clickRejectFulfillment}
                            />
                          )
                        )
                      }
                    />
                    <AppButton
                      children="Accept fulfillment"
                      btnType="button_1"
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
                      onClick={() =>
                        dispatch(
                          open(
                            <ConfirmModal
                              title={"Accept fulfillment"}
                              onClick={() => clickAcceptFulfillment()}
                              type="package"
                            />
                          )
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            {elementById.accountID === isLogin?.id && (
              <div className="controls">
                <div className="user-controls">
                  <div className="buttons">
                    <div className="errors" />
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
                      onClick={() =>
                        dispatch(
                          open(
                            <ConfirmModal
                              title={"Submit fulfillment"}
                              onClick={() => clickSubmitReview()}
                              type="package"
                            />
                          )
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default RequestElement;
