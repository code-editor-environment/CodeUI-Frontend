import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../store/modal/modal-slice";
export function ModalContainer() {
  const { isOpen, content } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [overlay, setOverlay] = useState(true);
  function onClose() {
    setOverlay(false);
    setTimeout(() => {
      dispatch(close());
    }, 200);
  }
  useEffect(() => {
    setOverlay(true);
    // eslint-disable-next-line
  }, [isOpen]);

  return ReactDOM.createPortal(
    isOpen && (
      <div className="react-responsive-modal-root">
        <div
          className="react-responsive-modal-overlay customOverlay"
          style={{
            animation: overlay
              ? "300ms ease 0s 1 normal none running react-responsive-modal-overlay-in"
              : "300ms ease 0s 1 normal none running react-responsive-modal-overlay-out",
          }}
          onClick={onClose}
        />
        <div className="react-responsive-modal-container react-responsive-modal-containerCenter">
          <div
            className="react-responsive-modal-modal customModal"
            style={{
              animation: overlay
                ? "300ms ease 0s 1 normal none running react-responsive-modal-overlay-in"
                : "300ms ease 0s 1 normal none running react-responsive-modal-overlay-out",
            }}
          >
            {content}
            <button
              className="react-responsive-modal-closeButton"
              onClick={onClose}
            >
              <svg
                width={28}
                height={28}
                viewBox="0 0 36 36"
                data-testid="close-icon"
                fill="#ddd"
              >
                <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ),
    document.getElementById("root_modal")
  );
}
