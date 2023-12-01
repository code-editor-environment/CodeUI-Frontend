import React, { useEffect, useState } from "react";
import { getDonation } from "../../api/account";
import point from "../../assets/images/logoCover.png";
import { useIsLogin } from "../../hooks/useIsLogin";
function DonationModal() {
  const { isLogin } = useIsLogin();
  const [data, setData] = useState([]);
  useEffect(
    () => {
      getDonation(isLogin.id).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setData(data.data);
        }
      });
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div className="options-modal tags">
      <div>
        <h1 className="mb-0 text-3xl font-bold text-center">Donation</h1>
        <h2 className="text-base font-semibold text-center text-blue-400">
          All time
        </h2>
        <section className="mt-10 creators">
          {data.length > 0 &&
            data.map((item, index) => (
              <div className="creator">
                <span className="rank">{index + 1}</span>
                {/* <img
                  className="avatar"
                  src=""
                  alt=""
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={50}
                  height={50}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"
                  />
                </svg>
                <span className="username">{item.title}</span>
                <div className="number-of-posts">
                  <span className="value">{item.subscribeLimit}</span>
                  <span className="label">month</span>
                </div>
                <div className="points-tag">
                  <img src={point} alt="" />
                  {item?.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            ))}
        </section>
        {/* <a
          className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base  font-semibold transition-colors duration-200 bg-dark-600 hover:bg-dark-500 text-offwhite cursor-pointer mx-auto mt-6 max-w-max button--show-more"
          href="/spotlight?top50"
        >
          Show more
        </a> */}
      </div>
    </div>
  );
}

export default DonationModal;
