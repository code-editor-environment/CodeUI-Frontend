import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import htmlIcon from "../../../assets/images/html.svg";
import beauty from "../../../assets/images/beauty.svg";
import cssIcon from "../../../assets/images/css.svg";
import scssIcon from "../../../assets/images/scss.svg";
import copyIcon from "../../../assets/images/copy.svg";
import DropdownNav from "../../../components/DropdownNav";
import { onConvert, onBeautify } from "../../../core/tools";
import DropdownMore from "../../../components/DropdownNav/dropdownMore";
import { open } from "../../../store/modal/modal-slice";
import IntegrationModal from "../../../components/Modal/integrationModal";

function EditorHeader({
  changeEditor,
  setChangeEditor,
  htmlText,
  cssText,
  setCssText,
  setHtmlText,
  convert,
  setConvert,
}) {
  const dispatch = useDispatch();
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
    onConvert(false, cssText, elementById.css, setConvert, setCssText);
  };
  const onConvertScss = () => {
    onConvert(true, cssText, elementById.css, setConvert, setCssText);
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
    const onIntegration = () => {
      dispatch(open(<IntegrationModal postId={elementById._id} />));
  };
    const itemMore = [
      {
        icon: (
          <img
            src="https://img.icons8.com/?size=200&id=keI1M862UTP2&format=png"
            alt="cssIcon"
            style={{ width: "30px", marginRight: "5px" }}
          />
        ),
        label: "Test integration",
        onClick: onIntegration,
      },
      {
        icon: (
          <img
            src="https://img.icons8.com/?size=200&id=keI1M862UTP2&format=png"
            alt="scssIcon"
            style={{ width: "30px", marginRight: "5px" }}
          />
        ),
        label: "Comming soon",
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
          onClick={() =>
            onBeautify(
              changeEditor,
              cssText,
              elementById?.css,
              htmlText,
              elementById?.html,
              setCssText,
              setHtmlText
            )
          }
        >
          <img src={beauty} alt="" />
        </button>
        <button
          className="copy-all CSS"
          style={{ background: "#444" }}
          onClick={changeEditor ? onCopyCss : onCopyHtml}
        >
          <span className="copy-all__text">
            {copyCss || copyHtml ? "✔" : <img src={copyIcon} alt="copyIcon" />}
          </span>
        </button>
        <div style={{ position: "relative" }}>
          <DropdownMore item={itemMore} />
        </div>
      </div>
    </span>
  );
}

export default EditorHeader;
