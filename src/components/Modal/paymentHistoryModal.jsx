import React, { useEffect, useState } from "react";
import { getPaymentHistory } from "../../api/account";
import point from "../../assets/images/logoCover.png";
import { formatDateString } from "../../utils/functions";
function PaymentHistoryModal() {
    const [data, setData] = useState([]);
      useEffect(
        () => {
          getPaymentHistory().then((data) => {
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
        <h1 className="mb-0 text-3xl font-bold text-center">Payment history</h1>
        <h2 className="text-base font-semibold text-center text-blue-400">
          All time
        </h2>
        <section className="mt-10 creators">
          {data.length > 0 &&
            data.map((item, index) => (
              <div className="creator" key={index} style={{ display: "block" }}>
                {/* <span className="rank">1</span> */}
                <span className="username" style={{ maxWidth: "fit-content" }}>
                  {item.orderInfo}
                </span>
                <span className="username" style={{ maxWidth: "fit-content" }}>
                  {formatDateString(item.date)}
                </span>
                <div className="points-tag">
                  <img src={point} alt="" />
                  {item.amount.toLocaleString("vi-VN", {
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

export default PaymentHistoryModal;
