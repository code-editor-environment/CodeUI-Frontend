import axios from "axios";

export const onConvert = (status, cssText, css, setConvert, setCssText) => {
  axios({
    method: "POST",
    url: `${import.meta.env.NODE_DOMAIN}/tool/convert`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      css: cssText === "" ? css : cssText,
      scss: cssText === "" ? css : cssText,
      type: status ? "scss" : "css",
    },
  })
    .then((res) => {
      setConvert(status);
      setCssText(res.data.result);
    })
    .catch((err) => {
      console.error(err);
    });
};
export const onBeautify = (
  changeEditor,
  cssText,
  css,
  htmlText,
  html,
  setCssText,
  setHtmlText
) => {
  var bodyFormData = new FormData();
  bodyFormData.append(
    "apikey",
    "Xo3hid7LnTem4DwaEsciOB8mWY41NnjmIzq0ni7rgnvS9"
  );
  changeEditor
    ? bodyFormData.append("css", cssText === "" ? css : cssText)
    : bodyFormData.append("html", htmlText === "" ? html : htmlText);

  axios({
    method: "POST",
    url: `https://api.dotmaui.com/client/1.0/${
      changeEditor ? "cssbeautify" : "htmlbeautify"
    }/`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      changeEditor ? setCssText(res.data) : setHtmlText(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
