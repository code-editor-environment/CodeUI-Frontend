import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import htmlIcon from "../../../assets/images/html.svg";
import beauty from "../../../assets/images/beauty.svg";
import cssIcon from "../../../assets/images/css.svg";
import DropdownNav from "../../../components/DropdownNav";

function EditorHeader({
  changeEditor,
  setChangeEditor,
  onConvert,
  onBeautify
}) {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { elementById } = useSelector((state) => state.element);
  const [cssText, setCssText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [copyCss, setCopyCss] = useState(false);
  const [copyHtml, setCopyHtml] = useState(false);
  const onCopyCss = () => {
    navigator.clipboard.writeText(cssText === "" ? elementById?.css : cssText);
    setCopyCss(true);
    setTimeout(function () {
      setCopyCss(false);
    }, 1000);
  };
  const onCopyHtml = () => {
    navigator.clipboard.writeText(
      htmlText === "" ? elementById.html : htmlText
    );
    setCopyHtml(true);
    setTimeout(function () {
      setCopyHtml(false);
    }, 1000);
  };
const onConvertCss=() => {
  onConvert(false)
}
const onConvertScss = () => {
  onConvert(true)
};
  const item = [
    {
      icon: <img src={cssIcon} alt="cssIcon" style={{ width: "30px" }} />,
      label: "CSS",
      onClick: onConvertCss,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
            <path
              fill="#cc6699"
              d="M256.001 0C397.385 0 512 114.616 512 256c0 141.385-114.615 256-255.999 256C114.616 512 0 397.385 0 256 0 114.616 114.616 0 256.001 0z"
            ></path>
            <path
              fill="#ffffff"
              d="M416.581 109.572C404.988 64.105 329.6 49.158 258.249 74.507c-42.462 15.086-88.431 38.762-121.483 69.678-39.299 36.758-45.566 68.752-42.983 82.12 9.112 47.171 73.746 78.004 100.315 100.88v.139c-7.835 3.856-65.177 32.876-78.597 62.545-14.16 31.299 2.254 53.759 13.121 56.782 33.669 9.368 68.219-7.482 86.787-35.176 17.917-26.727 16.426-61.241 8.639-78.408 10.741-2.834 23.264-4.104 39.178-2.245 44.907 5.245 53.718 33.285 52.033 45.019-1.684 11.736-11.103 18.188-14.253 20.135-3.149 1.949-4.111 2.624-3.846 4.072.382 2.105 1.84 2.027 4.525 1.572 3.697-.623 23.582-9.546 24.431-31.207 1.083-27.503-25.273-58.266-71.939-57.463-19.219.332-31.304 2.16-40.034 5.408a93.264 93.264 0 0 0-1.981-2.191c-28.85-30.781-82.184-52.554-79.922-93.934.823-15.044 6.052-54.657 102.48-102.707 78.992-39.361 142.229-28.53 153.157-4.525 15.611 34.295-33.797 98.037-115.829 107.232-31.254 3.504-47.711-8.61-51.805-13.121-4.31-4.75-4.952-4.964-6.561-4.073-2.621 1.452-.96 5.645 0 8.144 2.45 6.374 12.5 17.678 29.636 23.301 15.074 4.947 51.769 7.664 96.148-9.501 49.702-19.225 88.515-72.707 77.115-117.411zM205.125 341.275c3.724 13.777 3.316 26.625-.532 38.26-3.06 9.254-8.322 17.645-14.89 24.811-14.874 16.227-35.656 22.362-44.567 17.193-9.623-5.578-4.803-28.457 12.443-46.686 18.552-19.612 45.245-32.222 45.245-32.222l-.04-.08c.768-.414 1.549-.84 2.341-1.276z"
            ></path>
          </g>
        </svg>
      ),
      label: "SCSS",
      onClick: onConvertScss,
    },
  ];
  return (
    <span className="editor-label editor-label--css">
      <div className="editor-change">
        <span
          className={`${!changeEditor ? "editor-change-active" : ""}`}
          style={{ marginRight: "6px" }}
          onClick={() => setChangeEditor(!changeEditor)}
        >
          <img src={htmlIcon} alt="htmlIcon" style={{ width: "27px" }} /> HTML
        </span>
        <span
          className={`dropdown-container ${
            changeEditor ? "editor-change-active" : ""
          }`}
          style={{ justifyContent: "space-between", position: "relative" }}
        >
          <div
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => setChangeEditor(!changeEditor)}
          >
            <img src={cssIcon} alt="cssIcon" style={{ width: "30px" }} /> CSS
          </div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            onClick={onClick}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
            />
          </svg> */}
          {/* <nav
            ref={ref}
            className={`dropdown-menu ${isComponentVisible && "open"}`}
          >
            <ul>
              {item.map((item, index) => (
                <li key={index}>
                  <div className="item">
                    {item.icon}
                    <div>{item.label}</div>
                  </div>
                </li>
              ))}
            </ul>
          </nav> */}
          <DropdownNav item={item} />
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <button
          className="copy-all CSS"
          style={{ background: "#444" }}
          onClick={onBeautify}
        >
          <img src={beauty} alt="" />
        </button>
        <button
          className="copy-all CSS"
          style={{ background: "#444", marginLeft: "5px" }}
          onClick={changeEditor ? onCopyCss : onCopyHtml}
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
          <span className="copy-all__text" style={{ minWidth: "40px" }}>
            {copyCss || copyHtml ? "✔" : "Copy"}
          </span>
        </button>
      </div>
    </span>
  );
}

export default EditorHeader;
