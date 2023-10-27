import React from "react";

function AdsViaCarbon() {
  return (
    <div className="banner fixed left-[17px] bottom-[17px] z-[250]">
      <div
        id="carbonads"
        className="max-w-[300px] min-w-[100%] mx-auto bg-dark-600 text-gray-200 text-[12px] rounded overflow-hidden relative"
      >
        <div className="flex">
          <a className="carbon-img">
            <img
              alt="ads via Carbon"
              className="block "
              border={0}
              height={100}
              width={130}
              style={{ maxWidth: 130 }}
            />
          </a>
          <a className="py-[8px] px-[10px]" />
        </div>
        <a
          href="#"
          className="absolute bg-dark-500 py-[3px] px-[7px] text-[8px] tracking-[0.5px] font-[600] uppercase bottom-[0px]  right-[0px] text-gray-300"
        >
          ads via Carbon
        </a>
      </div>
    </div>
  );
}

export default AdsViaCarbon;
