import React from "react";
import styles from "./dropdownNav.module.scss";
import { useDetectOutsideClick } from "../../hooks/useOutsideClick";
import moreIcon from "../../assets/images/more.svg";
function DropdownMore(props) {
   const { isActive, setIsActive, nodeRef, triggerRef } =
     useDetectOutsideClick(false);
  return (
    <>
      <button
        className="copy-all CSS"
        style={{ background: "#444" }}
        ref={triggerRef}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="copy-all__text">
          <img src={moreIcon} alt="" />
        </span>
      </button>
      <nav
        ref={nodeRef}
        className={`${styles.dropdownMenu} ${isActive && styles.open}`}
      >
        <ul>
          {props.item.map((item, index) => {
            if (item?.check === false) {
              return null;
            }
            return (
              <li key={index}>
                <div className={styles.item} onClick={item.onClick}>
                  {/* {item.icon} */}
                  <div>{item.label}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default DropdownMore;
