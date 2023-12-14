import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase.configs";
import point from "../../../assets/images/logoCover.png";
import { Link } from "react-router-dom";
function Fulfillment({ item,index }) {
  const [dataFulfillment, setDataFulfillment] = useState(null);
  const fetchPost = async () => {
    await getDoc(doc(db, `request`, item.id.toString())).then((querySnapshot) => {
      setDataFulfillment(querySnapshot.data());
    });
  };
  useEffect(() => {
    fetchPost();
  }, [item.id]);

  return (
    dataFulfillment && (
      <div className="flex flex-col w-full relative " key={index}>
        <article className="card text-black h-full card--tooltip group dark-background false">
          <div className="card-content compact">
            {/* <a
              className="get-code font-sans font-semibold bg-dark-400"
              href="/vikas7754/evil-mule-52"
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
            </a> */}
            <div className="absolute z-20 flex items-center left-1.5 top-[6px] gap-0.5" />
            <div className="clickable-wrapper">
              <Link className="get-html-css text-white" to={`/requestElement/${item.id}`}>
                Get <span className="html">HTML</span> &amp;{" "}
                <span className="css">CSS</span>
              </Link>
              <iframe
                srcDoc={`
        <html style="height: 100%;overflow: hidden;">
        <head>
        <style>${dataFulfillment.css}</style>
        ${
          dataFulfillment?.typeCss === "tailwind"
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
          <div className="text-offwhite false rounded-md flex gap-2 items-center font-bold z-30">
            <p className="text-lg font-bold">
              1<span className="text-sm font-normal">st</span>
            </p>
          </div>
          <div
            className="text-offwhite flex gap-2 items-center font-semibold w-fit m-1 pointer-events-auto winners-points"
            id="points-tooltip"
          >
            <img src={point} alt="" style={{ width: "24px" }} />
            2000
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
