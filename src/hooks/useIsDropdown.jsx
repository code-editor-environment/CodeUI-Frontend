import { useState } from "react";

export function useIsDropdown() {
  const [dropdown, setDropdown] = useState(false);
  function handleClick() {
    setDropdown(!dropdown);
  }
  return {
    dropdown,
    handleClick,
  };
}
