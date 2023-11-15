import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import tailwindIcon from "../../assets/images/tailwind.svg";
// import { getStorage, setStorage } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { postFav, deleteFav } from "../../store/profile/profile-slice";
const RenderElement = ({ post, search }) => {
  const { isLogin } = useIsLogin();
  const dispatch = useDispatch();
  const { fav } = useSelector((state) => state.profile);
  const [checkFavorite, setCheckFavorite] = useState(fav.includes(post.id));
  const onFavorite = () => {
    setCheckFavorite(!checkFavorite);
    const timeout = setTimeout(() => {
      if (checkFavorite) {
        dispatch(deleteFav(post.id));
      } else {
        dispatch(postFav(post.id));
      }
    }, 1000);
    return () => clearTimeout(timeout);
  };
  return (
    <article className="card card--checkbox dark-background h-full">
      <div
        className="card-content"
        style={{ backgroundColor: post.background }}
      >
        <Link
          className="get-html-css"
          to={`/detail/${post.id}${search ? "?status=" + search : ""}`}
        >
          Get <span className="html">HTML</span> &amp;{" "}
          <span className="css">CSS</span>
        </Link>
        {post?.typeCSS === "tailwind" && (
          <div className="absolute z-20 flex items-center left-1.5 top-[6px] gap-0.5">
            <div
              className="px-1 py-1"
              id="tailwind-9c4fefbd-a73e-4e67-bdef-14624cade3e3"
            >
              <img
                src={tailwindIcon}
                alt="htmlIcon"
                style={{ width: "24px" }}
              />
            </div>
          </div>
        )}
        <iframe
          srcDoc={`
        <html style="height: 100%;overflow: hidden;">
        <head>
        <style>${post.css}</style>
        ${
          post?.typeCSS === "tailwind"
            ? `<script src="https://cdn.tailwindcss.com"></script>`
            : ""
        }
        </head>
        <body style="width: 95%; height: 95%; display: flex; align-items: center; justify-content: center; font-family: Montserrat, sans-serif;">${
          post.html
        }</body>
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
          <span>{checkFavorite ? "UnSave" : "Save"}</span>
        </button>
      )}
      <div className="card__footer">
        <Link to={`/profile/${post.usernameCreator}`}>
          <span className="card__nickname text-color">
            {post.usernameCreator}
          </span>
        </Link>
        <div className="card__views">
          {/* {findFavorite ? elementItem?.favorites + 1 : elementItem?.favorites}{" "} */}
          Favorites
        </div>
      </div>
    </article>
  );
};

export default RenderElement;
