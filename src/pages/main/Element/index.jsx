import { useState } from "react";
import Randomized from "./randomized";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../../../components/Cards";
import { useParseUrl } from "../../../hooks/useParseUrl";
import cssIcon from "../../../assets/images/css.svg";
import scssIcon from "../../../assets/images/scss.svg";
import tailwindIcon from "../../../assets/images/tailwind.svg";

function Element() {
  const navigate = useNavigate();
  const { search, objectToQueryString } = useParseUrl();
  const [searchCreator, setSearchCreator] = useState("");
  const navC = [
    {
      name: "Mixed",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 mr-1"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M18.189 4c.986.74 1.878 1.599 2.654 2.556.105.13.157.287.157.444m-2.811 3a14.998 14.998 0 0 0 2.654-2.556A.703.703 0 0 0 21 7m0 0h-3.876a6 6 0 0 0-4.915 2.56L8.79 14.44A6 6 0 0 1 3.876 17H2m16.189 3a14.998 14.998 0 0 0 2.654-2.556A.704.704 0 0 0 21 17m-2.811-3c.986.74 1.878 1.599 2.654 2.556.105.13.157.287.157.444m0 0h-3.876a6 6 0 0 1-3.808-1.363M2 7h1.876a6 6 0 0 1 3.969 1.5" />
        </svg>
      ),
      url: false,
    },
    {
      name: "Tailwind CSS",
      icon: (
        <img
          src={tailwindIcon}
          alt="scssIcon"
          style={{ width: "30px", padding: "2px" }}
        />
      ),
      url: "tailwind",
    },
    {
      name: "CSS",
      icon: <img src={cssIcon} alt="cssIcon" style={{ width: "27px" }} />,
      url: "css",
    },
    {
      name: "SCSS",
      icon: <img src={scssIcon} alt="scssIcon" style={{ width: "22px" }} />,
      url: "scss",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/elements?${objectToQueryString("creator")}${
        searchCreator === "" ? "" : `&creator=${searchCreator}`
      }`
    );
  };
  return (
    <main className="category-page">
      <div className="category-hero">
      </div>
      <div className="filters-container">
        <div className="filters">
          <p className="category-description">
            Open-Source with{" "}
            <span className="bgTextRed">HTML</span> and{" "}
            <span className="bgTextBlue">CSS</span>
          </p>
          <div className="filters-controls flex justify-end flex-wrap gap-1 gap-y-2 false">
            <div className="h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block" />
            <div className="items-center hidden gap-1 text-sm lg:flex">
              {navC.map((c, i) => (
                <Link
                  to={`/elements?${objectToQueryString("c")}${
                    c.url ? "&c=" + c.url : ""
                  }`}
                  className={`flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 ${
                    c.url === search.c || (!search.c && !c.url)
                      ? "bg-dark-600"
                      : "hover:bg-dark-600"
                  } rounded-lg text-gray-200`}
                  key={i}
                >
                  {c.icon}
                  {c.name}
                </Link>
              ))}
            </div>
            <div className="h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block" />
            <Randomized />
            <form
              className="flex ml-2 items-center [&:has(:focus-visible)]:ring-4 overflow-visible rounded-lg focus-visible:ring-sky-400 focus-visible:border-sky-400"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="search"
                id="search"
                value={searchCreator}
                onChange={(e) => setSearchCreator(e.target.value)}
                placeholder="Search creator, posts..."
                className="block focus:ring-0 w-full font-[inherit] placeholder:text-sm border-none rounded-l-lg shadow-sm bg-dark-600  md:text-base text-offwhite placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="cursor-pointer text-sm bg-dark-500 hover:bg-dark-400 text-offwhite rounded-r-lg border-none h-[40px] px-4 py-2 font-sans font-semibold"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <Cards />
    </main>
  );
}

export default Element;
