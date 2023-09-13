import React from "react";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";

function Notification() {
  const { dropdownRef, onClick, isActive } = useDetectOutsideClick();
  return (
    <div className="dropdown-container header-dropdown-menu dropdown-notifications">
      <button
        className="button button--secondary button--notifications false"
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
            d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
          />
        </svg>
      </button>
      <div
        ref={dropdownRef}
        className={`dropdown-menu notifications ${
          isActive ? "open" : "closed"
        }`}
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
