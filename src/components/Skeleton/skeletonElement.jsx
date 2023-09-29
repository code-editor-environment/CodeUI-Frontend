import React from "react";
import styles from "./skeleton.module.scss";

function SkeletonElement({ total }) {
    let num = [];
    for (var i = 0; i < total; i++) {
        num.push(i);
    }
  return (
    <section className="cards-container cards-container--all">
      {num.map((index) => (
        <article key={index}>
          <div className={`${styles.cardElement} ${styles.skeleton}`}></div>
        </article>
      ))}
    </section>
  );
}

export default SkeletonElement;
