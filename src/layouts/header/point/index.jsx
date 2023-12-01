import React, { useEffect } from "react";
import point from "../../../assets/images/logoCover.png";
import styles from "./point.module.scss";
import { useDispatch } from "react-redux";
import { open } from "../../../store/modal/modal-slice";
import PaymentModal from "../../../components/Modal/paymentModal";
import PayModal from "../../../components/Modal/payModal";
import { useParseUrl } from "../../../hooks/useParseUrl";
import { useLocation } from "react-router-dom";
import { getProfiles } from "../../../api/account";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { useState } from "react";
function Point() {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const { search } = useParseUrl();
  const location = useLocation();
  const onPaymentModal = () => {
    dispatch(open(<PaymentModal />));
  };
  const [data, setData] = useState(0);
  useEffect(
    () => {
      getProfiles(isLogin.id).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("data.data.wallet", data.data.wallet);
          search?.vnp_Amount
            ? dispatch(
                open(
                  <PayModal
                    url={location.search}
                    datas={data.data.wallet}
                    setData={setData}
                  />
                )
              )
            : setData(data.data.wallet);
        }
      });
    }, // eslint-disable-next-line
    []
  );
  useEffect(
    () => {
      getProfiles(isLogin.id).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setData(data.data.wallet);
        }
      });
      search?.vnp_Amount &&
        dispatch(
          open(
            <PayModal url={location.search} datas={data} setData={setData} />
          )
        );
    }, // eslint-disable-next-line
    []
  );
  return (
    <div className={styles.point}>
      <div
        className="hover:bg-sky-500 points-tag pl-3.5 pr-4 rounded-lg h-[42px]"
        id="points-tooltip"
        onClick={onPaymentModal}
      >
        <img src={point} alt="" />
        {data?.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </div>
      <div
        className={`${styles.info} styles-module_tooltip__mnnfp styles-module_dark__xNqje points-tooltip shadow-lg bg-dark-600 styles-module_show__2NboJ styles-module_clickable__Bv9o7`}
        style={{ left: "-125px", top: "55px" }}
      >
        <span className="heading">
          <img src={point} alt="" />
          Creator Points
        </span>
        <p className="font-normal text-gray-300">
          Join the ranks of top contributors by accumulating points for your
          published posts and popular content.
        </p>
        <div
          className="react-tooltip-arrow styles-module_arrow__K0L3T"
          style={{ left: 171, top: "-4px" }}
        />
      </div>
    </div>
  );
}

export default Point;
