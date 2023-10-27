import { useState, useEffect } from "react";
import Cards from "../../../components/Cards";
import { useParseUrl } from "../../../hooks/useParseUrl";
// import { useIsLoading } from "../../../hooks/useIsLoading";
import { getElements } from "../../../store/element/elements-slice";
import { getListElements } from "../../../api/element";
import { useDispatch } from "react-redux";
import Randomized from "./randomized";
function Element() {
  const dispatch = useDispatch();
  const { search } = useParseUrl();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setLoading(true);
    getListElements({ category: search.category, page, pageSize: 10 }).then(
      (data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          dispatch(getElements(data.data));
          setLoading(false);
          setTotalPages(Math.ceil(data.metadata.total / 10));
        }
      }
    );
    // eslint-disable-next-line
  }, [search.category, page]);
      // const fetchPost = async () => {
      //   await getDocs(
      //     query(
      //       collection(db, `elements`),
      //       search.category === "all"
      //         ? where("status", "==", "approved")
      //         : (where("status", "==", "approved"),
      //           where("category", "==", search.category))
      //     )
      //   ).then((querySnapshot) => {
      //     const newData = querySnapshot.docs.map((doc) => ({
      //       ...doc.data(),
      //       id: doc.id,
      //     }));
      //     setElements(newData);
      //     // setTotalPages(newData.length);
      //   });
      // };
      // useEffect(
      //   () => {
      //     fetchPost();
      //   },
      //   // eslint-disable-next-line
      //   [search.category]
      // );
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
          <div className="filters-controls false">
            <span className="page">
              tag - #elements, #open-source , #{search.category}
            </span>
            <Randomized />
            <div className="dropdown-container dropdown-theme">
              <button className="dropdown-trigger">
                <span className="icon" />
                Any theme
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
              <nav className="dropdown-menu closed">
                <ul>
                  <li className="list-item">
                    <a className="item" href="/buttons?theme=all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2V6a6 6 0 1 1 0 12z"
                        />
                      </svg>
                      <span>Any theme</span>
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="item" href="/buttons?theme=dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
                        />
                      </svg>
                      <span>Dark</span>
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="item" href="/buttons?theme=light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                      </svg>
                      <span>Light</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
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
