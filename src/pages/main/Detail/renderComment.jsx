import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../../hooks/useIsLogin";
import RepComment from "./repComment";
import { formatDateString } from "../../../utils/functions";
import { open } from "../../../store/modal/modal-slice";
import ConfirmModal from "../../../components/Modal/confirmModal";
import { useDispatch } from "react-redux";
// import styles from "./detail.module.scss";

function RenderComment({ comment, onDelete, index }) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const { profileRes } = useIsLogin();

  return (
    <>
      <div
        className="flex relative gap-4 lg:gap-6 bg-dark-600 py-4 px-4 lg:px-6 rounded-xl overflow-hidden"
        style={{ wordBreak: "break-word" }}
        key={index}
      >
        <div>
          <div className="flex mb-3 items-center">
            <Link to={`/profile/${comment.account.id}`}>
              <img
                src={comment.account.profile.imageUrl}
                alt=""
                className="w-[50px]  block h-[50px] lg:w-[40px] lg:h-[40px] rounded-lg flex-shrink-0 mr-3"
              />
            </Link>
            <div className="flex flex-col items-start">
              <Link className="block" to={`/profile/${comment.account.id}`}>
                <div className="font-bold text-gray-200 text-base leading-2 flex items-center gap-2">
                  {comment.account.username}
                  <span className="xl:inline hidden ml-2 font-normal text-gray-400 text-sm">
                    {/* {new Date(comment.timestamp).toDateString()} */}
                    {formatDateString(comment.timestamp)}
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                <span className="xl:hidden text-gray-400 block text-sm">
                  {/* {new Date(comment.timestamp).toDateString()} */}
                  {formatDateString(comment.timestamp)}
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-200 text-base block">
            {comment.commentContent}
          </p>
          <div className="lg:absolute top-3 right-4 mt-6 lg:mt-0 font-semibold flex items-center gap-2 -ml-2 lg:ml-0">
            {profileRes?.username === comment.account.username && (
              <button
                className="flex items-center gap-2 text-gray-400 font-sans cursor-pointer bg-transparent hover:bg-dark-400 px-2 py-2 rounded border-none"
                onClick={() =>
                  dispatch(
                    open(
                      <ConfirmModal
                        title={"Review"}
                        onClick={() => onDelete(comment.id)}
                      />
                    )
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="m16 7-1.106-2.211a3.236 3.236 0 0 0-5.788 0L8 7M4 7h16M6 7h12v8c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165C14.796 21 13.864 21 12 21s-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C6 17.796 6 16.864 6 15V7Z" />
                </svg>
                Delete
              </button>
            )}
            {profileRes && (
              <button
                className="flex items-center gap-2 text-gray-400 font-sans cursor-pointer bg-transparent hover:bg-dark-400 px-2 py-2 rounded border-none "
                onClick={() => setCheck(!check)}
              >
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
            )}
          </div>
        </div>
      </div>
      <RepComment
        id={comment.id}
        inverseRootComment={comment.inverseRootComment}
        commentUsername={comment.account.username}
        setCheck={setCheck}
        check={check}
      />
    </>
  );
}

export default RenderComment;
