import React from "react";
import { Link } from "react-router-dom";
// import styles from "./detail.module.scss";

function Comment() {
  return (
    <div className="col-span-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 mt-10">
      <div className>
        <div className="flex gap-10 flex-col">
          <section className>
            <div className="mb-4 flex items-center gap-3">
              <h3>Comments </h3>
              <span className="text-dark-100 text-sm font-semibold">2 </span>
            </div>
            <div className="flex gap-4 mb-4">
              <form
                method="post"
                action="/resource/comments/add"
                className="relative p-4 [&:has(:focus-visible)]:ring-4 w-full bg-dark-600 flex items-start focus-visible:border-sky-400 gap-4 focus-visible:ring-sky-400  rounded-xl overflow-hidden false"
              >
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocLXyIFAX531FhXbdF9Zv46pjLu7wLvcH2VCtjF0_1nsBhw=s96-c"
                  alt=""
                  className="w-[44px] h-[44px] hidden sm:block rounded-lg flex-shrink-0"
                />
                <input
                  type="hidden"
                  name="postId"
                  defaultValue="b7f21ea4-af7b-4db7-beaa-f6a6e0f1d8b4"
                />
                <textarea
                  name="content"
                  id="content"
                  rows={1}
                  className="false w-full min-h-[48px] resize-none rounded-lg text-base flex-1 border-solid border border-dark-300 block font-sans bg-dark-500 text-gray-200 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-gray-700 px-4 py-3 overflow-hidden"
                  placeholder="Add a comment..."
                  style={{ height: 48 }}
                  defaultValue={""}
                />
                <div className="flex flex-col items-center ">
                  <button
                    type="submit"
                    className=" relative z-30 px-8 py-3 h-12 font-sans  disabled:cursor-auto border-none cursor-pointer bg-blue-800 text-offwhite font-semibold rounded-lg transition disabled:bg-dark-400"
                    disabled
                  >
                    Send
                  </button>
                  <p className="text-xs text-dark-100 transition duration-300 pointer-events-none transform absolute opacity-0 translate-y-0">
                    <span className="text-white">0</span>/256
                  </p>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div
                className="flex relative gap-4 lg:gap-6 bg-dark-600 py-4 px-4 lg:px-6 rounded-xl overflow-hidden"
                style={{ wordBreak: "break-word" }}
              >
                <div>
                  <div className="flex mb-3 items-center">
                    <Link to="/profile/longnlp14_NDixtn">
                      <img
                        src="https://lh3.googleusercontent.com/a/ACg8ocLXyIFAX531FhXbdF9Zv46pjLu7wLvcH2VCtjF0_1nsBhw=s96-c"
                        alt=""
                        className="w-[50px]  block h-[50px] lg:w-[40px] lg:h-[40px] rounded-lg flex-shrink-0 mr-3"
                      />
                    </Link>
                    <div className="flex flex-col items-start">
                      <Link className="block" to="/profile/longnlp14_NDixtn">
                        <div className="font-bold text-gray-200 text-base leading-2 flex items-center gap-2">
                          longnlp14_NDixtn{" "}
                          <span className="xl:inline hidden ml-2 font-normal text-gray-400 text-sm">
                            26. September at 18:37
                          </span>
                        </div>
                      </Link>
                      <div className="flex items-center gap-4">
                        <span className="xl:hidden text-gray-400 block text-sm">
                          26. September at 18:37
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base block"> f**k you </p>
                  <div className="lg:absolute top-3 right-4 mt-6 lg:mt-0 font-semibold flex items-center gap-2 -ml-2 lg:ml-0">
                    <button className="flex items-center gap-2 text-gray-400 font-sans cursor-pointer bg-transparent hover:bg-dark-400 px-2 py-2 rounded border-none ">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                      >
                        <path
                          d="M8.03089 4C6.57669 5.05865 5.2706 6.29537 4.14485 7.67887C4.04828 7.79755 4 7.94044 4 8.08333M8.03089 12.1667C6.57669 11.108 5.2706 9.8713 4.14485 8.4878C4.04828 8.36912 4 8.22623 4 8.08333M4 8.08333H14.963C17.7448 8.08333 20 10.3033 20 13.0417C20 15.7801 17.7448 18 14.963 18H12"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full relative flex mb-2">
                <div className="w-12 lg:w-24 h-full py-2 flex justify-center">
                  <button className="h-full border-none bg-white transition opacity-30 w-1 rounded-full" />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div
                    className="flex relative gap-4 lg:gap-6 bg-dark-600 py-4 px-4 lg:px-6 rounded-xl overflow-hidden"
                    style={{ wordBreak: "break-word" }}
                  >
                    <div>
                      <div className="flex mb-3 items-center">
                        <Link to="/profile/longnlp14_NDixtn">
                          <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocLXyIFAX531FhXbdF9Zv46pjLu7wLvcH2VCtjF0_1nsBhw=s96-c"
                            alt=""
                            className="w-[50px]  block h-[50px] lg:w-[40px] lg:h-[40px] rounded-lg flex-shrink-0 mr-3"
                          />
                        </Link>
                        <div className="flex flex-col items-start">
                          <Link className="block" to="/profile/longnlp14_NDixtn">
                            <div className="font-bold text-gray-200 text-base leading-2 flex items-center gap-2">
                              longnlp14_NDixtn{" "}
                              <span className="xl:inline hidden ml-2 font-normal text-gray-400 text-sm">
                                6. October at 2:26
                              </span>
                            </div>
                          </Link>
                          <div className="flex items-center gap-4">
                            <span className="xl:hidden text-gray-400 block text-sm">
                              6. October at 2:26
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-200 text-base block">
                        <span className="font-semibold text-gray-50">
                          @longnlp14_NDixtn
                        </span>{" "}
                        Mo**er f**ker shut up
                      </p>
                      <div className="lg:absolute top-3 right-4 mt-6 lg:mt-0 font-semibold flex items-center gap-2 -ml-2 lg:ml-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full relative flex mb-2">
                <div className="w-12 lg:w-24 h-full py-2 flex justify-center">
                  <button className="h-full border-none bg-sky-400  w-1 rounded-full" />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <form
                    method="post"
                    action="/resource/comments/reply"
                    className="relative p-4 [&:has(:focus-visible)]:ring-4 w-full bg-dark-600 flex items-center focus-visible:border-sky-400 gap-4 focus-visible:ring-sky-400  rounded-xl overflow-hidden"
                  >
                    <input
                      type="hidden"
                      name="postId"
                      defaultValue="b7f21ea4-af7b-4db7-beaa-f6a6e0f1d8b4"
                    />
                    <input
                      type="hidden"
                      name="parentCommentUserId"
                      defaultValue="39c56a95-6179-4203-a15e-af0f31e25fbc"
                    />
                    <input type="hidden" name="commentId" defaultValue={174} />
                    <input
                      type="text"
                      name="content"
                      id="content"
                      className="w-full rounded-lg text-base flex-1 border-solid border border-dark-300 block font-sans bg-dark-500 text-gray-200 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-gray-700 px-4 py-3"
                      placeholder="Add a comment..."
                    />
                    <button
                      type="submit"
                      disabled
                      className="disabled:bg-dark-400 group relative overflow-hidden text-transparent px-8 py-3 font-sans  disabled:cursor-auto bg-blue-800 border-none cursor-pointer h-full text-offwhite font-semibold rounded-lg transition"
                    >
                      Send
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="translate-y-12 opacity-0 transform transition absolute flex text-white">
                          <span className="  ">0</span>
                          <span className="opacity-70">/256</span>
                        </p>
                        <span className="translate-y-0 opacity-100 transform transition absolute text-white">
                          Send
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-3 font-sans bg-transparent transition hover:bg-dark-400 border-none cursor-pointer h-full text-offwhite font-semibold rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 transform rotate-45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      >
                        <path d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <a
            className="relative h-[200px] flex items-center justify-center cursor-pointer false w-full border-2 border-gray-600 bg-transparent border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="/create?originalPostId=b7f21ea4-af7b-4db7-beaa-f6a6e0f1d8b4"
          >
            <span className="flex items-center gap-3 mt-2 font-sans font-semibold text-gray-600 text-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-auto text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
              </svg>
              No variations yet, create one!
            </span>
          </a>
        </div>
      </div>
      <aside>
        <div className>
          <div className="mb-2 text-2xl font-bold text-gray-100 capitalize">
            switch
          </div>
          <div
            className="flex flex-wrap gap-y-0 gap-x-2 text-gray-400 max-w-[300px]"
            style={{ color: "rgb(232, 232, 232)" }}
          >
            <span>#switch</span>
            <span>#dark</span>
            <span>#theme</span>
            <span>#light</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <div className="flex items-center gap-3 font-normal text-gray-400">
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
              </svg>{" "}
              May 4, 2022
            </div>
            <button className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-transparent hover:bg-dark-600 max-md:bg-dark-600 text-offwhite cursor-pointer group">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-red-400 opacity-70 group-hover:opacity-100"
              >
                <path
                  d="M12 13V8.93768M12 16V15.999M13.2355 4.2522C12.4454 3.91593 11.5546 3.91593 10.7645 4.2522C8.40767 5.25526 2.84035 14.1527 3.00351 16.5308C3.06747 17.463 3.5294 18.3211 4.26914 18.8819C6.23598 20.3727 17.764 20.3727 19.7309 18.8819C20.4706 18.3211 20.9325 17.463 20.9965 16.5308C21.1596 14.1527 15.5923 5.25526 13.2355 4.2522Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              <span className="text-gray-400 group-hover:text-gray-200">
                Report
              </span>
            </button>
          </div>
          <div className="w-full h-[2px] bg-dark-500 mb-6 mt-4" />
        </div>
        <section className="rounded-xl md:pr-8 max-w-full md:w-[300px] xl:w-[350px] mb-6">
          <div className="grid grid-cols-[48px_1fr] gap-4 content-start">
            <Link className to="/profile/longnlp14_NDixtn">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocLXyIFAX531FhXbdF9Zv46pjLu7wLvcH2VCtjF0_1nsBhw=s96-c"
                alt=""
                className="w-12 h-12 rounded-lg"
              />
            </Link>
            <div className="max-w-full overflow-hidden">
              <Link
                className="block text-xl font-semibold text-gray-200 truncate overflow-hidden"
                to="/profile/longnlp14_NDixtn"
              >
                longnlp14_NDixtn
              </Link>
              <p className="block text-gray-400" />
            </div>
            <p className="block text-gray-200 col-span-full text-base" />
          </div>
        </section>
      </aside>
    </div>
  );
}

export default Comment;
