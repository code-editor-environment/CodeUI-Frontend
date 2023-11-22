import { useState } from "react";

function SelectTagModal({ cssText, typeCSS, htmlText, clickSubmitReview }) {
  const tags = [
    "simple",
    "material design",
    "neumorphism",
    "skeuomorphism",
    "glassmorphism",
    "flashy",
    "tooltip",
    "icon",
    "animation",
    "login",
    "subscription",
    "email",
    "3d",
    "action",
    "alert",
    "red",
    "green",
    "blue",
    "purple",
    "pink",
    "minimalist",
    "white",
    "black",
    "social",
    "twitter",
    "facebook",
    "instagram",
    "notification",
    "success",
    "loading",
    "button",
    "form",
    "card",
    "hover",
    "active",
    "switch",
    "loader",
    "checkbox",
    "input",
    "spinner",
    "Discord",
    "like",
    "heart",
    "rounded",
    "smooth",
    "cube",
    "on",
    "off",
    "dark",
    "light",
    "product",
    "github",
    "trash",
    "share",
    "message",
    "image",
    "flip",
    "search",
    "hamburger",
    "shadow",
    "realistic",
    "space",
    "glow",
    "delete",
    "download",
    "theme-switch",
    "sign-up",
    "about me",
    "code",
    "modern",
    "social media",
    "neon",
    "game",
    "circle",
    "radio",
    "toggle",
    "futuristic",
    "blur filter",
    "text animation",
    "rotate",
    "click",
    "menu",
    "animated",
    "gradients",
    "svg",
    "light&dark",
    "colorful",
    "clean",
    "add",
    "chat",
    "circle loader",
    "custom",
    "creative",
    "wave",
    "edit",
    "border",
    "submit",
    "switcher",
    "box",
    "transition",
    "color",
    "text",
    "spin",
    "html",
    "css",
    "btn",
    "hover effect",
    "login form",
    "advanced",
    "click effect",
    "toggle switch",
    "accept",
    "css effect",
    "hoverme",
    "input effect",
    "click animation",
    "white and red",
    "2FA",
    "box-shadow",
    "buttons",
    "gold",
    "multicolor",
    "chatgpt",
    "account",
    "close",
    "simple button",
    "hover button",
    "card template",
    "golden effect",
    "subscribe",
    "premium",
    "effect loader",
    "cool card",
    "loading animation",
    "bounce animation",
    "#button",
    "cardhover",
    "card animation",
    "card hover",
    "tailwind",
    "tailwindbutton",
    "3d loader",
    "3d button",
    "3d card",
    "button hover effect",
    "2d button",
    "pattern",
  ];
  const [back, setBack] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [option, setOption] = useState("original");
  const [linkSource, setLinkSource] = useState("");
  const [nameSource, setNameSource] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(true);
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };
  const handleSourceLinkChange = (e) => {
    setLinkSource(e.target.value);
    setIsLinkValid(/^https?:\/\/.+/.test(e.target.value));
  };
  const handleSourceNameChange = (e) => {
    setNameSource(e.target.value);
  };
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTag = (e) => {
    e.preventDefault();
    const tag = inputValue.trim();
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setInputValue("");
  };
  const tagsToRemove = selectedTags.length - 8;
  const tagsToAdd = 3 - selectedTags.length;
  const canProceed = selectedTags.length >= 3 && selectedTags.length <= 8;
  const message =
    selectedTags.length > 8
      ? `Please remove ${tagsToRemove} tag(s) to continue.`
      : selectedTags.length < 3
      ? `Add atleast ${tagsToAdd} more tag(s) to continue.`
      : "";
  return (
    <div className="options-modal tags">
      <div className="modal flex gap-x-6  max-lg:flex-wrap">
        <div className="flex justify-center">
          <div className="mb-10 w-[285px] pointer-events-none">
            <article className="card text-black h-full card--radio group false false">
              <div className="card-content">
                <iframe
                  srcDoc={`
        <html style="height: 100%;overflow: hidden;">
        <head>
        <style>${cssText}</style>
        ${
          typeCSS === "tailwind"
            ? `<script src="https://cdn.tailwindcss.com"></script>`
            : ""
        }
        </head>
        <body style="width: 95%; height: 95%; display: flex; align-items: center; justify-content: center; font-family: Montserrat, sans-serif;">${htmlText}</body>
        </html>
      `}
                  title="output"
                  sandbox="allow-scripts"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                />
              </div>
            </article>
          </div>
        </div>
        <div>
          {!back ? (
            <div>
              <p>Selected tags :</p>
              <label
                htmlFor="tags"
                className="my-1 relative cursor-text mt-2 [&:has(:focus-visible)]:ring-4 focus-visible:ring-sky-400 focus-visible:border-sky-400 bg-dark-500 rounded-lg px-2 py-2 flex flex-wrap gap-1"
              >
                {selectedTags.map((tag, index) => (
                  <button
                    className="bg-dark-600 flex items-center gap-1.5 cursor-pointer hover:bg-dark-700 text-gray-200 rounded px-2 pl-2.5 py-0.5"
                    key={index}
                  >
                    {tag}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="h-4 w-4 text-gray-300"
                      onClick={() => toggleTag(tag)}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                      />
                    </svg>
                  </button>
                ))}
                <form onSubmit={addTag}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add a tag..."
                    className="bg-transparent focus:ring-0 border-none w-[190px] outline-none py-0"
                  />
                  <button type="submit"></button>
                </form>
              </label>
              <p className="text-sm text-gray-400">
                Selecting the right tags is important for your post to be found
                by the right people.
              </p>
              <div className="flex custom-scrollbar items-start flex-wrap gap-1 mt-3 max-lg:h-[200px] h-[350px] overflow-y-auto">
                {tags.map((tag, index) => (
                  <button
                    className={`bg-dark-600 cursor-pointer hover:bg-dark-500 text-gray-200 rounded px-2 py-1 ${
                      selectedTags.includes(tag) ? "hidden" : ""
                    }`}
                    key={index}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="flex justify-end mt-5 buttons">
                <button
                  className={`px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700 text-offwhite ${
                    !canProceed ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!canProceed}
                  onClick={() => setBack(true)}
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M15.17 6a30.23 30.23 0 0 1 5.62 5.406c.14.174.21.384.21.594m-5.83 6a30.232 30.232 0 0 0 5.62-5.406A.949.949 0 0 0 21 12m0 0H3" />
                  </svg>
                </button>
              </div>
              <p className="flex justify-end mt-1 text-sm text-red-400">
                {message}
              </p>
            </div>
          ) : (
            <div>
              <label className="text-lg mb-2 block leading-5 text-gray-100 font-semibold">
                Are you the original creator of this post?
              </label>
              <p className="text-sm text-yellow-400 max-w-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-4 h-4 mr-1.5 inline"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
                  />
                </svg>
                If you repost without crediting the source, your account may be
                suspended.
              </p>
              <fieldset className="mt-4 border-none">
                <legend className="sr-only">Post source</legend>
                <div className="mb-6 space-y-4">
                  <div className="flex items-start">
                    <input
                      id="original"
                      name="notification-method"
                      type="radio"
                      value="original"
                      checked={option === "original"}
                      onChange={handleOptionChange}
                      className="w-4 h-4 text-indigo-500 border-dark-800 focus:ring-indigo-400"
                    />
                    <label
                      htmlFor="original"
                      className="block ml-3 text-base font-medium text-gray-300"
                    >
                      Yes, I am the original creator
                    </label>
                  </div>
                  <div>
                    <div className="flex items-start">
                      <input
                        id="reposted"
                        name="notification-method"
                        type="radio"
                        value="reposted"
                        checked={option === "reposted"}
                        onChange={handleOptionChange}
                        className="w-4 h-4 text-indigo-500 border-dark-800 focus:ring-indigo-400"
                      />
                      <label
                        htmlFor="reposted"
                        className="block ml-3 text-base font-medium text-gray-300"
                      >
                        No, I found this post somewhere else and I want to share
                        it with the community here
                      </label>
                    </div>
                    {option === "reposted" && (
                      <div className="mt-2 mb-4 pl-[26px]">
                        <div className="w-full font-sans mb-3">
                          <label
                            htmlFor="source"
                            className="block text-sm font-semibold text-gray-300"
                          >
                            Link to the source{" "}
                            <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="linkSource"
                            id="linkSource"
                            value={linkSource}
                            onChange={handleSourceLinkChange}
                            required
                            placeholder="https://example.com"
                            className="block w-full mt-1 font-[inherit] border-none rounded-md shadow-sm bg-dark-500 focus:ring-sky-500 focus:border-sky-500 sm:text-sm md:text-base text-offwhite placeholder:text-gray-400"
                          />
                        </div>
                        <div className="w-full font-sans text-sm">
                          <label
                            htmlFor="source"
                            className="block text-sm font-semibold text-gray-300"
                          >
                            Name of the creator or the source{" "}
                          </label>
                          <input
                            type="text"
                            name="source"
                            id="source"
                            value={nameSource}
                            onChange={handleSourceNameChange}
                            placeholder="John Doe"
                            className="block w-full mt-1 font-[inherit] border-none rounded-md shadow-sm bg-dark-500 focus:ring-sky-500 focus:border-sky-500 sm:text-sm md:text-base text-offwhite placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className>
                    <div className="flex items-start">
                      <input
                        id="modified"
                        name="notification-method"
                        type="radio"
                        value="modified"
                        checked={option === "modified"}
                        onChange={handleOptionChange}
                        className="w-4 h-4 text-indigo-500 border-dark-800 focus:ring-indigo-400"
                      />
                      <label
                        htmlFor="modified"
                        className="block ml-3 text-base font-medium text-gray-300"
                      >
                        No, I found this post somewhere else and I made
                        significant modifications to it
                      </label>
                    </div>
                    {option === "modified" && (
                      <div className="mt-2 mb-4 pl-[26px]">
                        <div className="w-full font-sans mb-3">
                          <label
                            htmlFor="source"
                            className="block text-sm font-semibold text-gray-300"
                          >
                            Link to the source{" "}
                            <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="linkSource"
                            id="linkSource"
                            value={linkSource}
                            onChange={handleSourceLinkChange}
                            required
                            placeholder="https://example.com"
                            className="block w-full mt-1 font-[inherit] border-none rounded-md shadow-sm bg-dark-500 focus:ring-sky-500 focus:border-sky-500 sm:text-sm md:text-base text-offwhite placeholder:text-gray-400"
                          />
                        </div>
                        <div className="w-full font-sans text-sm">
                          <label
                            htmlFor="source"
                            className="block text-sm font-semibold text-gray-300"
                          >
                            Name of the creator or the source{" "}
                          </label>
                          <input
                            type="text"
                            name="source"
                            id="source"
                            value={nameSource}
                            onChange={handleSourceNameChange}
                            placeholder="John Doe"
                            className="block w-full mt-1 font-[inherit] border-none rounded-md shadow-sm bg-dark-500 focus:ring-sky-500 focus:border-sky-500 sm:text-sm md:text-base text-offwhite placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </fieldset>
              <div className="flex justify-end mt-5 buttons">
                <button
                  className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-transparent hover:bg-dark-600 max-md:bg-dark-600 text-offwhite cursor-pointer mr-2"
                  onClick={() => setBack(false)}
                >
                  Back
                </button>
                <button
                  className={`px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700 text-offwhite ${
                    (option === "reposted" || option === "modified") &&
                    !isLinkValid
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() =>
                    clickSubmitReview(
                      selectedTags,
                      option,
                      linkSource,
                      nameSource
                    )
                  }
                  disabled={
                    (option === "reposted" || option === "modified") &&
                    !isLinkValid &&
                    linkSource === ""
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path
                      d="M5.83087 18.1693L3.00261 20.9979M7.95219 20.2906L7.24508 20.9977M3.70955 16.0479L3.00244 16.755M11.3588 6.14844L6.98115 6.14844C6.65417 6.14844 6.43834 6.20823 6.15796 6.37645L4.34408 7.46478C3.91094 7.72466 3.69438 7.8546 3.63232 8.01389C3.5783 8.15256 3.58885 8.30808 3.66112 8.43818C3.74412 8.58763 3.97626 8.68711 4.44054 8.88609L7.91447 10.3749M11.3588 6.14844C10.7176 6.79012 10.1116 7.56433 9.18973 8.74215L8.32567 9.84608C8.16879 10.0465 8.0327 10.2204 7.91447 10.3749M11.3588 6.14844C11.6532 5.85384 11.955 5.58717 12.2982 5.32221C13.0456 4.7452 14.6119 3.90719 15.5067 3.6056C16.8125 3.16545 17.3933 3.12131 18.5548 3.03303C19.5534 2.95712 20.3717 3.01164 20.6801 3.32001C20.9885 3.62839 21.043 4.44669 20.9671 5.44536C20.8788 6.60685 20.8347 7.18759 20.3945 8.49341C20.0929 9.38818 19.2549 10.9545 18.6779 11.7019C18.413 12.0451 18.1463 12.3469 17.8517 12.6413M7.91447 10.3749C7.58676 10.8033 7.39618 11.0832 7.27999 11.3693C6.93821 12.2106 6.99595 13.1615 7.43702 13.9554C7.64105 14.3226 7.98047 14.662 8.6593 15.3408C9.33813 16.0197 9.67754 16.3591 10.0448 16.5631C10.8386 17.0042 11.7895 17.0619 12.6309 16.7201C12.9169 16.6039 13.1968 16.4134 13.6252 16.0857M13.6252 16.0857L15.114 19.5596C15.313 20.0239 15.4125 20.256 15.5619 20.339C15.692 20.4113 15.8476 20.4218 15.9862 20.3678C16.1455 20.3057 16.2755 20.0892 16.5353 19.656L17.6237 17.8422C17.7919 17.5618 17.8517 17.346 17.8517 17.019L17.8517 12.6413M13.6252 16.0857C13.7798 15.9674 13.9536 15.8313 14.154 15.6745L15.258 14.8104C16.4358 13.8885 17.21 13.2825 17.8517 12.6413"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Submit for review
                </button>
              </div>
              <div>
                {option === "reposted" || option === "modified" ? (
                  <>
                    {linkSource === "" && (
                      <p className="text-right mt-1 text-sm text-red-400">
                        You need to add a link to the source website
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    {!isLinkValid && (
                      <p className="text-right mt-1 text-sm text-red-400">
                        The source website must be a valid URL
                      </p>
                    )}
                  </>
                )}
              </div>
              <div />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectTagModal;
