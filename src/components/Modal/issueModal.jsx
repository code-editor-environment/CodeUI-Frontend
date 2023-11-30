function IssueModal({ reason }) {
  return (
    <div className="customModal--sign-in options-modal">
      <div className="issues-modal">
        <span className="heading">Issues</span>
        <p className="description">
          There are some issues with your code. You can still submit the post
          but the chances of it being approved will be lower.
        </p>
        <hr />
        <div className="issues">
          <div className="issue">
            {reason.length > 0 &&
              reason.map((item, index) => (
                <span
                  className="issue__heading"
                  key={index}
                  style={{ display: "-webkit-box" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
                    />
                  </svg>{" "}
                  {item}
                </span>
              ))}

            {/* <p className="issue__description">
              Importing any external fonts or files is not allowed. <br />{" "}
              Examples: <code>@import</code>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueModal;
