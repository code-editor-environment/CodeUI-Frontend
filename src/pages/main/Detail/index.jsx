import { useState } from "react";
import Editor from "@monaco-editor/react";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  runTransaction,
} from "firebase/firestore";
import { useIsHidden } from "../../../hooks/useIsHidden";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { toast } from "react-toastify";
import ColorPicker from "react-pick-color";
// import { ResizableBox } from "react-resizable";
// import { getElementById } from "../../../store/element/elements-slice";
import {
  getListElementById,
  saveFavorite,
  like,
  putElement,
  deleteElement,
  createElement,
} from "../../../api/element";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";
import EditorHeader from "./editorHeader";
import { db } from "../../../configs/firebase.configs";
import { useParseUrl } from "../../../hooks/useParseUrl";
import AppButton from "../../../components/Button";
import Comment from "./comment";
import timeLineYellow from "../../../assets/images/time-line-yellow.svg";
import timeLineRed from "../../../assets/images/time-line-red.svg";
import timeLineBlue from "../../../assets/images/time-line-blue.svg";
import {
  pushElements,
  deleteElements,
  getDataVariation,
} from "../../../store/element/elements-slice";
import { deleteFav, postFav } from "../../../store/profile/profile-slice";
import { close, open } from "../../../store/modal/modal-slice";
import SelectTagModal from "../../../components/Modal/selectTagModal";
// import { fetchElements } from "../../../store/element/elements-slice";
// import Console from "./console";
import styles from "./detail.module.scss";
import ConfirmModal from "../../../components/Modal/confirmModal";
import IssueModal from "../../../components/Modal/issueModal";
function Detail() {
  const { postId } = useParams();
  const { search } = useParseUrl();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isActive, setIsActive, nodeRef, triggerRef } =
    useDetectOutsideClick(false);
  // const { elementById } = useSelector((state) => state.element);
  const { isLogin, profileRes } = useIsLogin();
  const { hidden, handleClick } = useIsHidden();
  // const [check, setCheck] = useState(false);
  const [convert, setConvert] = useState(false);
  const [findFavorite, setFindFavorite] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [elementById, setElementById] = useState(false);
  const [element, setElement] = useState(false);
  const [cssText, setCssText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [changeEditor, setChangeEditor] = useState(false);
  const [color, setColor] = useState("#e8e8e8");
  const [reason, setReason] = useState([]);
  const { settingEditor } = useSelector((state) => state.profile);
  // const { fav } = useSelector((state) => state.profile);
  const fetchPost = async () => {
    await getDoc(doc(db, `elements`, postId)).then((querySnapshot) => {
      setElementById(querySnapshot.data());
      setColor(querySnapshot.data().background);
    });
    await getDoc(doc(db, `reason`, postId)).then((querySnapshot) => {
      if (querySnapshot.data()) setReason(querySnapshot.data().data);
    });
  };
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
      fetchPost();
      getListElementById(postId).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setElement(data.data);
          setFindFavorite(data.data.isFavorite);
          setIsLike(data.data.isLiked);
        }
      });
      const postRef = doc(db, `elements`, postId);
      runTransaction(db, async (transaction) => {
        const postDoc = await transaction.get(postRef);
        if (!postDoc.exists()) {
          throw new Error("Document does not exist!");
        }
        const newViewCount = (postDoc.data().viewCount || 0) + 1;
        transaction.update(postRef, { viewCount: newViewCount });
      });
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
  const onDeletePost = () => {
    deleteElement(postId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(deleteElements(postId));
        navigate(`/profile/${isLogin.id}`);
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        deleteDoc(doc(db, `elements`, postId));
      }
    });
  };
  // const onUpdatePost = () => {
  //   // dispatch();
  //   // updatePost(postId, elementById, htmlText, cssText, hidden, navigate)
  // };

  const onFavorite = () => {
    setFindFavorite(!findFavorite);
    const timeout = setTimeout(() => {
      if (findFavorite) {
        dispatch(deleteFav(postId));
        saveFavorite({ accountId: isLogin.id, postId });
      } else {
        dispatch(postFav(postId));
        saveFavorite({ accountId: isLogin.id, postId });
      }
    }, 1000);
    return () => clearTimeout(timeout);
  };
  const onLike = () => {
    setIsLike(!isLike);
    const timeout = setTimeout(() => {
      like({ accountId: isLogin.id, postId });
    }, 1000);
    return () => clearTimeout(timeout);
  };
  const options = {
    fontSize: settingEditor?.fontSize || 17,
    minimap: {
      enabled: settingEditor?.miniMap === "enabled" ? true : false,
    },
  };

  const clickSubmitReview = (selectedTags, option, linkSource, nameSource) => {
    clickSubmitDraft("PENDING", selectedTags, option, linkSource, nameSource);
    putElement(postId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        navigate(`/profile/${isLogin.id}?element=pending`);
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        dispatch(close());
      }
    });
  };
  const clickSubmitDraft = async (
    status,
    selectedTags,
    option,
    linkSource,
    nameSource
  ) => {
    const elementRef = doc(db, "elements", postId.toString());
    const dataUpdate = selectedTags
      ? {
          background: color,
          css: cssText === "" ? elementById.css : cssText,
          html: htmlText === "" ? elementById.html : htmlText,
          status: status,
          theme: elementById.theme,
          tags: selectedTags || [],
          source: {
            name: option,
            url: linkSource,
            author: nameSource,
          },
        }
      : {
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
        search?.status === "draft" && clickSubmitDraft("DRAFT");
      }, settingEditor?.autoSave || 3000);
      return () => clearTimeout(autoSave);
    }, // eslint-disable-next-line
    [htmlText, cssText, color]
  );
  const NewVariation = () => {
    createElement({
      title: elementById.category,
      description: elementById.category,
      categoryName: elementById.category,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        const currentDate = new Date();
        const dataVariation = {
          id: data.data.id.toString(),
          accountID: isLogin.id,
          background: elementById.background,
          category: elementById.category,
          createDate: currentDate.toISOString(),
          css: elementById.css,
          html: elementById.html,
          status: "DRAFT",
          subscription: "normal",
          theme: "dark",
          typeCSS: elementById.typeCSS,
          usernameCreator: profileRes.username,
          tags: elementById.tags,
          source: {
            name: "modified",
            url: `https://codeui.vercel.app/detail/${postId}`,
            author: elementById.usernameCreator,
          },
        };
        navigate(`/create?status=variation`);
        // dispatch(postElementID(data.data.id));
        setDoc(doc(db, "elements", data.data.id.toString()), {
          accountID: isLogin.id,
          background: elementById.background,
          category: elementById.category,
          createDate: currentDate.toISOString(),
          css: elementById.css,
          html: elementById.html,
          status: "DRAFT",
          subscription: "normal",
          theme: "dark",
          typeCSS: elementById.typeCSS,
          usernameCreator: profileRes.username,
          tags: elementById.tags,
          source: {
            name: "modified",
            url: `https://codeui.vercel.app/detail/${postId}`,
            author: elementById.usernameCreator,
          },
        });
        dispatch(getDataVariation(dataVariation));
        dispatch(pushElements(dataVariation));
      }
    });
  };
  const LikeIcons = ({ color, cover }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0,0,256,256"
        style={{ margin: 0 }}
      >
        <g transform="scale(16,16)">
          <path
            d="M7.521,13.382c-2.199,-1.738 -7.021,-6.047 -7.021,-8.425c0,-1.906 1.587,-3.457 3.539,-3.457c1.253,0 2.388,0.631 3.035,1.688l0.426,0.695l0.426,-0.696c0.648,-1.056 1.782,-1.687 3.035,-1.687c1.951,0 3.539,1.551 3.539,3.457c0,3.388 -5.619,7.483 -6.979,8.425z"
            fill={color}
          />
          <path
            d="M10.962,2c1.675,0 3.038,1.326 3.038,2.957c0,2.693 -4.225,6.229 -6.457,7.805c-2.889,-2.324 -6.543,-6.006 -6.543,-7.805c0,-1.631 1.363,-2.957 3.038,-2.957c1.078,0 2.053,0.542 2.609,1.449l0.853,1.392l0.853,-1.392c0.555,-0.907 1.531,-1.449 2.609,-1.449M10.962,1c-1.472,0 -2.756,0.774 -3.462,1.926c-0.706,-1.152 -1.99,-1.926 -3.462,-1.926c-2.23,0 -4.038,1.771 -4.038,3.957c0,3.28 7.5,9.043 7.5,9.043c0,0 7.5,-4.893 7.5,-9.043c0,-2.186 -1.808,-3.957 -4.038,-3.957z"
            fill={cover}
          />
        </g>
      </svg>
    );
  };
  return (
    <main className="wrapper" style={{ padding: "10px" }}>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <button
          className="button button--secondary button--icon button--back"
          onClick={() => navigate(-1)}
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
            Go back
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
              <div className="left">
                {isLogin && !search?.status && (
                  <>
                    <button
                      type="submit"
                      className="add-to-favorites"
                      onClick={onFavorite}
                    >
                      <div
                        className={`flex gap-1.5 items-center mr-2 ${
                          findFavorite && " text-yellow-400"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path d="M5 9c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 2 10.139 2 12 2s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 6.208 19 7.139 19 9v13l-1.794-1.537c-1.848-1.584-2.771-2.376-3.808-2.678a5 5 0 0 0-2.796 0c-1.037.302-1.96 1.094-3.808 2.678L5 22V9Z" />
                        </svg>
                        {findFavorite
                          ? element?.favorites + 1
                          : element?.favorites}
                      </div>
                      <span>
                        {findFavorite ? "Remove from" : "Save to"} favorites
                      </span>
                    </button>
                    <button
                      className="copy-all CSS"
                      style={{
                        background: "#444",
                        height: "43px",
                        width: "45px",
                      }}
                      onClick={onLike}
                    >
                      {isLike ? (
                        <LikeIcons color="#f78f8f" cover="#ec4141" />
                      ) : (
                        <LikeIcons color="#AEAEAE" cover="#DADADA" />
                      )}
                    </button>
                    {elementById.source.name !== "original" && (
                      // <label
                      //   className="theme-switcher"
                      //   style={{ left: "15px", top: "auto", bottom: "20px" }}
                      // >
                      //   REPOST FROM:{" "}
                      //   <Link to={elementById.source.url} target="_blank">
                      //     Link
                      //   </Link>
                      // </label>
                      <div className="flex items-center gap-2 px-3 font-semibold text-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path d="M16.902 16.902c.235-.035.445-.082.643-.147a5 5 0 0 0 3.21-3.21C21 12.792 21 11.861 21 10s0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C16.792 3 15.861 3 14 3s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21 3.921 3.921 0 0 0-.147.643m9.804 9.804C17 16.239 17 15.372 17 14c0-1.861 0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C12.792 7 11.861 7 10 7c-1.373 0-2.24 0-2.902.098m9.804 9.804a3.923 3.923 0 0 1-.147.643 5 5 0 0 1-3.21 3.21C12.792 21 11.861 21 10 21s-2.792 0-3.545-.245a5 5 0 0 1-3.21-3.21C3 16.792 3 15.861 3 14s0-2.792.245-3.545a5 5 0 0 1 3.21-3.21c.198-.065.407-.112.643-.147" />
                        </svg>
                        Variation of a
                        <Link
                          to={elementById.source.url}
                          target="_blank"
                          className="underline underline-offset-2"
                        >
                          FROM
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="right">
                <div className="info-bar">
                  Category | {elementById.category}
                </div>
                {/* <span className="date">
                  on {new Date(elementById.created).toDateString()}
                </span> */}
                {/* <span
                  className="favorite-count"
                  title="Number of people who have added this post to favorites"
                >
                  1K views
                </span>
                <span
                  className="favorite-count"
                  title="Number of people who have added this post to favorites"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"
                    />
                  </svg>{" "}
                  {elementById.favoriteCount.length}
                </span> */}
              </div>
            </div>
            {elementById.accountID !== isLogin?.id && (
              <div className={`${styles.point} flex items-stretch gap-2`}>
                <div
                  className={`px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-sm  font-semibold transition-colors duration-200 bg-transparent hover:bg-dark-600 max-md:bg-dark-600 text-offwhite cursor-pointer max-md:hidden whitespace-nowrap`}
                  onClick={() => NewVariation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M16.902 16.902c.235-.035.445-.082.643-.147a5 5 0 0 0 3.21-3.21C21 12.792 21 11.861 21 10s0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C16.792 3 15.861 3 14 3s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21 3.921 3.921 0 0 0-.147.643m9.804 9.804C17 16.239 17 15.372 17 14c0-1.861 0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C12.792 7 11.861 7 10 7c-1.373 0-2.24 0-2.902.098m9.804 9.804a3.923 3.923 0 0 1-.147.643 5 5 0 0 1-3.21 3.21C12.792 21 11.861 21 10 21s-2.792 0-3.545-.245a5 5 0 0 1-3.21-3.21C3 16.792 3 15.861 3 14s0-2.792.245-3.545a5 5 0 0 1 3.21-3.21c.198-.065.407-.112.643-.147" />
                  </svg>
                  New variation
                </div>
                <div
                  className={`${styles.info} styles-module_tooltip__mnnfp styles-module_dark__xNqje points-tooltip shadow-lg bg-dark-600 styles-module_show__2NboJ styles-module_clickable__Bv9o7`}
                  style={{ left: "-165px", top: "-200px" }}
                >
                  <span className="heading">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M16.902 16.902c.235-.035.445-.082.643-.147a5 5 0 0 0 3.21-3.21C21 12.792 21 11.861 21 10s0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C16.792 3 15.861 3 14 3s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21 3.921 3.921 0 0 0-.147.643m9.804 9.804C17 16.239 17 15.372 17 14c0-1.861 0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C12.792 7 11.861 7 10 7c-1.373 0-2.24 0-2.902.098m9.804 9.804a3.923 3.923 0 0 1-.147.643 5 5 0 0 1-3.21 3.21C12.792 21 11.861 21 10 21s-2.792 0-3.545-.245a5 5 0 0 1-3.21-3.21C3 16.792 3 15.861 3 14s0-2.792.245-3.545a5 5 0 0 1 3.21-3.21c.198-.065.407-.112.643-.147" />
                    </svg>
                    New variation
                  </span>
                  <p className="font-normal text-gray-300">
                    The text in the image reads: "Variations Add a variation to
                    this post. Modify colors, icons, or style to add a unique
                    touch. A variation should be similar to the original post
                    but also different in some way.
                  </p>
                  <div
                    className="react-tooltip-arrow styles-module_arrow__K0L3T"
                    style={{ left: 171, bottom: "-4px" }}
                  />
                </div>
              </div>
            )}
            {elementById.accountID === isLogin?.id && (
              <div className="controls">
                <div className="user-controls">
                  <div className="errors" />
                  <div className="buttons">
                    {search?.status ? (
                      search?.status === "pending" ? (
                        <>
                          <div />
                          <button
                            className="button button--notifications button--icon"
                            onClick={() =>
                              dispatch(
                                open(
                                  <ConfirmModal
                                    title={"Review"}
                                    onClick={onDeletePost}
                                  />
                                )
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              className="h-5 w-5"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                fill="currentColor"
                                d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                              />
                            </svg>
                            Delete
                          </button>
                        </>
                      ) : search?.status === "rejected" ? (
                        <>
                          {/* <div /> */}
                          <button
                            className="px-4 py-2.5 font-sans flex items-center justify-end gap-2 border-none rounded-lg text-sm font-semibold transition-colors duration-200 bg-transparent hover:bg-dark-600 max-md:bg-dark-600 text-offwhite cursor-pointer text-red-400 whitespace-nowrap"
                            onClick={() =>
                              dispatch(open(<IssueModal reason={reason} />))
                            }
                          >
                            {reason.length} issue
                          </button>
                          <div className="buttons">
                            <button
                              className="button button--notifications button--icon"
                              onClick={() =>
                                dispatch(
                                  open(
                                    <ConfirmModal
                                      title={"Rejected"}
                                      onClick={onDeletePost}
                                    />
                                  )
                                )
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="h-5 w-5"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                                />
                              </svg>
                              Delete
                            </button>
                            <AppButton
                              children="Update"
                              btnType="button_1"
                              Icon={
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width={24}
                                  height={24}
                                  className="h-5 w-5 false"
                                >
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    fill="currentColor"
                                    d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"
                                  />
                                </svg>
                              }
                              onClick={() =>
                                dispatch(
                                  open(
                                    <SelectTagModal
                                      cssText={
                                        cssText === ""
                                          ? elementById.css
                                          : cssText
                                      }
                                      typeCSS={elementById?.typeCSS}
                                      htmlText={
                                        htmlText === ""
                                          ? elementById.html
                                          : htmlText
                                      }
                                      clickSubmitReview={clickSubmitReview}
                                      background={color}
                                      elementById={elementById}
                                    />
                                  )
                                )
                              }
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {/* <AppButton
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
                              clickSubmitDraft("DRAFT");
                              navigate(`/profile/${isLogin.id}?element=draft`);
                              toast.success("successfully!", {
                                position: "top-center",
                                autoClose: 2000,
                                theme: "dark",
                              });
                            }}
                          /> */}
                          <button
                            className="button button--notifications button--icon"
                            onClick={() =>
                              dispatch(
                                open(
                                  <ConfirmModal
                                    title={"Draft"}
                                    onClick={onDeletePost}
                                  />
                                )
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              className="h-5 w-5"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                fill="currentColor"
                                d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                              />
                            </svg>
                            Delete
                          </button>
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
                                  <SelectTagModal
                                    cssText={
                                      cssText === "" ? elementById.css : cssText
                                    }
                                    typeCSS={elementById?.typeCSS}
                                    htmlText={
                                      htmlText === ""
                                        ? elementById.html
                                        : htmlText
                                    }
                                    clickSubmitReview={clickSubmitReview}
                                    background={color}
                                    elementById={elementById}
                                  />
                                )
                              )
                            }
                          />
                        </>
                      )
                    ) : (
                      <>
                        <button
                          className="button button--notifications button--icon"
                          onClick={onDeletePost}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="h-5 w-5"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              fill="currentColor"
                              d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                            />
                          </svg>
                          Delete
                        </button>
                        {/* <button
                          className="button button--primary button--icon button--rotated"
                          onClick={onUpdatePost}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="h-5 w-5 false"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              fill="currentColor"
                              d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"
                            />
                          </svg>
                          Update
                        </button> */}
                        <AppButton
                          children="Update"
                          btnType="button_1"
                          Icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              className="h-5 w-5 false"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                fill="currentColor"
                                d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"
                              />
                            </svg>
                          }
                          onClick={() =>
                            dispatch(
                              open(
                                <SelectTagModal
                                  cssText={
                                    cssText === "" ? elementById.css : cssText
                                  }
                                  typeCSS={elementById?.typeCSS}
                                  htmlText={
                                    htmlText === ""
                                      ? elementById.html
                                      : htmlText
                                  }
                                  clickSubmitReview={clickSubmitReview}
                                  background={color}
                                  elementById={elementById}
                                />
                              )
                            )
                          }
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {!search?.status && (
            <Comment
              postId={postId}
              element={element}
              elementById={elementById}
            />
          )}
        </>
      )}
    </main>
  );
}

export default Detail;
