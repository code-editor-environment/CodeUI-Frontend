import React from "react";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useIsHidden } from "../../../hooks/useIsHidden";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../store/actions/post.action";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { deletePost, updatePost } from "./../../../store/actions/post.action";
import { favorite } from "../../../store/actions/user.action";
import axios from "axios";

function Detail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postById } = useSelector((state) => state.post);
  const { isLogin } = useIsLogin();
  const { hidden, handleClick } = useIsHidden();
  const [check, setCheck] = useState(false);
  const [findFavorite, setFindFavorite] = useState(null);
  const [cssText, setCssText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [copyCss, setCopyCss] = useState(false);
  const [copyHtml, setCopyHtml] = useState(false);
  useEffect(
    () => {
      window.scrollTo({ top: 0 });
      dispatch(getPostById(postId));
    },
    // eslint-disable-next-line
    [postId]
  );
  useEffect(
      () => {
      isLogin &&
        axios({
          method: "POST",
          url: `${import.meta.env.VITE_DOMAIN}/user/findFavorite/${
            isLogin.user.login
          }`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isLogin.token}`,
          },
          data: { postId },
        })
          .then((res) => {
            setFindFavorite(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
    },
    // eslint-disable-next-line
    [postId,check]
  );
  function handleEditorChangeCss(value, event) {
    setCssText(value);
  }
  function handleEditorChangeHtml(value, event) {
    setHtmlText(value);
  }
  const onDeletePost = () => {
    dispatch(deletePost(postId, navigate));
  };
  const onUpdatePost = () => {
      dispatch(
        updatePost(postId, postById, htmlText, cssText, hidden, navigate)
      );
  };
  const onFavorite = () => {
    dispatch(favorite(findFavorite, postId,check,setCheck));
  };
  const options = { fontSize: 17, emptySelectionClipboard: true };
  return (
    <main className="wrapper">
      <button className="button button--secondary button--icon button--back">
        <Link
          to="#"
          style={{ display: "flex" }}
          onClick={() => navigate.goBack()}
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
              d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
            />
          </svg>
          Go back
        </Link>
      </button>
      {postById && (
        <div className="detail-page detail-page--button">
          <div className="preview-section">
            <div
              className={`preview-container ${
                hidden
                  ? `${
                      postById.theme === "dark"
                        ? "light-preview"
                        : "dark-preview"
                    }`
                  : `${
                      postById.theme === "dark"
                        ? "dark-preview"
                        : "light-preview"
                    }`
              }`}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: `.prefix123 ${
                    cssText === "" ? postById.css : cssText
                  }`,
                }}
              />
              <div
                className="preview prefix123"
                dangerouslySetInnerHTML={{
                  __html: htmlText === "" ? postById.html : htmlText,
                }}
              ></div>
              <div className="preview-controls" />
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
                    ? `${postById.theme === "dark" ? "light" : "dark"}`
                    : `${postById.theme !== "dark" ? "light" : "dark"}`}
                </label>
              </label>
              <span className="preview-color">
                {" "}
                {hidden
                  ? `${postById.theme === "dark" ? "#e8e8e8" : "#212121"}`
                  : `${postById.theme !== "dark" ? "#e8e8e8" : "#212121"}`}
              </span>
            </div>
            <div className="info-bar">
              <div className="left">
                {/* <Link
                  to={`/${postById && postById.status}s`}
                  className="twitter-share-button"
                  target="_blank"
                  data-size="large"
                  rel="noreferrer"
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
                      d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                    />
                  </svg>
                  Tweet
                </Link> */}
                {findFavorite && (
                  <button
                    type="submit"
                    className="add-to-favorites"
                    onClick={onFavorite}
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
                    <span> {findFavorite ? "Delete" : "Add"} to favorites</span>
                  </button>
                )}
              </div>
              <div className="right">
                <span className="date">
                  on {new Date(postById.created).toDateString()}
                </span>
                <span
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
                  {postById.favoriteCount.length}
                </span>
              </div>
            </div>
          </div>
          <section className="css-editor">
            <span className="editor-label editor-label--css">
              CSS
              <button
                className="copy-all CSS false"
                style={{ background: "#444" }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    cssText === "" ? postById.css : cssText
                  );
                  setCopyCss(true);
                  setTimeout(function () {
                    setCopyCss(false);
                  }, 1000);
                }}
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
                    d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
                  />
                </svg>
                <span className="copy-all__text" style={{ minWidth: "60px" }}>
                  {copyCss ? "✔" : "Copy CSS"}
                </span>
              </button>
            </span>
            <div className="editor-wrapper">
              <Editor
                height="600px"
                options={options}
                theme="vs-dark"
                language="css"
                defaultValue={postById.css}
                value={postById.css || cssText}
                onChange={handleEditorChangeCss}
              />
            </div>
            {postById.postedBy._id === isLogin?.user?._id && (
              <div className="controls">
                <div className="user-controls">
                  <div className="errors" />
                  <div className="buttons">
                    <button
                      className="button button--notifications button--icon"
                      onClick={onDeletePost}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-5 w-5"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                        ></path>
                      </svg>
                      Delete
                    </button>
                    <button
                      className="button button--primary button--icon button--rotated"
                      onClick={onUpdatePost}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-5 w-5 false"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"
                        ></path>
                      </svg>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
          <section className="html-editor">
            <span className="editor-label editor-label--html">
              HTML
              <button
                className="copy-all CSS false"
                style={{ background: "#444" }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    htmlText === "" ? postById.html : htmlText
                  );
                  setCopyHtml(true);
                  setTimeout(function () {
                    setCopyHtml(false);
                  }, 1000);
                }}
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
                    d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
                  />
                </svg>
                <span className="copy-all__text" style={{ minWidth: "60px" }}>
                  {copyHtml ? "✔" : "Copy HTML"}
                </span>
              </button>
            </span>
            <div className="editor-wrapper editor-wrapper--html">
              <Editor
                height="400px"
                options={options}
                theme="vs-dark"
                language="html"
                value={postById.html || htmlText}
                onChange={handleEditorChangeHtml}
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Detail;
