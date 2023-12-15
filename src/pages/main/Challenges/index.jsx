import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../../../components/Button";
import { useParseUrl } from "../../../hooks/useParseUrl";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../../store/modal/modal-slice";
import RequestModal from "../../../components/Modal/requestModal";
import { getRequestList } from "../../../api/account";
import { getRequest } from "../../../store/creator/creator-slice";
import point from "../../../assets/images/logoCover.png";
import { useIsLogin } from "../../../hooks/useIsLogin";
import FilterRequestList from "./filterRequestList";
function Challenges() {
  const dispatch = useDispatch();
  const { request } = useSelector((state) => state.creator);
  const navigate = useNavigate();
  const { isLogin } = useIsLogin();
  const { search, objectToQueryString, pathname } = useParseUrl();
  const [searchCreator, setSearchCreator] = useState("");
  useEffect(() => {
    window.scrollTo({ top: 0 });
    getRequestList({ search, id: isLogin.id }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(getRequest(data.data));
      }
    });
    // eslint-disable-next-line
  }, [request.length, search?.r, search?.filter, search?.name]);

  const navC = [
    {
      name: "All request",
      url: false,
    },
    {
      name: "My request",
      url: "myRequest",
    },
    {
      name: "Others request",
      url: "others",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/request?${objectToQueryString("name")}${
        searchCreator === "" ? "" : `&name=${searchCreator}`
      }`
    );
  };
  const onDonationModal = () => {
    dispatch(open(<RequestModal />));
  };
    const ViewStatus = ({ item }) => {
      const currentView = {
        AVAILABLE: (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-yellow-600 text-yellow-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="w-5 h-5"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                ></path>
              </svg>{" "}
              Available
            </div>
          </div>
        ),
        CANCELED: (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-dark-600 text-white">
              <svg
                width={28}
                height={28}
                viewBox="0 0 36 36"
                data-testid="close-icon"
                fill="#ddd"
              >
                <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
              </svg>
              Canceled
            </div>
          </div>
        ),
        PROCESSING: (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-blue-500 text-blue-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                strokeWidth={2}
              >
                <path d="m4 12.374 5.351 5.346.428-.748a30.506 30.506 0 0 1 9.278-10.048L20 6.28" />
              </svg>
              Processing
            </div>
          </div>
        ),
        COMPLETED: (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-dark-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                strokeWidth={2}
              >
                <path d="m4 12.374 5.351 5.346.428-.748a30.506 30.506 0 0 1 9.278-10.048L20 6.28" />
              </svg>
              Finished
            </div>
          </div>
        ),
      }[item];
      return <> {currentView} </>;
    };
  return (
    <div className="pt-[40px] pb-[100px]">
      <section className="w-full mb-10 m-auto flex-wrap-reverse max-w-[1200px]">
        <div className="filters-container">
          <div className="filters">
            <div>
              <AppButton
                children="Create request"
                btnType="button_1"
                onClick={onDonationModal}
                Icon={
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
                }
              />
            </div>
            <div className="filters-controls flex justify-end flex-wrap gap-1 gap-y-2 false">
              <div className="h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block" />
              {isLogin && (
                <div className="items-center hidden gap-1 text-sm lg:flex">
                  {navC.map((c, i) => (
                    <Link
                      to={`/${pathname}?${objectToQueryString("r")}${
                        c.url ? "&r=" + c.url : ""
                      }`}
                      className={`flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 ${
                        c.url === search.r || (!search.r && !c.url)
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
              )}
              <div className="h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block" />
              <FilterRequestList />
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
      </section>
      {request.length > 0 &&
        request.map((item, index) => (
          <Link className="block" to={`/request/${item.id}`} key={index}>
            <section className="relative w-full group rounded-3xl overflow-hidden mb-10 transition-transform duration-300 flex bg-dark-800 m-auto flex-wrap-reverse min-h-[400px] max-w-[1200px] gap-10">
              <div className="absolute inset-0 flex items-start ms:justify-end">
                <div
                  className="challenge-cover scale-105 group-hover:scale-110 transition-transform challenge-cover-shift"
                  style={{
                    // backgroundImage: `url(${item.avatar})`,
                    zIndex: "3",
                  }}
                >
                  <img src={item.avatar} alt="" className="w-full h-full" />
                </div>
              </div>
              <div className="pt-[65%] p-10 ms:pt-10 relative z-40 flex flex-col items-start flex-1 ms:max-w-[65%]">
                <ViewStatus item={item.status} />
                <div className="mt-6 mb-4 text-4xl font-bold">
                  {item.categoryName}
                </div>
                <div className="mb-2 text-lg italic font-semibold transition-colors group-hover:text-fuchsia-400">
                  {item.name}
                </div>
                {/* <p className="text-base text-gray-400">{item.description}</p> */}
                <footer className="flex items-center gap-4 mt-8 flex-wrap">
                  <div>🎉 You've already submitted a button !</div>
                </footer>
                <footer className="flex flex-wrap items-end flex-1 gap-6 mt-8 font-semibold">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M8 2v2.128M8 6V4.128M16 2v2.128M16 6V4.128M20.96 10c.04.788.04 1.755.04 3 0 2.796 0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 22 14.796 22 12 22c-2.796 0-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 17.194 3 15.796 3 13c0-1.245 0-2.212.04-3m17.92 0c-.05-.982-.163-1.684-.417-2.296a6 6 0 0 0-3.247-3.247A5.136 5.136 0 0 0 16 4.127M20.96 10H3.04m0 0c.05-.982.163-1.684.417-2.296a6 6 0 0 1 3.247-3.247A5.135 5.135 0 0 1 8 4.127m0 0C8.941 4 10.172 4 12 4c1.828 0 3.059 0 4 .128" />
                    </svg>
                    <span className="item__text">
                      {new Date(item.startDate).toDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={point} alt="" style={{ width: "24px" }} />
                    <span className="item__text">{item.reward}</span>
                  </div>
                </footer>
              </div>
            </section>
          </Link>
        ))}
    </div>
  );
}

export default Challenges;
