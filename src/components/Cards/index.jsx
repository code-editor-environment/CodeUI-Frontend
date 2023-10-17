import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ref, set, onValue, update } from "firebase/database";
import { database } from "../../configs/firebase.configs";

function Cards({ category, elements, favoriteElement }) {
  const [state, setState] = useState(false);
  const [test, setTest] = useState(null);
  var dataReal 
  // const data = {
  //   stateId: state,
  // };
  // set(ref(database, "state/" + state), data)
  //   .then(() => {
  //     console.log("Success");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  const testUp = () => {
    setState(!state);
    const updates = {};
    updates["state/" + 1] = {
      check: !state,
    };
    update(ref(database), updates)
      .then(() => {
        // Success
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUserData = () => {
    const cartRef = ref(database, "/state/" + 1);
    onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (!!data) {
        console.log("data", data);
        dataReal = data.check;
        setTest(data.check);
      } else {
        console.log("Data not found");
      }
    });
  };
  const writeUserData = () => {
      set(ref(database, "state/" + 1), {
        check: true,
      });
  };
        // set(ref(database, "state/" + 1), {
        //   check: true,
        // });
  useEffect(
    () => {
      //  writeUserData();
      getUserData();
    },
    // eslint-disable-next-line
    []
  );
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
                  <Link className="get-html-css" to={`/detail/${post._id}`}>
                    {test ? "t" : "f"} Get <span className="html">HTML</span>{" "}
                    &amp; <span className="css">CSS</span>
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
                <button
                  type="submit"
                  className="card__bookmark false"
                  onClick={testUp}
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
