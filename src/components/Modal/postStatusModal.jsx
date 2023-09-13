import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL, MODAL_STATUS } from "../../store/constants/modal.const";

function PostStatusModal() {
  const dispatch = useDispatch();
  const [type, setType] = useState("button");
  const changeStatus = (e) => {
    setType(e.target.value);
  };
  const submit = () => {
    dispatch({
      type: MODAL_STATUS,
      payload: type,
    });
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  return (
    <div className="options-modal">
      <h3 className="heading">What are you making?</h3>
      <div className="options">
        <label className={`option ${type === "button" ? "active" : "false"}`}>
          <input
            type="radio"
            name="option"
            id="button"
            value="button"
            checked={type === "button"}
            onChange={changeStatus}
          />
          <svg
            width={83}
            height={34}
            viewBox="0 0 83 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={83} height={34} rx={17} fill="currentColor" />
            <rect x={25} y={15} width={46} height={5} rx="2.5" fill="white" />
            <rect x={11} y={14} width={7} height={7} rx="3.5" fill="white" />
          </svg>
          <span className="option-label">Button</span>
        </label>
        <label className={`option ${type === "switch" ? "active" : "false"}`}>
          <input
            type="radio"
            name="option"
            id="switch"
            value="switch"
            checked={type === "switch"}
            onChange={changeStatus}
          />
          <svg
            width={54}
            height={28}
            viewBox="0 0 54 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={54} height={28} rx={14} fill="currentColor" />
            <circle cx={15} cy={14} r={8} fill="white" />
          </svg>
          <span className="option-label">Toggle switch</span>
        </label>
        <label className={`option ${type === "checkbox" ? "active" : "false"}`}>
          <input
            type="radio"
            name="option"
            id="checkbox"
            value="checkbox"
            checked={type === "checkbox"}
            onChange={changeStatus}
          />
          <svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={30} height={30} rx={9} fill="currentColor" />
            <path
              d="M6 16.0481L12.375 22.1667L24.3005 9.99608L22.286 8L12.3396 18.1759L7.97625 14.0152L6 16.0481Z"
              fill="white"
            />
          </svg>
          <span className="option-label">Checkbox</span>
        </label>
        <label className={`option ${type === "card" ? "active" : "false"}`}>
          <input
            type="radio"
            name="option"
            id="card"
            value="card"
            checked={type === "card"}
            onChange={changeStatus}
          />
          <svg
            width={32}
            height={44}
            viewBox="0 0 32 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x={32}
              width={44}
              height={32}
              rx={4}
              transform="rotate(90 32 0)"
              fill="currentColor"
            />
            <rect x={6} y={7} width={20} height={4} rx={2} fill="white" />
            <rect x={6} y={14} width={11} height={4} rx={2} fill="white" />
          </svg>
          <span className="option-label">Card</span>
        </label>
        <label className={`option ${type === "spinner" ? "active" : "false"}`}>
          <input
            type="radio"
            name="option"
            id="spinner"
            value="spinner"
            checked={type === "spinner"}
            onChange={changeStatus}
          />
          <svg
            width={41}
            height={41}
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5002 3.41675C20.9533 3.41675 21.3878 3.59673 21.7082 3.91711C22.0285 4.23748 22.2085 4.672 22.2085 5.12508V10.2501C22.2085 10.7032 22.0285 11.1377 21.7082 11.4581C21.3878 11.7784 20.9533 11.9584 20.5002 11.9584C20.0471 11.9584 19.6126 11.7784 19.2922 11.4581C18.9718 11.1377 18.7918 10.7032 18.7918 10.2501V5.12508C18.7918 4.672 18.9718 4.23748 19.2922 3.91711C19.6126 3.59673 20.0471 3.41675 20.5002 3.41675V3.41675ZM20.5002 29.0417C20.9533 29.0417 21.3878 29.2217 21.7082 29.5421C22.0285 29.8625 22.2085 30.297 22.2085 30.7501V35.8751C22.2085 36.3282 22.0285 36.7627 21.7082 37.0831C21.3878 37.4034 20.9533 37.5834 20.5002 37.5834C20.0471 37.5834 19.6126 37.4034 19.2922 37.0831C18.9718 36.7627 18.7918 36.3282 18.7918 35.8751V30.7501C18.7918 30.297 18.9718 29.8625 19.2922 29.5421C19.6126 29.2217 20.0471 29.0417 20.5002 29.0417V29.0417ZM35.2943 11.9584C35.5209 12.3508 35.5823 12.8171 35.465 13.2547C35.3478 13.6923 35.0615 14.0655 34.6691 14.292L30.2308 16.8545C30.0365 16.9684 29.8215 17.0428 29.5983 17.0733C29.3751 17.1039 29.148 17.0899 28.9302 17.0323C28.7124 16.9747 28.5081 16.8746 28.3292 16.7378C28.1502 16.6009 28.0001 16.43 27.8874 16.2349C27.7748 16.0398 27.7018 15.8244 27.6728 15.6009C27.6437 15.3775 27.6592 15.1506 27.7182 14.9331C27.7772 14.7157 27.8787 14.5121 28.0167 14.3341C28.1548 14.156 28.3267 14.007 28.5225 13.8957L32.9608 11.3332C33.3531 11.1066 33.8194 11.0452 34.257 11.1625C34.6947 11.2798 35.0678 11.5661 35.2943 11.9584V11.9584ZM13.1031 24.7709C13.3296 25.1633 13.391 25.6296 13.2738 26.0672C13.1565 26.5048 12.8702 26.878 12.4778 27.1045L8.0396 29.667C7.84524 29.7809 7.63026 29.8553 7.40705 29.8858C7.18383 29.9164 6.95678 29.9024 6.73897 29.8448C6.52115 29.7872 6.31688 29.6871 6.13792 29.5503C5.95895 29.4134 5.80882 29.2425 5.69617 29.0474C5.58352 28.8523 5.51057 28.6369 5.48154 28.4134C5.4525 28.19 5.46794 27.9631 5.52697 27.7457C5.58599 27.5282 5.68745 27.3246 5.82548 27.1466C5.96352 26.9685 6.13541 26.8195 6.33127 26.7082L10.7695 24.1457C11.1619 23.9191 11.6282 23.8577 12.0658 23.975C12.5034 24.0923 12.8766 24.3786 13.1031 24.7709ZM35.2943 29.0417C35.0678 29.4341 34.6947 29.7204 34.257 29.8377C33.8194 29.9549 33.3531 29.8935 32.9608 29.667L28.5225 27.1045C28.1333 26.8763 27.8502 26.5035 27.7349 26.0674C27.6196 25.6313 27.6815 25.1672 27.907 24.7766C28.1326 24.3859 28.5035 24.1003 28.9389 23.9821C29.3743 23.8639 29.8387 23.9227 30.2308 24.1457L34.6691 26.7082C35.0615 26.9347 35.3478 27.3078 35.465 27.7455C35.5823 28.1831 35.5209 28.6494 35.2943 29.0417ZM13.1031 16.2292C12.8766 16.6216 12.5034 16.9079 12.0658 17.0252C11.6282 17.1424 11.1619 17.081 10.7695 16.8545L6.33127 14.292C6.13541 14.1806 5.96352 14.0317 5.82548 13.8536C5.68745 13.6755 5.58599 13.4719 5.52697 13.2545C5.46794 13.0371 5.4525 12.8101 5.48154 12.5867C5.51057 12.3633 5.58352 12.1478 5.69617 11.9527C5.80882 11.7576 5.95895 11.5867 6.13792 11.4499C6.31688 11.313 6.52115 11.2129 6.73897 11.1553C6.95678 11.0977 7.18383 11.0838 7.40705 11.1143C7.63026 11.1449 7.84524 11.2192 8.0396 11.3332L12.4778 13.8957C12.8702 14.1222 13.1565 14.4953 13.2738 14.933C13.391 15.3706 13.3296 15.8369 13.1031 16.2292Z"
              fill="#DCDCDC"
            />
          </svg>
          <span className="option-label">Loader</span>
        </label>
        <label className={`option ${type === "input" ? "active" : "false"}`}>
          <input
            type="radio"
            name="option"
            id="input"
            value="input"
            checked={type === "input"}
            onChange={changeStatus}
          />
          <svg
            width={76}
            height={30}
            viewBox="0 0 76 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width={73}
              height={27}
              rx="7.5"
              stroke="currentColor"
              strokeWidth={3}
            />
            <rect
              x={10}
              y={15}
              width={7}
              height={7}
              rx="3.5"
              fill="currentColor"
            />
            <rect
              x={19}
              y={15}
              width={7}
              height={7}
              rx="3.5"
              fill="currentColor"
            />
            <rect
              x={28}
              y={15}
              width={7}
              height={7}
              rx="3.5"
              fill="currentColor"
            />
          </svg>
          <span className="option-label">Input</span>
        </label>
      </div>
      <div className="buttons">
        <button className="button button--primary" onClick={submit}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default PostStatusModal;
