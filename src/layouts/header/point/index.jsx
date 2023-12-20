import React, { useEffect } from "react";
import point from "../../../assets/images/logoCover.png";
import styles from "./point.module.scss";
import { useDispatch, useSelector } from "react-redux";
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
  const { loadMoney } = useSelector((state) => state.profile);
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
          console.log("datas", data.data.wallet);
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
    [loadMoney]
  );

  return (
    <div className={styles.point}>
      <div
        className="hover:bg-sky-500 points-tag pl-3.5 pr-4 rounded-lg h-[42px]"
        id="points-tooltip"
        onClick={onPaymentModal}
      >
        <img src={point} alt="" />
        {data?.toLocaleString("vi-VN")}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          style={{marginLeft: "10px", marginRight: "0px"}}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
        </svg>
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
