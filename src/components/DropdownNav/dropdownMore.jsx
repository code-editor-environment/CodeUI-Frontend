import React from "react";
import styles from "./dropdownNav.module.scss";
import { useDetectOutsideClick } from "../../hooks/useOutsideClick";
import moreIcon from "../../assets/images/more.svg";
function DropdownMore(props) {
  const { ref, isComponentVisible, onClick } = useDetectOutsideClick();
  return (
    <>
      <button
        className="copy-all CSS"
        style={{ background: "#444" }}
        onClick={onClick}
      >
        <span className="copy-all__text">
          <img src={moreIcon} alt="" />
        </span>
      </button>
      <nav
        ref={ref}
        className={`${styles.dropdownMenu} ${
          isComponentVisible && styles.open
        }`}
      >
        <ul>
          {props.item.map((item, index) => (
            <li key={index}>
              <div className={styles.item} onClick={item.onClick}>
                {/* {item.icon} */}
                <div>{item.label}</div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default DropdownMore;
