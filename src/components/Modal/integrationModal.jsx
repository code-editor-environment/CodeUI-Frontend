import { useState } from "react";
import Editor from "@monaco-editor/react";
import copyIcon from "../../assets/images/copy.svg";
function IntegrationModal({ postId }) {
  const options = {
    fontSize: 17,
    emptySelectionClipboard: true,
    readOnly: true,
  };
  const [copyHtml, setCopyHtml] = useState(false);
  const iframeIn = `<iframe 
  src="https://codeui.vercel.app/integration/${postId}" 
  frameborder="0"
  style="height:100%">
</iframe>`;
  const onCopyHtml = () => {
    navigator.clipboard.writeText(iframeIn);
    setCopyHtml(true);
    setTimeout(function () {
      setCopyHtml(false);
    }, 1000);
  };

  return (
    <div className="options-modal" style={{ height: "400px" }}>
      <div style={{ width: "100%", paddingBottom: "8px" }}>
        <button
          className="copy-all CSS"
          style={{ background: "#444" }}
          onClick={onCopyHtml}
        >
          <span className="copy-all__text" style={{ paddingTop: "4px" }}>
            {copyHtml ? "✔" : <img src={copyIcon} alt="copyIcon" />}
          </span>
        </button>
      </div>
      <Editor
        height="100%"
        options={options}
        theme="vs-dark"
        language="html"
        value={iframeIn}
      />
    </div>
  );
}

export default IntegrationModal;
