import { useState } from "react";
import Select from "react-select";
import { setStorage } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../store/modal/modal-slice";
import { getSettingEditor } from "../../store/profile/profile-slice";
function SettingEditor() {
    const dispatch = useDispatch();
    const { settingEditor } = useSelector((state) => state.profile);
  const [fontSize, setFontSize] = useState(settingEditor?.fontSize || 17);
  const [autoSave, setAutoSave] = useState(settingEditor?.autoSave || 5000);
  
  const [theme, setTheme] = useState({
    value: settingEditor?.theme || "vs-dark",
    label: settingEditor?.theme || "vs-dark",
  });
  const [miniMap, setMiniMap] = useState({
    value: settingEditor?.miniMap || "enabled",
    label: settingEditor?.miniMap || "enabled",
  });
  const colorStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "rgb(41, 41, 41)" : "rgb(41, 41, 41)",
      };
    },
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(close());
    dispatch(
      getSettingEditor({
        theme: theme.value,
        miniMap: miniMap.value,
        fontSize,
        autoSave,
      })
    );
    setStorage({
      key: "settingEditor",
      value: JSON.stringify({
        theme: theme.value,
        miniMap: miniMap.value,
        fontSize,
        autoSave,
      }),
    });
  };
  return (
    <div className="customModal--sign-in options-modal">
      <h3 className="heading">Setting Editor</h3>
      <form className="form-login">
        <div className="form-label grid-cols-3">
          <label>Auto Save (millisecond)</label>
          <input
            type="number"
            placeholder="Enter your username"
            onChange={(auto) => setAutoSave(auto.target.value)}
            value={autoSave}
          />
        </div>
        <div className="form-label grid-cols-3">
          <label>FontSize</label>
          <input
            type="number"
            placeholder="Enter your username"
            onChange={(auto) => setFontSize(auto.target.value)}
            value={fontSize}
          />
        </div>
        <div className="form-label grid-cols-3">
          <label>Theme</label>
          <Select
            styles={colorStyles}
            options={[
              { value: "vs-dark", label: "vs-dark" },
              { value: "light", label: "light" },
            ]}
            value={theme}
            onChange={(selectedOption) => setTheme(selectedOption)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-label grid-cols-3">
          <label>Minimap</label>
          <Select
            styles={colorStyles}
            options={[
              { value: "enabled", label: "enabled" },
              { value: "disabled", label: "disabled" },
            ]}
            value={miniMap}
            onChange={(selectedOption) => setMiniMap(selectedOption)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div
          className="form-label grid-cols-6"
          style={{ display: "grid", justifyContent: "end" }}
        >
          <button className="button sup-button" onClick={(e) => submit(e)}>
            save
          </button>
        </div>
      </form>
    </div>
  );
}

export default SettingEditor;
