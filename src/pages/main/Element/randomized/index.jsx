import React from "react";
import { useDetectOutsideClick } from "../../../../hooks/useOutsideClick";
import { Link, useLocation } from "react-router-dom";
import { useParseUrl } from "../../../../hooks/useParseUrl";

function Randomized() {
    const { search} = useParseUrl();
    const { pathname } = useLocation();
  const { isActive, setIsActive, nodeRef, triggerRef } =
    useDetectOutsideClick(false);
const item = [
  {
    name: "Randomized",
    icon: `              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M14.5 2a3.5 3.5 0 0 1 3.163 5.001L21 7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1l3.337.001a3.5 3.5 0 0 1 5.664-3.95A3.48 3.48 0 0 1 14.5 2zM18 13H6v7h12v-7zm2-4H4v2h16V9zM9.5 4a1.5 1.5 0 0 0-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 0 0-1.356-1.493L9.5 4zm5 0l-.144.007a1.5 1.5 0 0 0-1.35 1.349L13 5.5V7h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986L14.5 4z"
                />
              </svg>`,
  },
  {
    name: "Favorites",
    icon: `                            <svg
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
              </svg>`,
  },
  {
    name: "Recent",
    icon: `               <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#f2f2f2"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                />
              </svg>`,
  },
];

  return (
    <div className="dropdown-container dropdown-orderBy mr-0">
      <button
        className="dropdown-trigger text-gray-300 h-[40px] text-sm dropdown-trigger px-3 py-2 hover:bg-dark-600 rounded-lg"
        ref={triggerRef}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17zM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        </span>
        {search.filter || "Randomized"}
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
                to={`${pathname}?category=${search.category}${
                  item.name === "Randomized" ? "" : "&filter=" + item.name
                }`}
                onClick={() => setIsActive(!isActive)}
              >
                <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Randomized;
