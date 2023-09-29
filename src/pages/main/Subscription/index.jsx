import React from "react";
import { Link } from "react-router-dom";
import styles from "./subscription.module.scss";
import AppButton from "../../../components/Button";
import rocket from "../../../assets/images/rocket.svg";
function Subscription() {
  return (
    <div className={styles.supportersSection}>
      <h2>
        Unleash Your Creativity to Soar Among the Universe!{" "}
        <img src={rocket} alt="" />
      </h2>
      <section className={styles.subscription}>
        <div className={styles.gradient}></div>
        <div className={styles.subscriptionCard}>
          <div className={styles.header}>
            <div>
              <h3>Pro</h3>
            </div>
            <div className={styles.price}>
              $4.99
              <span>/month</span>
            </div>
            <p>
              With this plan, you'll gain access to advanced AI tools and extra
              features.
            </p>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
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
                  <p>Custom color backgrounds</p>
                </div>
                <p>Add a custom background to your posts.</p>
              </li>
              <li>
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
                  <p>Custom color backgrounds</p>
                </div>
                <p>Add a custom background to your posts.</p>
              </li>
              <li>
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
                  <p>Custom color backgrounds</p>
                </div>
                <p>Add a custom background to your posts.</p>
              </li>
            </ul>
            <AppButton children="Get Started" btnType="button_1" htmlType="a" />
          </div>
        </div>
        <div className={styles.subscriptionCard}>
          <div className={styles.header}>
            <div>
              <h3>Pro</h3>
            </div>
            <div className={styles.price}>
              $40.99
              <span>/year</span>
            </div>
            <p>
              With this plan, you'll gain access to advanced AI tools and extra
              features.
            </p>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
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
                  <p>Custom color backgrounds</p>
                </div>
                <p>Add a custom background to your posts.</p>
              </li>
              <li>
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
                  <p>Custom color backgrounds</p>
                </div>
                <p>Add a custom background to your posts.</p>
              </li>
              <li>
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
                  <p>Custom color backgrounds</p>
                </div>
                <p>Add a custom background to your posts.</p>
              </li>
            </ul>
            <AppButton children="Get Started" btnType="button_0" htmlType="a" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscription;
