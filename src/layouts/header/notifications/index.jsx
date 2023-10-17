import React from "react";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";

function Notification() {
  const { ref, isComponentVisible, onClick } = useDetectOutsideClick();
  return (
    <div className="dropdown-container header-dropdown-menu dropdown-notifications">
      <button
        className="button button--secondary button--notifications false"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <g>
            <linearGradient id="a">
              <stop offset={0} stopColor="#64b5f6" />
              <stop offset={1} stopColor="#1976d2" />
            </linearGradient>
            <linearGradient
              xlinkHref="#a"
              id="b"
              gradientTransform="matrix(1 0 0 -1 0 514)"
            />
            <linearGradient
              xlinkHref="#a"
              id="c"
              gradientTransform="matrix(1 0 0 -1 0 514)"
            />
            <path
              fill="url(#b)"
              d="M186.295 434.57h139.4v7.73c0 38.49-31.21 69.7-69.7 69.7s-69.7-31.21-69.7-69.7z"
              opacity={1}
              data-original="url(#b)"
            />
            <path
              fill="url(#c)"
              d="m469.275 360.66-38.18-38.17a50.01 50.01 0 0 1-14.65-35.36v-69.12c0-76.89-55.21-140.88-128.15-154.51V32.31c0-17.84-14.47-32.31-32.31-32.31-17.84 0-32.31 14.47-32.31 32.31V63.5c-72.93 13.63-128.14 77.62-128.14 154.51v69.12c0 13.26-5.27 25.98-14.64 35.36l-38.18 38.18a31.578 31.578 0 0 0-9.25 22.33c0 17.44 14.14 31.58 31.58 31.58h381.91c17.44 0 31.58-14.14 31.58-31.58 0-8.38-3.33-16.41-9.25-22.33z"
              opacity={1}
              data-original="url(#c)"
            />
          </g>
        </svg>
      </button>
      <div
        ref={ref}
        className={`dropdown-menu ${isComponentVisible ? "open" : "closed"}`}
      >
        <span className="notifications__heading">Notifications</span>
        <div className="notifications__content">
          <ul>
            <li className="list-item notification notification--empty">
              <div className="notification__content">
                <p>You have no new notifications</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notification;
