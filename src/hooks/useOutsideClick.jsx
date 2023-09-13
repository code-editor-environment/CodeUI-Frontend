import { useState, useEffect, useRef } from "react";

export const useDetectOutsideClick = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const onClick = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", onClick);
    }
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, dropdownRef]);
  const onClick = () => setIsActive(!isActive);
  return { dropdownRef, onClick, isActive };
};
