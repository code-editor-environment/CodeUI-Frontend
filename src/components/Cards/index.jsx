import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { list } from './../../api/element/index';

function Cards({ category }) {
  const dispatch = useDispatch();
  const { elements, favoriteElement } = useSelector((state) => state.element);
  const [element, setElement] = useState(null);
  // useEffect(
  //   () => {
  //     dispatch(
  //       category === "favorites" ? getFavoritePost() : getPost(category)
  //     );
  //   },
  //   // eslint-disable-next-line
  //   [category]
  // );
    useEffect(() => {
      list(category).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setElement(data.list);
        }
      });
    }, [category]);
  return (
    <section className="cards-container cards-container--all">
      {(category === "favorites"
        ? favoriteElement?.list?.length
        : element?.length) > 0
        ? (category === "favorites" ? favoriteElement.list : element).map(
            (post, index) => (
              <article
                className="card card--checkbox dark-background false"
                key={index}
              >
                <div className="card-content">
                  <Link
                    to={`/detail/${post._id}`}
                    className="clickable-wrapper"
                  >
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `.ui${post._id} {${post.css}} `,
                      }}
                    />
                    <div
                      id="container"
                      className={`card__button-container ${"ui" + post._id}`}
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    ></div>
                  </Link>
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
                  <a href="/profile/bimbx">
                    <span className="card__nickname text-color">
                      {post.postedBy.name}
                    </span>
                  </a>
                  <div className="card__views">1000 views</div>
                </div>
              </article>
            )
          )
        : "not found"}
    </section>
  );
}

export default Cards;
