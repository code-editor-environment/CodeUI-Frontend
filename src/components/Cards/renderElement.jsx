import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/firebase.configs";
import { Link } from "react-router-dom";
import { saveFavorite } from "../../api/element";
import { useIsLogin } from "../../hooks/useIsLogin";

const RenderElement = ({ post, search }) => {
  const { isLogin } = useIsLogin();
  const [elementItem, setElementItem] = useState(null);
  const [findFavorite, setFindFavorite] = useState(post?.isFavorite);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDoc(
          doc(db, "elements", post.id.toString())
        );
        const data = querySnapshot.data();
        setElementItem(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [post.id]);
  const onFavorite = () => {
    setFindFavorite(!findFavorite);
    const timeout = setTimeout(() => {
      saveFavorite({ accountId: isLogin.id, postId: post.id });
    }, 1000);
    return () => clearTimeout(timeout);
  };
  if (elementItem) {
    return (
      <article className="card card--checkbox dark-background h-full">
        <div
          className="card-content"
          style={{ backgroundColor: elementItem.background }}
        >
          <Link
            className="get-html-css"
            to={`/detail/${post.id}${search ? "?status=" + search : ""}`}
          >
            {/* {test ? "t" : "f"} */}
            Get <span className="html">HTML</span> &amp;{" "}
            <span className="css">CSS</span>
          </Link>
          <iframe
            srcDoc={`
        <html style="height: 100%;overflow: hidden;">
        <style>${elementItem.css}</style>
        <body style="width: 95%; height: 95%; display: flex; align-items: center; justify-content: center; font-family: Montserrat, sans-serif;">${elementItem.html}</body>
        </html>
      `}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
        {isLogin && (
          <button
            type="submit"
            className="card__bookmark false"
            // onClick={testUp}
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
            <span>{findFavorite ? "UnSave" : "Save"}</span>
          </button>
        )}
        <div className="card__footer">
          <Link to={`/profile/${post.profileResponse.username}`}>
            <span className="card__nickname text-color">
              {post.profileResponse.username}
            </span>
          </Link>
          <div className="card__views">{post.favorites} Favorites</div>
        </div>
      </article>
    );
  } else {
    return <div></div>;
  }
};

export default RenderElement;