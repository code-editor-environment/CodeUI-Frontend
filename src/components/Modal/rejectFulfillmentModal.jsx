import { useState } from "react";
import { useDispatch } from "react-redux";
import { close, open } from "../../store/modal/modal-slice";
import { reportElement } from "../../api/element";
import { toast } from "react-toastify";
import ConfirmModal from "./confirmModal";
function RejectFulfillmentModal({ onClick }) {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  return (
    <div className="p-10">
      <div className="mb-4 text-2xl font-bold text-gray-300">
        Reject fulfillment
      </div>
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-semibold leading-6 text-gray-200"
        >
          Write anything that will help us verify your claim. For example, add
          links.
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-0 py-1.5 bg-dark-500 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700 text-offwhite cursor-pointer mt-3 ml-auto"
          onClick={() =>
            dispatch(
              open(
                <ConfirmModal
                  title={"Reject fulfillment"}
                  onClick={() => onClick(data)}
                  type="package"
                />
              )
            )
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RejectFulfillmentModal;
