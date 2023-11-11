import React from "react";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { useParseUrl } from "../../../hooks/useParseUrl";
import { useSelector } from "react-redux";

function CategoryView() {
  const { search, objectToQueryString, pathname } = useParseUrl();
  const { isActive, setIsActive, nodeRef, triggerRef } = useDetectOutsideClick(false);
  const { listCategories } = useSelector((state) => state.element);

  return (
    <div className="dropdown-container dropdown-orderBy mr-0">
      <button
        className="dropdown-trigger text-gray-300 h-[40px] text-sm dropdown-trigger px-3 py-2 hover:bg-dark-600 rounded-lg"
        ref={triggerRef}
        onClick={() => setIsActive(!isActive)}
      >
        {search.category || "All"}
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
      </button>
      <nav
        ref={nodeRef}
        className={`dropdown-menu ${isActive ? "open" : "closed"}`}
      >
        <ul>
          <li className="list-item">
            <Link
              className="item"
              to={`/${pathname}?${objectToQueryString("category")}`}
              onClick={() => setIsActive(!isActive)}
            >
              <span>All</span>
            </Link>
          </li>
          {listCategories?.map((item, i) => (
            <li className="list-item" key={i}>
              <Link
                className="item"
                to={`/${pathname}?${objectToQueryString("category")}${
                "&category=" + item.name
                }`}
                onClick={() => setIsActive(!isActive)}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default CategoryView;
