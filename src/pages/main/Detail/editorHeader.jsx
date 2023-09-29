import { useState } from "react";
import { useSelector } from "react-redux";
import htmlIcon from "../../../assets/images/html.svg";
import beauty from "../../../assets/images/beauty.svg";
import cssIcon from "../../../assets/images/css.svg";
import scssIcon from "../../../assets/images/scss.svg";
import copyIcon from "../../../assets/images/copy.svg";
import DropdownNav from "../../../components/DropdownNav";

function EditorHeader({
  changeEditor,
  setChangeEditor,
  htmlText,
  cssText,
  convert,
  onConvert,
  onBeautify,
}) {
  const { elementById } = useSelector((state) => state.element);
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
  const onConvertCss = () => {
    onConvert(false);
  };
  const onConvertScss = () => {
    onConvert(true);
  };
  const item = [
    {
      icon: <img src={cssIcon} alt="cssIcon" style={{ width: "30px" }} />,
      label: "CSS",
      onClick: onConvertCss,
    },
    {
      icon: (
        <img
          src={scssIcon}
          alt="scssIcon"
          style={{ width: "30px", padding: "4px" }}
        />
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
          onClick={() => changeEditor && setChangeEditor(!changeEditor)}
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
            style={{ display: "flex", alignItems: "center", width: "80%" }}
            onClick={() => !changeEditor && setChangeEditor(!changeEditor)}
          >
            {convert ? (
              <>
                <img
                  src={scssIcon}
                  alt="scssIcon"
                  style={{ width: "30px", padding: "4px" }}
                />{" "}
                SCSS
              </>
            ) : (
              <>
                <img src={cssIcon} alt="cssIcon" style={{ width: "30px" }} />{" "}
                CSS
              </>
            )}
          </div>
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
          style={{ background: "#444"}}
          onClick={changeEditor ? onCopyCss : onCopyHtml}
        >
          <span className="copy-all__text" >
            {copyCss || copyHtml ? "✔" : <img src={copyIcon} alt="copyIcon" />}
          </span>
        </button>
      </div>
    </span>
  );
}

export default EditorHeader;
