import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../configs/firebase.configs";
function Integration() {
  const { postId } = useParams();
  const [elementById, setElementById] = useState(false);
  const fetchPost = async () => {
    await getDoc(doc(db, `elements`, postId)).then((querySnapshot) => {
      setElementById(querySnapshot.data());
    });
  };
  useEffect(
    () => {
      fetchPost();
    },
    // eslint-disable-next-line
    [postId]
  );

  return (
    elementById && (
      <iframe
        srcDoc={`
        <html style="height: 100%;overflow: hidden;">
        <head>
        <style>${elementById.css}</style>
        ${
          elementById?.typeCSS === "tailwind"
            ? `<script src="https://cdn.tailwindcss.com"></script>`
            : ""
        }
        </head>
        <body style="width: 95%; height: 95%; display: flex; align-items: center; justify-content: center; font-family: Montserrat, sans-serif;">${
          elementById.html
        }</body>
        </html>
      `}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    )
  );
}

export default Integration;
