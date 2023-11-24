import React from "react";
import styles from "./dropdownNav.module.scss";
import { useDetectOutsideClick } from "../../hooks/useOutsideClick";
function DropdownNav(props) {
   const { isActive, setIsActive, nodeRef, triggerRef } =
     useDetectOutsideClick(false);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        ref={triggerRef}
        onClick={() => setIsActive(!isActive)}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
        />
      </svg>
      <nav
        ref={nodeRef}
        className={`${styles.dropdownMenu} ${isActive && styles.open}`}
      >
        <ul>
          {props.item.map((item, index) => (
            <li key={index}>
              <div className={styles.item} onClick={()=>{item.onClick(); setIsActive(!isActive);}}>
                {item.icon}
                <div>{item.label}</div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default DropdownNav;
