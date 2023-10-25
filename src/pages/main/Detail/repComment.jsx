import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postReplyComment, deleteComment } from "../../../api/element";
import { useIsLogin } from "../../../hooks/useIsLogin";
// import styles from "./detail.module.scss";

function RepComment({
    id,
  commentUsername,
  inverseRootComment,
  setCheck,
  check,
}) {
  const [comments, setComments] = useState(inverseRootComment);
  const [repComment, setRepComment] = useState("");
  const { profileRes } = useIsLogin();
  const onRepComment = () => {
    postReplyComment({
      CommentId:id,
      commentContent: repComment,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComments([data.data.inverseRootComment[0], ...comments]);
        setCheck(!check);
        setRepComment("");
      }
    });
  };
      const onDelete = (id) => {
        deleteComment(id).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setComments(comments.filter((c) => c.id !== id));
          }
        });
      };
  return (
    <>
      {comments.length > 0 &&
        comments.map((inverseComment, index) => (
          <div className="w-full relative flex mb-2" key={index}>
            <div className="w-12 lg:w-24 py-2 flex justify-center">
              <button className="h-full border-none bg-white transition opacity-30 w-1 rounded-full" />
            </div>
            <div className="flex flex-col w-full gap-3">
              <div
                className="flex relative gap-4 lg:gap-6 bg-dark-600 py-4 px-4 lg:px-6 rounded-xl overflow-hidden"
                style={{ wordBreak: "break-word" }}
              >
                <div>
                  <div className="flex mb-3 items-center">
                    <Link to={`/profile/${inverseComment.account.username}`}>
                      <img
                        src={inverseComment.account.profile.imageUrl}
                        alt=""
                        className="w-[50px]  block h-[50px] lg:w-[40px] lg:h-[40px] rounded-lg flex-shrink-0 mr-3"
                      />
                    </Link>
                    <div className="flex flex-col items-start">
                      <Link
                        className="block"
                        to={`/profile/${inverseComment.account.username}`}
                      >
                        <div className="font-bold text-gray-200 text-base leading-2 flex items-center gap-2">
                          {inverseComment.account.username}
                          <span className="xl:inline hidden ml-2 font-normal text-gray-400 text-sm">
                            {new Date(inverseComment.timestamp).toDateString()}
                          </span>
                        </div>
                      </Link>
                      <div className="flex items-center gap-4">
                        <span className="xl:hidden text-gray-400 block text-sm">
                          {new Date(inverseComment.timestamp).toDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base block">
                    <span className="font-semibold text-gray-50">
                      @{commentUsername}
                    </span>{" "}
                    {inverseComment.commentContent}
                  </p>
                  <div className="lg:absolute top-3 right-4 mt-6 lg:mt-0 font-semibold flex items-center gap-2 -ml-2 lg:ml-0">
                    {profileRes.username ===
                      inverseComment.account.username && (
                      <button
                        className="flex items-center gap-2 text-gray-400 font-sans cursor-pointer bg-transparent hover:bg-dark-400 px-2 py-2 rounded border-none"
                        onClick={() => onDelete(inverseComment.id)}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {check && (
        <div className="w-full relative flex mb-2">
          <div className="w-12 lg:w-24 h-full py-2 flex justify-center">
            <button className="h-full border-none bg-sky-400  w-1 rounded-full" />
          </div>
          <div className="flex flex-col w-full gap-3">
            <div className="relative p-4 [&:has(:focus-visible)]:ring-4 w-full bg-dark-600 flex items-center focus-visible:border-sky-400 gap-4 focus-visible:ring-sky-400  rounded-xl overflow-hidden">
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
                onChange={(e) => setRepComment(e.target.value)}
              />
              <button
                className="disabled:bg-dark-400 group relative overflow-hidden text-transparent px-8 py-3 font-sans  disabled:cursor-auto bg-blue-800 border-none cursor-pointer h-full text-offwhite font-semibold rounded-lg transition"
                onClick={onRepComment}
                disabled={repComment === ""}
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
                className="px-4 py-3 font-sans bg-transparent transition hover:bg-dark-400 border-none cursor-pointer h-full text-offwhite font-semibold rounded-lg"
                onClick={() => setCheck(!check)}
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RepComment;
