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
    <main className="wrapper">
      {elementById && (
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `.prefix123 ${elementById.css}`,
            }}
          />
          <div
            className="preview prefix123"
            dangerouslySetInnerHTML={{
              __html: elementById.html,
            }}
          ></div>
        </div>
      )}
    </main>
  );
}

export default Integration;
