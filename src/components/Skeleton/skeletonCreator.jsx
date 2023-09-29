import React from "react";
import styles from "./skeleton.module.scss";

function SkeletonCreator({ total }) {
  let num = [];
  for (var i = 0; i < total; i++) {
    num.push(i);
  }
  return (
    <section className="creators">
      {num.map((index) => (
        <article key={index}>
          <div className={`${styles.cardCreator} ${styles.skeleton}`}></div>
        </article>
      ))}
    </section>
  );
}

export default SkeletonCreator;
