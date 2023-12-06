import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { db } from "../../../configs/firebase.configs";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function DetailChallenges() {
  const { requestId } = useParams();
  const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDoc(
            doc(db, "challenges", requestId.slice(14))
          );
          const data = querySnapshot.data();
          setData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [requestId]);
  return (
    <div className="challenges-page pt-[40px] pb-[100px]">
      {data && (
        <section className="relative w-full group rounded-3xl overflow-hidden mb-10 transition-transform duration-300 flex bg-dark-800 m-auto flex-wrap-reverse min-h-[400px] max-w-[1200px] gap-10">
          <div className="absolute inset-0 flex items-start ms:justify-end">
            <div
              className="challenge-cover scale-105 group-hover:scale-110 transition-transform challenge-cover-shift"
              style={{
                backgroundImage: `url(${data.img})`,
              }}
            />
          </div>
          <div className="pt-[65%] p-10 ms:pt-10 relative z-40 flex flex-col items-start flex-1 ms:max-w-[65%]">
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
            <div className="mt-6 mb-4 text-4xl font-bold">{data.name}</div>
            <div className="mb-2 text-lg italic font-semibold transition-colors group-hover:text-fuchsia-400">
              {data.content}
            </div>
            <p className="text-base text-gray-400">{data.description}</p>
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
                  {new Date(data.date).toDateString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"
                  />
                </svg>
                <span className="item__text">{data.participants}</span>
              </div>
            </footer>
          </div>
        </section>
      )}
      <section className="max-w-[1200px] w-full my-14 mx-auto">
        <div className="mt-8">
          <h2 className="text-gray-300 text-[30px] text-gray font-bold mb-5">
            Winners
          </h2>
          {/* <div className="cards-container w-full">
            <div className="flex flex-col w-full relative ">
              <article className="card text-black h-full card--button group dark-background false">
                <div className="card-content compact h-[384px]">
                  <a
                    className="get-code bg-dark-400"
                    href="/kennyotsu/witty-bullfrog-54"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-[20px] h-[20px]"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M17 18a28.201 28.201 0 0 0 4.848-5.49.93.93 0 0 0 0-1.02A28.201 28.201 0 0 0 17 6M7.004 18a28.2 28.2 0 0 1-4.848-5.49.93.93 0 0 1 0-1.02A28.2 28.2 0 0 1 7.004 6m7-1.999-4 16" />
                    </svg>{" "}
                    Get code
                  </a>
                  <div className="absolute z-20 flex items-center left-1.5 top-[6px] gap-0.5" />
                  <div className="clickable-wrapper">
                    <div
                      id="container"
                      className="card__button-container relative z-[1]"
                    />
                    <a
                      className="fake-link"
                      href="/kennyotsu/witty-bullfrog-54"
                    >
                      Link to post
                    </a>
                  </div>
                </div>
              </article>
              <div className="absolute top-2 inset-x-4 pointer-events-none flex justify-between items-start z-30 ">
                <div className="text-offwhite false rounded-md flex gap-2 items-center font-bold z-30">
                  <p className="text-lg font-bold">
                    1<span className="text-sm font-normal">st</span>
                  </p>
                </div>
                <div
                  className="text-offwhite flex gap-2 items-center font-semibold w-fit m-1 pointer-events-auto winners-points"
                  id="points-tooltip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                      fill="currentColor"
                    />
                  </svg>
                  2000
                </div>
              </div>
              <div className="relative bg-neutral-800 rounded-b-xl p-4 h-16 -mt-2 overflow-x-hidden">
                <div className="absolute inset-4 flex items-end justify-between z-50">
                  <a className="block" href="/profile/kennyotsu">
                    <img
                      src="https://avatars.githubusercontent.com/u/107921958?v=4"
                      alt="kennyotsu"
                      className="min-w-[48px] w-12 h-12 rounded-md"
                    />
                  </a>
                  <div className="font-semibold text-lg flex items-center gap-2 mr-auto ml-4">
                    <a
                      className="block overflow-hidden whitespace-nowrap max-w-[50px] xxs:max-w-[100px] xs:max-w-[260px] sm:max-w-[260px] ms:max-w-[100px] md:max-w-[100px] lg:max-w-[180px] text-ellipsis"
                      href="/profile/kennyotsu"
                    >
                      kennyotsu
                    </a>
                    <div className="bg-fuchsia-600 text-indigo-100 px-1.5 py-0.5 text-xs font-bold rounded-md">
                      Pro+
                    </div>
                  </div>
                  <form
                    method="post"
                    action="/challenges/css-challenge-1"
                    className="absolute bottom-0 right-0 z-10 -bottom-0 mt-auto right-0 z-50"
                  >
                    <input
                      type="hidden"
                      name="postId"
                      defaultValue="32382f00-ef0c-48d9-b0f4-33ad0862044a"
                    />
                    <input type="hidden" name="action" defaultValue="add" />
                    <button
                      type="submit"
                      className="flex hover:bg-dark-500 disabled:cursor-default disabled:hover:bg-transparent bg-transparent px-2 py-1 pr-2.5 text-sm gap-1 text-gray-300 cursor-pointer transition-colors  font-sans font-semibold border-none items-center overflow-hidden rounded-lg false"
                      disabled
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 text-gray-300"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                        />
                      </svg>
                      103
                    </button>
                  </form>
                </div>
                <div
                  className="absolute z-0 left-1/2 bottom-full -translate-x-1/2 w-[50%] h-[100px] rounded-full opacity-30 blur-3xl bg-gradient-to-t whitespace-nowrap
    from-amber-400 to-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative ">
              <article className="card text-black h-full card--button group dark-background false">
                <div className="card-content compact h-[384px]">
                  <a
                    className="get-code bg-dark-400"
                    href="/Praashoo7/mighty-warthog-35"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-[20px] h-[20px]"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M17 18a28.201 28.201 0 0 0 4.848-5.49.93.93 0 0 0 0-1.02A28.201 28.201 0 0 0 17 6M7.004 18a28.2 28.2 0 0 1-4.848-5.49.93.93 0 0 1 0-1.02A28.2 28.2 0 0 1 7.004 6m7-1.999-4 16" />
                    </svg>{" "}
                    Get code
                  </a>
                  <div className="absolute z-20 flex items-center left-1.5 top-[6px] gap-0.5" />
                  <div className="clickable-wrapper">
                    <div
                      id="container"
                      className="card__button-container relative z-[1]"
                    />
                    <a
                      className="fake-link"
                      href="/Praashoo7/mighty-warthog-35"
                    >
                      Link to post
                    </a>
                  </div>
                </div>
              </article>
              <div className="absolute top-2 inset-x-4 pointer-events-none flex justify-between items-start z-30 ">
                <div className="text-offwhite false rounded-md flex gap-2 items-center font-bold z-30">
                  <p className="text-lg font-bold">
                    2<span className="text-sm font-normal">nd</span>
                  </p>
                </div>
                <div
                  className="text-offwhite flex gap-2 items-center font-semibold w-fit m-1 pointer-events-auto winners-points"
                  id="points-tooltip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                      fill="currentColor"
                    />
                  </svg>
                  1000
                </div>
              </div>
              <div className="relative bg-neutral-800 rounded-b-xl p-4 h-16 -mt-2 overflow-x-hidden">
                <div className="absolute inset-4 flex items-end justify-between z-50">
                  <a className="block" href="/profile/Praashoo7">
                    <img
                      src="https://avatars.githubusercontent.com/u/96942806?v=4"
                      alt="Praashoo7"
                      className="min-w-[48px] w-12 h-12 rounded-md"
                    />
                  </a>
                  <div className="font-semibold text-lg flex items-center gap-2 mr-auto ml-4">
                    <a
                      className="block overflow-hidden whitespace-nowrap max-w-[50px] xxs:max-w-[100px] xs:max-w-[260px] sm:max-w-[260px] ms:max-w-[100px] md:max-w-[100px] lg:max-w-[180px] text-ellipsis"
                      href="/profile/Praashoo7"
                    >
                      Praashoo7
                    </a>
                    <div className="bg-indigo-600 text-indigo-100 px-1.5 py-0.5 text-xs font-bold rounded-md">
                      Pro
                    </div>
                  </div>
                  <form
                    method="post"
                    action="/challenges/css-challenge-1"
                    className="absolute bottom-0 right-0 z-10 -bottom-0 mt-auto right-0 z-50"
                  >
                    <input
                      type="hidden"
                      name="postId"
                      defaultValue="686a26a6-8b8b-4957-bf0a-f39cd102eb7a"
                    />
                    <input type="hidden" name="action" defaultValue="add" />
                    <button
                      type="submit"
                      className="flex hover:bg-dark-500 disabled:cursor-default disabled:hover:bg-transparent bg-transparent px-2 py-1 pr-2.5 text-sm gap-1 text-gray-300 cursor-pointer transition-colors  font-sans font-semibold border-none items-center overflow-hidden rounded-lg false"
                      disabled
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 text-gray-300"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                        />
                      </svg>
                      80
                    </button>
                  </form>
                </div>
                <div
                  className="absolute z-0 left-1/2 bottom-full -translate-x-1/2 w-[50%] h-[100px] rounded-full opacity-30 blur-3xl bg-gradient-to-t whitespace-nowrap
    from-neutral-300 to-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col w-full relative ">
              <article className="card text-black h-full card--button group dark-background false">
                <div className="card-content compact h-[384px]">
                  <a
                    className="get-code bg-dark-400"
                    href="/Sameer2244/big-robin-49"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-[20px] h-[20px]"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M17 18a28.201 28.201 0 0 0 4.848-5.49.93.93 0 0 0 0-1.02A28.201 28.201 0 0 0 17 6M7.004 18a28.2 28.2 0 0 1-4.848-5.49.93.93 0 0 1 0-1.02A28.2 28.2 0 0 1 7.004 6m7-1.999-4 16" />
                    </svg>{" "}
                    Get code
                  </a>
                  <div className="absolute z-20 flex items-center left-1.5 top-[6px] gap-0.5" />
                  <div className="clickable-wrapper">
                    <div
                      id="container"
                      className="card__button-container relative z-[1]"
                    />
                    <a className="fake-link" href="/Sameer2244/big-robin-49">
                      Link to post
                    </a>
                  </div>
                </div>
              </article>
              <div className="absolute top-2 inset-x-4 pointer-events-none flex justify-between items-start z-30 ">
                <div className="text-offwhite false rounded-md flex gap-2 items-center font-bold z-30">
                  <p className="text-lg font-bold">
                    3<span className="text-sm font-normal">rd</span>
                  </p>
                </div>
                <div
                  className="text-offwhite flex gap-2 items-center font-semibold w-fit m-1 pointer-events-auto winners-points"
                  id="points-tooltip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                      fill="currentColor"
                    />
                  </svg>
                  500
                </div>
              </div>
              <div className="relative bg-neutral-800 rounded-b-xl p-4 h-16 -mt-2 overflow-x-hidden">
                <div className="absolute inset-4 flex items-end justify-between z-50">
                  <a className="block" href="/profile/Sameer2244">
                    <img
                      src="https://avatars.githubusercontent.com/u/31188576?v=4"
                      alt="Sameer2244"
                      className="min-w-[48px] w-12 h-12 rounded-md"
                    />
                  </a>
                  <div className="font-semibold text-lg flex items-center gap-2 mr-auto ml-4">
                    <a
                      className="block overflow-hidden whitespace-nowrap max-w-[50px] xxs:max-w-[100px] xs:max-w-[260px] sm:max-w-[260px] ms:max-w-[100px] md:max-w-[100px] lg:max-w-[180px] text-ellipsis"
                      href="/profile/Sameer2244"
                    >
                      Sameer2244
                    </a>
                  </div>
                  <form
                    method="post"
                    action="/challenges/css-challenge-1"
                    className="absolute bottom-0 right-0 z-10 -bottom-0 mt-auto right-0 z-50"
                  >
                    <input
                      type="hidden"
                      name="postId"
                      defaultValue="1252eb27-2f19-4cb2-a801-50c73d5e0520"
                    />
                    <input type="hidden" name="action" defaultValue="add" />
                    <button
                      type="submit"
                      className="flex hover:bg-dark-500 disabled:cursor-default disabled:hover:bg-transparent bg-transparent px-2 py-1 pr-2.5 text-sm gap-1 text-gray-300 cursor-pointer transition-colors  font-sans font-semibold border-none items-center overflow-hidden rounded-lg false"
                      disabled
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 text-gray-300"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                        />
                      </svg>
                      56
                    </button>
                  </form>
                </div>
                <div
                  className="absolute z-0 left-1/2 bottom-full -translate-x-1/2 w-[50%] h-[100px] rounded-full opacity-30 blur-3xl bg-gradient-to-t whitespace-nowrap
    from-amber-600 to-transparent"
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default DetailChallenges;
