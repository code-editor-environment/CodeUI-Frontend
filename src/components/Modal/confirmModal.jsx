import { useDispatch } from "react-redux";
import { close } from "../../store/modal/modal-slice";


function ConfirmModal({ title, onClick }) {
  const dispatch = useDispatch();
  return (
    <div className="customModal--sign-in options-modal">
      <div className>
        <div className="text-2xl text-center font-bold pb-4">
          Delete {title}?
        </div>
        <p className="text-center pb-3">
          <span className="text-yellow-300">Careful! </span> This action cannot
          be undone.
        </p>
        <div className="flex items-center justify-center gap-3 mt-3">
          <button
            className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-red-500 hover:bg-red-600 text-white cursor-pointer undefined"
            onClick={() => {
              onClick();
              dispatch(close());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="m16 7-1.106-2.211a3.236 3.236 0 0 0-5.788 0L8 7M4 7h16M6 7h12v8c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165C14.796 21 13.864 21 12 21s-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C6 17.796 6 16.864 6 15V7Z" />
            </svg>
            Delete
          </button>
          <button
            className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700 text-offwhite cursor-pointer undefined"
            onClick={() => dispatch(close())}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
