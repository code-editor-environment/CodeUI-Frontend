import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getListComment,
  postComment,
  putComment,
  deleteComment,
} from "../../../api/element";
import { useIsLogin } from "../../../hooks/useIsLogin";
import RenderComment from "./renderComment";
import { useDispatch } from "react-redux";
import { open } from "../../../store/modal/modal-slice";
import ReportPostModal from "../../../components/Modal/reportPostModal";
import { toast } from "react-toastify";
// import styles from "./detail.module.scss";

function Comment({ postId, element, elementById }) {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [total, setTotal] = useState(0);
  const { isLogin, profileRes } = useIsLogin();
  useEffect(
    () => {
      getListComment(postId).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setComments(data.data);
          setTotal(data.metadata?.total);
        }
      });
    },
    // eslint-disable-next-line
    []
  );
  const onEditComment = (CommentId, commentContent) => {
    putComment({ CommentId, commentContent }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        const index = comments.findIndex(
          (item) => item["id"] === data.data["id"]
        );
        comments[index] = { ...comments[index], commentContent };
        setComments([...comments]);
      }
    });
  };

  const onComment = () => {
    postComment({ postId, commentContent: comment }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComment("");
        setComments([data.data, ...comments]);
        setTotal(total + 1);
      }
    });
  };
  const onDelete = (id) => {
    deleteComment(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComments(comments.filter((c) => c.id !== id));
        setTotal(total - 1);
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      }
    });
  };
  const onReportPostModal = () => {
    dispatch(open(<ReportPostModal id={postId} />));
  };
  return (
    <div className="col-span-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 mt-10">
      <div className>
        <div className="flex gap-10 flex-col">
          <section className>
            <div className="mb-4 flex items-center gap-3">
              <h3>Comments </h3>
              <span className="text-dark-100 text-sm font-semibold">
                {total}
              </span>
            </div>
            {isLogin && (
              <div className="flex gap-4 mb-4">
                <div className="relative p-4 [&:has(:focus-visible)]:ring-4 w-full bg-dark-600 flex items-start focus-visible:border-sky-400 gap-4 focus-visible:ring-sky-400  rounded-xl overflow-hidden false">
                  <img
                    src={profileRes?.imageUrl}
                    alt=""
                    className="w-[44px] h-[44px] hidden sm:block rounded-lg flex-shrink-0"
                  />
                  <textarea
                    name="content"
                    id="content"
                    rows={1}
                    className="false w-full min-h-[48px] resize-none rounded-lg text-base flex-1 border-solid border border-dark-300 block font-sans bg-dark-500 text-gray-200 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-gray-700 px-4 py-3 overflow-hidden"
                    placeholder="Add a comment..."
                    style={{ height: 48 }}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <div className="flex flex-col items-center ">
                    <button
                      onClick={onComment}
                      className="relative z-30 px-8 py-3 h-12 font-sans  disabled:cursor-auto border-none cursor-pointer bg-blue-800 text-offwhite font-semibold rounded-lg transition disabled:bg-dark-400"
                    >
                      Send
                    </button>
                    <p className="text-xs text-dark-100 transition duration-300 pointer-events-none transform absolute opacity-0 translate-y-0">
                      <span className="text-white">0</span>/256
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-3">
              {comments?.length > 0 &&
                comments.map((comment, index) => (
                  <RenderComment
                    comment={comment}
                    onEditComment={onEditComment}
                    onDelete={onDelete}
                    index={index}
                  />
                ))}
            </div>
          </section>
          <div className="relative h-[200px] flex items-center justify-center cursor-pointer false w-full border-2 border-gray-600 bg-transparent border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
          </div>
        </div>
      </div>
      <aside>
        <div className>
          <div className="mb-2 text-2xl font-bold text-gray-100 capitalize">
            {element?.categoryName}
          </div>
          <div
            className="flex flex-wrap gap-y-0 gap-x-2 text-gray-400 max-w-[300px]"
            style={{ color: "rgb(232, 232, 232)" }}
          >
            {elementById.tags.map((tag, index) => (
              <span key={index}>#{tag}</span>
            ))}
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
              {new Date(element?.updateDate).toDateString()}
            </div>
            {isLogin && (
              <button
                className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-transparent hover:bg-dark-600 max-md:bg-dark-600 text-offwhite cursor-pointer group"
                onClick={onReportPostModal}
              >
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
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200">
                  Report
                </span>
              </button>
            )}
          </div>
          <div className="w-full h-[2px] bg-dark-500 mb-6 mt-4" />
        </div>
        <section className="rounded-xl md:pr-8 max-w-full md:w-[300px] xl:w-[350px] mb-6">
          <div className="grid grid-cols-[48px_1fr] gap-4 content-start">
            <Link to={`/profile/${element?.profileResponse?.accountID}`}>
              <img
                src={element?.profileResponse?.imageUrl}
                alt=""
                className="w-12 h-12 rounded-lg"
              />
            </Link>
            <div className="max-w-full overflow-hidden">
              <Link
                to={`/profile/${element?.profileResponse?.accountID}`}
                className="block text-xl font-semibold text-gray-200 truncate overflow-hidden"
              >
                {element?.ownerUsername}
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
