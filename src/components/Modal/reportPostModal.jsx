import { useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "../../store/modal/modal-slice";

function ReportPostModal() {
  const reasons = [
    {
      title: "Misleading or Inappropriate Content",
      description:
        "Select this if this post contains false, misleading, or inappropriate information that may deceive users or promote harmful actions",
      name: "MISLEADING_INFORMATION",
      value: 3,
    },
    {
      title: "Copyright Violation",
      description:
        "Choose this if you believe this post infringes on someone's intellectual property or copyrighted content",
      name: "CODE_PLAGIARISM",
      value: 2,
    },
    {
      title: "Spam or Malicious Content",
      description:
        "Report this if this post seems to be spam, promotes phishing, or contains malicious intent or links",
      name: "NON_CODING_CONTENT",
      value: 9,
    },
    {
      title: "Other",
      description:
        "If your reason doesn't fit the categories above, select this and provide more details in the subsequent field",
      name: "OTHER",
      value: 10,
    },
  ];
   const dispatch = useDispatch();
  const [type, setType] = useState(3);
  const changeStatus = (value) => {
    setType(value);
  };
    const submit = () => {
      dispatch(close());
    };
  return (
    <div className="p-10">
      <div className="mb-4 text-2xl font-bold text-gray-300">Report post</div>
      <div className="py-4 bg-dark-700">
        <div id="headlessui-radiogroup-:r0:">
          <div className="-space-y-px rounded-md">
            {reasons.map((reason, i) => (
              <div
                className={`${
                  type === reason.value
                    ? "z-10 border-indigo-400 bg-dark-500"
                    : "border-dark-600"
                } relative flex cursor-pointer border p-4 focus:outline-none ${
                  i === 0 ? "rounded-tl-md rounded-tr-md" : ""
                }${i === 3 ? "rounded-bl-md rounded-br-md" : ""}`}
                key={i}
                onClick={() => changeStatus(reason.value)}
              >
                <span
                  className={`${
                    type === reason.value
                      ? "bg-indigo-600 border-transparent"
                      : "bg-white border-gray-300"
                  }  mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center`}
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <span className="flex flex-col ml-3">
                  <span className="text-gray-100 block text-sm font-semibold">
                    {reason.title}
                  </span>
                  <span className="text-gray-300 block text-sm">
                    {reason.description}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
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
            defaultValue={""}
          />
        </div>
        <button
          className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700 text-offwhite cursor-pointer mt-3 ml-auto"
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReportPostModal;
