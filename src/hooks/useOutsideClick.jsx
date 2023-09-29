import { useState, useEffect, useRef } from "react";

export const useDetectOutsideClick = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef(null);
  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isComponentVisible, ref]);
  const onClick = () => setIsComponentVisible(true);
  return { ref, isComponentVisible, onClick };
};