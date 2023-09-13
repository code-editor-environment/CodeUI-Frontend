import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import planet from "../../../assets/images/planet.png";
import timeLineYellow from "../../../assets/images/time-line-yellow.svg";
import timeLineRed from "../../../assets/images/time-line-red.svg";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { postsByUser } from "../../../store/actions/post.action";
import { actLogout, getUser } from "../../../store/actions/user.action";
function Profile() {
  const { login } = useParams();
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const { users } = useSelector((state) => state.user);
  const [postApproved, setPostApproved] = useState([]);
  const [postReview, setPostReview] = useState([]);
  const [postRejected, setPostRejected] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(
    () => {
      dispatch(getUser(login));
      dispatch(
        postsByUser(
          login,
          postApproved,
          postReview,
          postRejected,
          setPostApproved,
          setPostReview,
          setPostRejected,
          setLoading,
          page,
          setTotalPages
        )
      );
    },
    // eslint-disable-next-line
    [login]
  );

  function handleLogout(e) {
    e.preventDefault();
    dispatch(actLogout());
  }
  return (
    <main className="profile-page">
      {!users ? (
        ""
      ) : (
        <>
          <section className="profile">
            <img
              className="profile-image"
              src={users.avatar_url}
              alt={users.login}
            />
            <aside>
              <h1 className="profile-name">{users.name}</h1>
              <h2 className="username">{users.login}</h2>
              <div className="bio">{users.bio}</div>
              <div className="details">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2zm-5-2h2v-8h-6v8h2v-6h2v6zm0-10V5H5v14h6V9h6zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7V7z"
                    />
                  </svg>
                  {users.company}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                    />
                  </svg>
                  {users.location}
                </span>
                <Link to={users.html_url} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                    />
                  </svg>
                  {users.login}
                </Link>
              </div>
              {isLogin && isLogin.user.login === login && (
                <div className="buttons">
                  <Link to="/create">
                    <button className="button button--primary button--icon button--create">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                        />
                      </svg>{" "}
                      Create
                    </button>
                  </Link>
                  <button
                    className="button button--secondary button--icon"
                    onClick={handleLogout}
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
                        d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
                      />
                    </svg>{" "}
                    Log out
                  </button>
                </div>
              )}
            </aside>
          </section>
          {postRejected.length > 0 && (
            <section className="content">
              <h3 className="posts-title">
                <img className="tag-icon" src={timeLineRed} alt="" />
                <span className="title">Rejected</span>
                <span className="subtitle">check the guidelines</span>
              </h3>
              <div className="cards-container">
                {postRejected.map((post, index) => (
                  <article
                    className={`card card--button ${
                      post.theme === "dark" && "dark-background"
                    }`}
                    key={index}
                  >
                    <div className="card-content">
                      <Link to={`/detail/${post._id}`} className="get-html-css">
                        Get <span className="html">HTML</span> &amp;{" "}
                        <span className="css">CSS</span>
                      </Link>
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
                          className={`card__button-container ${
                            "ui" + post._id
                          }`}
                          dangerouslySetInnerHTML={{ __html: post.html }}
                        ></div>
                      </Link>
                    </div>
                    <div className="card__footer">
                      <div className="card__views">1 views</div>
                    </div>
                  </article>
                ))}
              </div>
              {totalPages === page && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="button button--primary button--icon button--create"
                    onClick={() => setPage(page + 1)}
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
                        d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                      />
                    </svg>
                    {loading ? "Load..." : "Load More"}
                  </button>
                </div>
              )}
            </section>
          )}
          {postReview.length > 0 && (
            <section className="content">
              <h3 className="posts-title">
                <img className="tag-icon" src={timeLineYellow} alt="" />
                <span className="title">Review</span>
                <span className="subtitle">waiting for review</span>
              </h3>
              <div className="cards-container">
                {postReview.map((post, index) => (
                  <article
                    className={`card card--button ${
                      post.theme === "dark" && "dark-background"
                    }`}
                    key={index}
                  >
                    <div className="card-content">
                      <Link to={`/detail/${post._id}`} className="get-html-css">
                        Get <span className="html">HTML</span> &amp;{" "}
                        <span className="css">CSS</span>
                      </Link>
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
                          className={`card__button-container ${
                            "ui" + post._id
                          }`}
                          dangerouslySetInnerHTML={{ __html: post.html }}
                        ></div>
                      </Link>
                    </div>
                    <div className="card__footer">
                      <div className="card__views">1 views</div>
                    </div>
                  </article>
                ))}
              </div>
              {totalPages === page && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="button button--primary button--icon button--create"
                    onClick={() => setPage(page + 1)}
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
                        d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                      />
                    </svg>
                    {loading ? "Load..." : "Load More"}
                  </button>
                </div>
              )}
            </section>
          )}
          {postApproved.length > 0 ? (
            <section className="content">
              <h3 className="posts-title">
                {/* <img className="tag-icon" src={timeLineYellow} alt="" /> */}
                <span className="title">Approved</span>
                {/* <span className="subtitle">waiting for review</span> */}
              </h3>
              <div className="cards-container">
                {postApproved.map((post, index) => (
                  <article
                    className={`card card--button ${
                      post.theme === "dark" && "dark-background"
                    }`}
                    key={index}
                  >
                    <div className="card-content">
                      <Link to={`/detail/${post._id}`} className="get-html-css">
                        Get <span className="html">HTML</span> &amp;{" "}
                        <span className="css">CSS</span>
                      </Link>
                      <Link
                        to={`/detail/${post._id}`}
                        className="clickable-wrapper"
                      >
                        <style
                          // dangerouslySetInnerHTML={{
                          //   __html: `.${"ui" + post._id} ` + post.css,
                          // }}
                          dangerouslySetInnerHTML={{
                            __html: `.ui${post._id} {${post.css}} `,
                          }}
                        />
                        <div
                          id="container"
                          className={`card__button-container ${
                            "ui" + post._id
                          }`}
                          dangerouslySetInnerHTML={{ __html: post.html }}
                        ></div>
                      </Link>
                    </div>
                    <div className="card__footer">
                      <div className="card__views">1 views</div>
                    </div>
                  </article>
                ))}
              </div>
              {totalPages === page && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="button button--primary button--icon button--create"
                    onClick={() => setPage(page + 1)}
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
                        d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                      />
                    </svg>
                    {loading ? "Load..." : "Load More"}
                  </button>
                </div>
              )}
            </section>
          ) : (
            <article className="no-posts-card">
              <div className="no-posts-card__content">
                <div className="image-container">
                  <img className="image" src={planet} alt="" />
                </div>
                <h3 className="heading">
                  It looks like you're new here. Don't be shy, click the
                  'Create' button and introduce yourself to the rest of the
                  galaxy.
                </h3>
                <p className="paragraph" />
              </div>
            </article>
          )}
        </>
      )}
      {isLogin && isLogin.user.login === login && (
        <article className="no-posts-card">
          <div className="no-posts-card__content">
            <div className="image-container">
              <img className="image" src={planet} alt="" />
            </div>
            <h3 className="heading">
              It looks like you're new here. Don't be shy, click the 'Create'
              button and introduce yourself to the rest of the galaxy.
            </h3>
            <p className="paragraph" />
            <Link to="/create">
              <button className="button button--primary">+ Create</button>
            </Link>
          </div>
        </article>
      )}
    </main>
  );
}

export default Profile;
