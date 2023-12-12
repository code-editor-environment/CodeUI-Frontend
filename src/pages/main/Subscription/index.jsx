import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import styles from "./subscription.module.scss";
import AppButton from "../../../components/Button";
import rocket from "../../../assets/images/rocket.svg";
import subscription2 from "../../../assets/images/subscription2.png";
import subscription1 from "../../../assets/images/pro1.png";
import { useDispatch, useSelector } from "react-redux";
import { buyPackage, getSubscriptions } from "../../../api/account";
import { getSubscription } from "../../../store/creator/creator-slice";
import { open } from "../../../store/modal/modal-slice";
import ConfirmModal from "../../../components/Modal/confirmModal";
import { toast } from "react-toastify";
import { useState } from "react";
import { useIsLogin } from "../../../hooks/useIsLogin";
import CheckLoginModal from "../../../components/Modal/checkLoginModal";
// import Element from './../Element/index';
function Subscription() {
  const dispatch = useDispatch();
  // const query = useQuery();
  // const text = query.get("text");
  const { isLogin } = useIsLogin();
  const { subscription } = useSelector((state) => state.creator);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    getSubscriptions().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        dispatch(getSubscription(data.data));
      }
    });
    // eslint-disable-next-line
  }, [load]);
  const onBuy = (id) => {
    buyPackage(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        // setComments(comments.filter((c) => c.id !== id));
        setLoad(!load);
        toast.success("successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      }
    });
  };
  return (
    <div className={styles.supportersSection}>
      <h2>
        Unleash Your Creativity to Soar Among the Universe!{" "}
        <img src={rocket} alt="" />
      </h2>
      <section className={styles.subscription}>
        <div className={styles.gradient}></div>
        {subscription.length > 0 &&
          subscription.map((sub, index) => (
            <div className={styles.subscriptionCard} key={index}>
              <div className={styles.header}>
                <div>
                  {sub.name === "Pro" ? (
                    <h3>{sub.name}</h3>
                  ) : (
                    <h3 className={styles.h3nth2}>Pro+</h3>
                  )}
                </div>
                <div className={styles.price}>
                  {sub.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                  <span>/month</span>
                </div>
                <p>
                  {sub.isBought
                    ? "The package you currently own will end on  "
                    : "With this plan, you'll gain access to advanced extra features."}
                </p>
                {sub.isBought && (
                  <span>{new Date(sub.endDate).toDateString()}</span>
                )}
              </div>
              <div className={styles.content}>
                <ul>
                  {sub.features.length > 0 &&
                    sub.features.map((item, index) => (
                      <li key={index}>
                        <div className={styles.start}>
                          <div className={styles.shrink}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                fill="currentColor"
                                d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                              />
                            </svg>
                          </div>
                          <p>{item.name}</p>
                        </div>
                        <p>{item.description}</p>
                      </li>
                    ))}
                </ul>
                {sub.name === "Pro" ? (
                  <AppButton
                    children={sub.isBought ? "Possession" : "Get Started"}
                    btnType="button_1"
                    disabled={sub.isBought}
                    onClick={() =>
                      dispatch(
                        open(
                          isLogin ? (
                            <ConfirmModal
                              title={"Buy package"}
                              type={"package"}
                              onClick={() => onBuy(sub.id)}
                            />
                          ) : (
                            <CheckLoginModal />
                          )
                        )
                      )
                    }
                  />
                ) : (
                  <AppButton
                    children={sub.isBought ? "Possession" : "Get Started"}
                    btnType="button_0"
                    disabled={sub.isBought}
                    onClick={() =>
                      dispatch(
                        open(
                          isLogin ? (
                            <ConfirmModal
                              title={"Buy package"}
                              type={"package"}
                              onClick={() => onBuy(sub.id)}
                            />
                          ) : (
                            <CheckLoginModal />
                          )
                        )
                      )
                    }
                  />
                )}
              </div>
            </div>
          ))}
      </section>
      <section className="relative mb-44 mt-10 pb-32  lg:pb-10">
        <div className="absolute w-full h-4/5 bottom-0 left-0 bg-gradient-to-t from-dark-700 from-0% via-[99%] to-100% via-transparent to-transparent z-20" />
        <img
          src={subscription1}
          alt=""
          className="w-full block mx-auto max-w-[1400px] relative z-10 rounded-3xl"
          style={{ padding: "35px", background: " #0B0B0B" }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30 max-w-[900px] w-full">
          <h3 className="flex items-center gap-4 text-2xl lg:text-5xl justify-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="h-6 w-6 md:h-8 md:w-8 lg:h-14 lg:w-14 text-fuchsia-400 "
            >
              <path
                d="M9.2467 3C9.65074 6.17905 12.5275 9.00324 15.6934 9.5C12.5275 9.99676 9.65074 12.8209 9.24669 16C8.84265 12.8209 6.16589 9.99676 3 9.5C6.16589 9.00324 8.84265 6.19877 9.2467 3.01971M17.3 20L17.2329 19.5924C17.0448 18.4504 16.1496 17.5552 15.0076 17.3671L14.6 17.3L15.0076 17.2329C16.1496 17.0448 17.0448 16.1496 17.2329 15.0076L17.3 14.6L17.3671 15.0076C17.5552 16.1496 18.4504 17.0448 19.5924 17.2329L20 17.3L19.5924 17.3671C18.4504 17.5552 17.5552 18.4504 17.3671 19.5924L17.3 20Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Asset Management & Hosting
          </h3>
          <p className="text-lg text-center text-gray-400 pt-5 max-w-xl mx-auto">
            Need to use an image in a Element? No more awkwardly finding
            alternate hosting for it, you can drag-and-drop it right onto codeui
            and we’ll host it for you.
          </p>
        </div>
        <div className="max-w-[1600px] w-full rounded-full h-3/6 bg-gradient-to-b z-0 from-transparent from-0% via-90% to-100% via-gray-700 to-transparent absolute bg-opacity-50 left-1/2 -translate-x-1/2 top-0 blur-[100px]" />
      </section>
      <section className="relative mb-44  pb-32  lg:pb-10">
        <div className="absolute w-full h-4/5 bottom-0 left-0 bg-gradient-to-t from-dark-700 from-0% via-[99%] to-100% via-transparent to-transparent z-20" />
        <img
          src={subscription2}
          alt=""
          className="w-full block  max-w-[1300px] mx-auto rounded-3xl relative z-10"
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30 max-w-[700px] w-full">
          <h3 className="flex items-center gap-4 text-2xl  lg:text-5xl justify-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="h-6 w-6 md:h-8 md:w-8 lg:h-14 lg:w-14 text-fuchsia-400 "
            >
              <path
                d="M9.2467 3C9.65074 6.17905 12.5275 9.00324 15.6934 9.5C12.5275 9.99676 9.65074 12.8209 9.24669 16C8.84265 12.8209 6.16589 9.99676 3 9.5C6.16589 9.00324 8.84265 6.19877 9.2467 3.01971M17.3 20L17.2329 19.5924C17.0448 18.4504 16.1496 17.5552 15.0076 17.3671L14.6 17.3L15.0076 17.2329C16.1496 17.0448 17.0448 16.1496 17.2329 15.0076L17.3 14.6L17.3671 15.0076C17.5552 16.1496 18.4504 17.0448 19.5924 17.2329L20 17.3L19.5924 17.3671C18.4504 17.5552 17.5552 18.4504 17.3671 19.5924L17.3 20Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Collab Mode
          </h3>
          <p className="text-lg text-center text-gray-400 pt-5 max-w-xl mx-auto">
            Live collaboration on code. Multiple people can type and edit code
            in a Element at the same time, all while still seeing the live
            preview. Great for long-distance pair programming!
          </p>
        </div>
        <div className="max-w-[1600px] w-full rounded-full h-h-3/6 bg-gradient-to-b z-0 from-transparent from-0% via-90% to-100% via-gray-700 to-transparent absolute bg-opacity-50 left-1/2 -translate-x-1/2 top-0 blur-[100px]" />
      </section>
      <section className="relative mb-24 mt-10 pb-32  lg:pb-10">
        <div className="absolute w-full h-[600px] bottom-0 left-0 bg-gradient-to-t from-dark-700 from-0% via-[99%] to-100% via-transparent to-transparent z-10" />
        <img
          src={subscription2}
          alt=""
          className="w-full block  max-w-[1200px] mx-auto"
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 max-w-[700px] w-full">
          <h3 className="flex items-center gap-4 text-2xl  lg:text-5xl justify-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="h-6 w-6 md:h-8 md:w-8 lg:h-14 lg:w-14 text-fuchsia-400 "
            >
              <path
                d="M9.2467 3C9.65074 6.17905 12.5275 9.00324 15.6934 9.5C12.5275 9.99676 9.65074 12.8209 9.24669 16C8.84265 12.8209 6.16589 9.99676 3 9.5C6.16589 9.00324 8.84265 6.19877 9.2467 3.01971M17.3 20L17.2329 19.5924C17.0448 18.4504 16.1496 17.5552 15.0076 17.3671L14.6 17.3L15.0076 17.2329C16.1496 17.0448 17.0448 16.1496 17.2329 15.0076L17.3 14.6L17.3671 15.0076C17.5552 16.1496 18.4504 17.0448 19.5924 17.2329L20 17.3L19.5924 17.3671C18.4504 17.5552 17.5552 18.4504 17.3671 19.5924L17.3 20Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>{" "}
            Custom Backgrounds
          </h3>
          <p className="text-lg mx-auto text-center text-gray-400 pt-5 max-w-xl mx-auto">
            Use custom color backgrounds for you posts
          </p>
        </div>
      </section>
    </div>
  );
}

export default Subscription;
