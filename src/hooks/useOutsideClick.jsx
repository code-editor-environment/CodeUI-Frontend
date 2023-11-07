import { useState, useEffect, useRef } from "react";
export const useDetectOutsideClick = (initialState) => {
  const triggerRef = useRef(null); 
  const nodeRef = useRef(null); 
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isActive]);

  return { isActive, setIsActive, nodeRef, triggerRef };
};
