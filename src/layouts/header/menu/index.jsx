import React from "react";
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";

function Menu({ handleLogout, user }) {
  const { ref, isComponentVisible, onClick } = useDetectOutsideClick();
  return (
    <div className="dropdown-container header-dropdown-menu">
      <button
        className="button button--secondary button--profile false"
        onClick={onClick}
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
            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          />
        </svg>
        <span className="profile-name">{user.login}</span>
        <img
          src={user.avatar_url}
          alt="User profile"
          className="profile-picture"
        />
      </button>
      <nav
        ref={ref}
        className={`dropdown-menu ${isComponentVisible ? "open" : "closed"}`}
      >
        <ul>
          <li className="list-item">
            <Link className="item" to={`/profile/${user.login}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                />
              </svg>
              <span>Profile</span>
            </Link>
          </li>
          <li className="list-item list-item--separator" />
          <li className="list-item">
            <button className="item" type="submit" onClick={handleLogout}>
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
              </svg>
              <span>Log out</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
