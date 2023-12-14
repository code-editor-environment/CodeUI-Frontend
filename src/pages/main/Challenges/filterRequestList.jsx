import React from "react";
import { Link } from "react-router-dom";
import { useParseUrl } from "../../../hooks/useParseUrl";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";

function FilterRequestList() {
  const { search, objectToQueryString, pathname } = useParseUrl();
  const { isActive, setIsActive, nodeRef, triggerRef } =
    useDetectOutsideClick(false);
  const item = [
    {
      name: "All",
      url: 5,
    },
    {
      name: "Available",
      url: 1,
    },
    {
      name: "Canceled",
      url: 2,
    },
    {
      name: "Processing",
      url: 3,
    },
    {
      name: "Completed",
      url: 4,
    },
  ];

  return (
    <div className="dropdown-container dropdown-orderBy mr-0">
      <button
        className="dropdown-trigger text-gray-300 h-[40px] text-sm dropdown-trigger px-3 py-2 hover:bg-dark-600 rounded-lg"
        ref={triggerRef}
        onClick={() => setIsActive(!isActive)}
      >
        {item
          .filter((item) =>
            search.filter
              ? item.url === parseInt(search.filter)
              : item.url === 5
          )
          .map((item, i) => (
            <div className="flex" key={i}>
              {item.name}
            </div>
          ))}
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
          {item.map((item, i) => (
            <li className="list-item" key={i}>
              <Link
                className="item"
                to={`/${pathname}?${objectToQueryString("filter")}${
                  item.url === 5 ? "" : "&filter=" + item.url
                }`}
                onClick={() => setIsActive(!isActive)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default FilterRequestList;
