import { useState, useEffect } from "react";
import Cards from "../../../components/Cards";
import { useParseUrl } from "../../../hooks/useParseUrl";
// import { useIsLoading } from "../../../hooks/useIsLoading";
import { getElements } from "../../../store/element/elements-slice";
import { getListElements } from "../../../api/element";
import cssIcon from "../../../assets/images/css.svg";
import tailwindIcon from "../../../assets/images/tailwind.svg";
import { useDispatch } from "react-redux";
import Randomized from "./randomized";
import { useNavigate } from "react-router-dom";
function Element() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useParseUrl();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchCreator, setSearchCreator] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setLoading(true);
    getListElements({
      category: search.category,
      page,
      pageSize: windowSize.width > 1600 ? 15 : 12,
      filter: search.filter,
      creator: search.creator,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(getElements(data.data));
        setLoading(false);
        setTotalPages(
          Math.ceil(data.metadata.total / (windowSize.width > 1600 ? 15 : 12))
        );
      }
    });
    // eslint-disable-next-line
  }, [search.category, search.filter, search.creator, page]);
  const handleSubmit=(e) =>{
    e.preventDefault();
    navigate(`/elements?category=${search.category}&creator=${searchCreator}`);
  }
  return (
    <main className="category-page">
      <div className="category-hero">
        {/* <h1 className="category-title">Elements {search.category}</h1> */}
      </div>
      <div className="filters-container">
        <div className="filters">
          <p className="category-description">
            Open-Source {search.category} made with{" "}
            <span className="bgTextRed">HTML</span> and{" "}
            <span className="bgTextBlue">CSS</span>
          </p>
          <div className="filters-controls flex justify-end flex-wrap gap-1 gap-y-2 false">
            {/* <p className="tags">
              <button className="px-3 py-2 hover:bg-dark-600 rounded-lg cursor-pointer text-gray-300">
                #{search.category}
              </button>
              <button className="px-3 py-2 hover:bg-dark-600 rounded-lg cursor-pointer text-gray-300">
                #codeui
              </button>
              <button className="px-3 py-2 hover:bg-dark-600 rounded-lg cursor-pointer text-gray-300">
                #gradient
              </button>
            </p> */}
            <div className="h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block" />
            <div className="items-center hidden gap-1 text-sm lg:flex">
              <div className="flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 bg-dark-600 hover:bg-dark-600 rounded-lg text-gray-200">
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
                </svg>{" "}
                Mixed
              </div>
              <div className="flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 false hover:bg-dark-600 rounded-lg text-gray-200">
                <img
                  src={tailwindIcon}
                  alt="scssIcon"
                  style={{ width: "30px", padding: "2px" }}
                />{" "}
                Tailwind CSS
              </div>
              <div className="flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 false hover:bg-dark-600 rounded-lg text-gray-200">
                <img src={cssIcon} alt="cssIcon" style={{ width: "30px" }} />{" "}
                CSS
              </div>
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
      {/* <Loading />  */}
      <Cards
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        loading={loading}
      />
    </main>
  );
}

export default Element;
