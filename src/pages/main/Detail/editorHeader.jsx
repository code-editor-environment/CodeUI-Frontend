import { useState } from "react";
import { useDispatch } from "react-redux";
import JSZip from "jszip";
import htmlIcon from "../../../assets/images/html.svg";
import beauty from "../../../assets/images/beauty.svg";
import cssIcon from "../../../assets/images/css.svg";
import scssIcon from "../../../assets/images/scss.svg";
import copyIcon from "../../../assets/images/copy.svg";
// import zipIcon from "../../../assets/images/zip.svg";
// import codeIcon from "../../../assets/images/code.svg";
import DropdownNav from "../../../components/DropdownNav";
import { onConvert, onBeautify } from "../../../core/tools";
import DropdownMore from "../../../components/DropdownNav/dropdownMore";
import { open } from "../../../store/modal/modal-slice";
import IntegrationModal from "../../../components/Modal/integrationModal";
import SettingEditor from "../../../components/Modal/settingEditor";
import ImageHost from "../../../components/Modal/imageHost";
import { useIsLogin } from "../../../hooks/useIsLogin";

function EditorHeader({
  postId,
  elementById,
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
  const { isLogin, profileRes } = useIsLogin();
  // const { elementById } = useSelector((state) => state.element);
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
      dispatch(open(<IntegrationModal postId={postId} />));
  };
      const onImageHost = () => {
        dispatch(open(<ImageHost elementById={elementById} />));
      };
      const onSettingEditor = () => {
        dispatch(open(<SettingEditor />));
      };
    const handleDownload = async () => {
      const zip = new JSZip();
      zip.file("index.html", htmlText === "" ? elementById.html : htmlText);
      zip.file("style.css", cssText === "" ? elementById.css : cssText);
      const blob = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "codeui.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    const itemMore = [
      {
        label: "Integration",
        onClick: onIntegration,
      },
      {
        label: "Image",
        onClick: onImageHost,
        check: elementById?.usernameCreator === profileRes?.username,
      },
      {
        label: "Export .zip",
        onClick: handleDownload,
      },
      {
        label: "Setting",
        onClick: onSettingEditor,
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
