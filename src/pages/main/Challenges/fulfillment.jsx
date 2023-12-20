import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase.configs";
import point from "../../../assets/images/logoCover.png";
import { Link } from "react-router-dom";
function Fulfillment({ item, reward, index }) {
  const [dataFulfillment, setDataFulfillment] = useState(null);
  const fetchPost = async () => {
    await getDoc(doc(db, `request`, item.id.toString())).then(
      (querySnapshot) => {
        setDataFulfillment(querySnapshot.data());
      }
    );
  };
  useEffect(
    () => {
      fetchPost();
    }, // eslint-disable-next-line
    [item.id]
  );

  return (
    dataFulfillment && (
      <div className="flex flex-col w-full relative " key={index}>
        <article className="card text-black h-full card--tooltip group dark-background false">
          <div className="card-content compact">
            <div className="absolute z-20 flex items-center left-1.5 top-[6px] gap-0.5" />
            <div className="clickable-wrapper">
              <Link
                className="get-html-css text-white"
                to={`/requestElement/${item.id}`}
              >
                Get <span className="html">HTML</span> &amp;{" "}
                <span className="css">CSS</span>
              </Link>
              <iframe
                srcDoc={`
        <html style="height: 100%;overflow: hidden;">
        <head>
        <style>${dataFulfillment.css}</style>
        ${
          dataFulfillment?.typeCSS === "tailwind"
            ? `<script src="https://cdn.tailwindcss.com"></script>`
            : ""
        }
        </head>
        <body style="width: 95%; height: 95%; display: flex; align-items: center; justify-content: center; font-family: Montserrat, sans-serif;">${
          dataFulfillment.html
        }</body>
        </html>
      `}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
              />
              <a className="fake-link" href="/vikas7754/evil-mule-52">
                Link to post
              </a>
            </div>
          </div>
        </article>
        <div className="absolute top-2 inset-x-4 pointer-events-none flex justify-between items-start z-30 ">
          {item.status === "REJECTED" ? (
            <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-red-500 text-white">
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
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg>
              Rejected
            </div>
          ) : (
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
                Submit
              </div>
            </div>
          )}
          <div
            className="text-offwhite flex gap-2 items-center font-semibold w-fit m-1 pointer-events-auto winners-points"
            id="points-tooltip"
          >
            <img src={point} alt="" style={{ width: "24px" }} />
            {reward * 0.1}
          </div>
        </div>
        <div className="relative bg-neutral-800 rounded-b-xl p-4 h-16 -mt-2 overflow-x-hidden">
          <div className="absolute inset-4 flex items-end justify-between z-50">
            <Link
              className="block"
              to={`/profile/${dataFulfillment.accountID}`}
            >
              <img
                src={dataFulfillment.imageUrl}
                alt="vikas7754"
                className="min-w-[48px] w-12 h-12 rounded-md"
              />
            </Link>
            <div className="font-semibold text-lg flex items-center gap-2 mr-auto ml-4">
              <Link
                className="block overflow-hidden whitespace-nowrap max-w-[50px] xxs:max-w-[100px] xs:max-w-[260px] sm:max-w-[260px] ms:max-w-[100px] md:max-w-[100px] lg:max-w-[180px] text-ellipsis"
                to={`/profile/${dataFulfillment.accountID}`}
              >
                {dataFulfillment.usernameCreator}
              </Link>
            </div>
          </div>
          <div
            className="absolute z-0 left-1/2 bottom-full -translate-x-1/2 w-[50%] h-[100px] rounded-full opacity-30 blur-3xl bg-gradient-to-t whitespace-nowrap
    from-amber-400 to-transparent"
          />
        </div>
      </div>
    )
  );
}

export default Fulfillment;
