import React from "react";
import ColorPicker from "react-pick-color";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";
function BackgroundColor({ color, setColor }) {
  const { ref, isComponentVisible, onClick } = useDetectOutsideClick();
  return (
    <label className="theme-switcher" style={{ left: "15px" }}>
      Background:
      <label
        className="switch-color"
        onClick={onClick}
        style={{ backgroundColor: color }}
      ></label>
      <label className="switch-label" htmlFor="preview-theme">
        {color}
      </label>
      <div
        ref={ref}
        className={`dropdown-menu ${isComponentVisible ? "open" : "closed"}`}
        style={{ left: "3px", right: "auto", background: "none" }}
      >
        <ColorPicker
          color={color}
          onChange={(color) => setColor(color.hex)}
          hideInputs
          theme={{
            background: "#fff",
            borderColor: "#fff",
            borderRadius: "5px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
            color: "#262626",
            inputBackground: "#f4f4f4",
            width: "280px",
          }}
        />
      </div>
    </label>
  );
}

export default BackgroundColor;
