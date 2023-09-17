import React from "react";
import { Link } from "react-router-dom";

function Cards({ category, elements, favoriteElement }) {
  return (
    <section className="cards-container cards-container--all">
      {(category === "favorites"
        ? favoriteElement?.list?.length
        : elements?.length) > 0
        ? (category === "favorites" ? favoriteElement.list : elements).map(
            (post, index) => (
              <article
                className="card card--checkbox dark-background false"
                key={index}
              >
                <div className="card-content">
                  <Link className="get-html-css" to="/">
                    Get <span className="html">HTML</span> &amp;{" "}
                    <span className="css">CSS</span>
                  </Link>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `.ui${post._id} ${post.css} `,
                    }}
                  />
                  <div
                    id="container"
                    className={`card__button-container ${"ui" + post._id}`}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  ></div>
                </div>
                <button type="submit" className="card__bookmark false">
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
                  <span>Save</span>
                </button>
                <div className="card__footer">
                  <Link to={`/profile/${post.postedBy.login}`}>
                    <span className="card__nickname text-color">
                      {post.postedBy.name}
                    </span>
                  </Link>
                  <div className="card__views">1000 Favorites</div>
                </div>
              </article>
            )
          )
        : "not found"}
    </section>
  );
}

export default Cards;
