import React from "react";
import { Link } from "react-router-dom";
function Inputs() {
  return (
    <section className="posts-preview" style={{ width: "100%" }}>
      <div className="posts-header">
        <a href="/inputs">
          <h3 className="preview-heading">Inputs</h3>
        </a>
      </div>
      <div className="content">
        <article className="card card--input dark-background false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .pliyaxu123-warm-eel-62 .form-control {\n                        position: relative;\n                        margin: 20px 0 40px;\n                        width: 190px;\n                      }\n\n                      .pliyaxu123-warm-eel-62 .form-control input {\n                        background-color: transparent;\n                        border: 0;\n                        border-bottom: 2px #fff solid;\n                        display: block;\n                        width: 100%;\n                        padding: 15px 0;\n                        font-size: 18px;\n                        color: #fff;\n                      }\n\n                      .pliyaxu123-warm-eel-62 .form-control input:focus,\n                      .pliyaxu123-warm-eel-62 .form-control input:valid {\n                        outline: 0;\n                        border-bottom-color: lightblue;\n                      }\n\n                      .pliyaxu123-warm-eel-62 .form-control label {\n                        position: absolute;\n                        top: 15px;\n                        left: 0;\n                        pointer-events: none;\n                      }\n\n                      .pliyaxu123-warm-eel-62 .form-control label span {\n                        display: inline-block;\n                        font-size: 18px;\n                        min-width: 5px;\n                        color: #fff;\n                        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n                      }\n\n                      .pliyaxu123-warm-eel-62\n                        .form-control\n                        input:focus\n                        + label\n                        span,\n                      .pliyaxu123-warm-eel-62\n                        .form-control\n                        input:valid\n                        + label\n                        span {\n                        color: lightblue;\n                        transform: translateY(-30px);\n                      }\n                    ",
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pliyaxu123-warm-eel-62"
              >
                <div className="form-control">
                  <input type="value" required />
                  <label>
                    <span style={{ transitionDelay: "0ms" }}>U</span>
                    <span style={{ transitionDelay: "50ms" }}>s</span>
                    <span style={{ transitionDelay: "100ms" }}>e</span>
                    <span style={{ transitionDelay: "150ms" }}>r</span>
                    <span style={{ transitionDelay: "200ms" }}>n</span>
                    <span style={{ transitionDelay: "250ms" }}>a</span>
                    <span style={{ transitionDelay: "300ms" }}>m</span>
                    <span style={{ transitionDelay: "350ms" }}>e</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--input false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .palexruix-jolly-emu-80 .input {\n                        max-width: 190px;\n                        height: 44px;\n                        background-color: #05060f0a;\n                        border-radius: 0.5rem;\n                        padding: 0 1rem;\n                        border: 2px solid transparent;\n                        font-size: 1rem;\n                        transition: border-color 0.3s\n                            cubic-bezier(0.25, 0.01, 0.25, 1) 0s,\n                          color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,\n                          background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;\n                      }\n\n                      .palexruix-jolly-emu-80 .label {\n                        display: block;\n                        margin-bottom: 0.3rem;\n                        font-size: 0.9rem;\n                        font-weight: bold;\n                        color: #05060f99;\n                        transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1)\n                          0s;\n                      }\n\n                      .palexruix-jolly-emu-80 .input:hover,\n                      .palexruix-jolly-emu-80 .input:focus,\n                      .palexruix-jolly-emu-80 .input-group:hover .input {\n                        outline: none;\n                        border-color: #05060f;\n                      }\n\n                      .palexruix-jolly-emu-80 .input-group:hover .label,\n                      .palexruix-jolly-emu-80 .input:focus {\n                        color: #05060fc2;\n                      }\n                    ",
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container palexruix-jolly-emu-80"
              >
                <div className="input-group">
                  <label className="label">Email address</label>
                  <input
                    autoComplete="off"
                    name="Email"
                    id="Email"
                    className="input"
                    type="email"
                  />
                  <div />
                </div>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--input false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .pTimTrayler-orange-bat-25 .searchbar {\n                        font-size: 14px;\n                        font-family: arial, sans-serif;\n                        color: #202124;\n                        display: flex;\n                        z-index: 3;\n                        height: 44px;\n                        background: white;\n                        border: 1px solid #dfe1e5;\n                        box-shadow: none;\n                        border-radius: 24px;\n                        margin: 0 auto;\n                        width: auto;\n                        max-width: 224px;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar:hover {\n                        box-shadow: 0 1px 6px rgb(32 33 36 / 28%);\n                        border-color: rgba(223, 225, 229, 0);\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar-wrapper {\n                        flex: 1;\n                        display: flex;\n                        padding: 5px 8px 0 14px;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar-left {\n                        font-size: 14px;\n                        font-family: arial, sans-serif;\n                        color: #202124;\n                        display: flex;\n                        align-items: center;\n                        padding-right: 13px;\n                        margin-top: -5px;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .search-icon-wrapper {\n                        margin: auto;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .search-icon {\n                        margin-top: 3px;\n                        color: #9aa0a6;\n                        height: 20px;\n                        line-height: 20px;\n                        width: 20px;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar-icon {\n                        display: inline-block;\n                        fill: currentColor;\n                        height: 24px;\n                        line-height: 24px;\n                        position: relative;\n                        width: 24px;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar-center {\n                        display: flex;\n                        flex: 1;\n                        flex-wrap: wrap;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar-input-spacer {\n                        color: transparent;\n                        flex: 100%;\n                        white-space: pre;\n                        height: 34px;\n                        font-size: 16px;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar-input {\n                        background-color: transparent;\n                        border: none;\n                        margin: 0;\n                        padding: 0;\n                        color: rgba(0, 0, 0, 0.87);\n                        word-wrap: break-word;\n                        outline: none;\n                        display: flex;\n                        flex: 100%;\n                        margin-top: -37px;\n                        height: 34px;\n                        font-size: 16px;\n                        max-width: 100%;\n                        width: 100%;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar-right {\n                        display: flex;\n                        flex: 0 0 auto;\n                        margin-top: -5px;\n                        align-items: stretch;\n                        flex-direction: row;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .searchbar-clear-icon {\n                        margin-right: 12px;\n                      }\n\n                      .pTimTrayler-orange-bat-25 .voice-search {\n                        flex: 1 0 auto;\n                        display: flex;\n                        cursor: pointer;\n                        align-items: center;\n                        border: 0;\n                        background: transparent;\n                        outline: none;\n                        padding: 0 8px;\n                        width: 2.8em;\n                      }\n                    ",
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pTimTrayler-orange-bat-25"
              >
                <div className="searchbar">
                  <div className="searchbar-wrapper">
                    <div className="searchbar-left">
                      <div className="search-icon-wrapper">
                        <span className="search-icon searchbar-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="searchbar-center">
                      <div className="searchbar-input-spacer" />
                      <input
                        type="text"
                        className="searchbar-input"
                        maxLength={2048}
                        name="q"
                        autoCapitalize="off"
                        autoComplete="off"
                        title="Search"
                        placeholder="Search Google"
                      />
                    </div>
                    <div className="searchbar-right">
                      <svg
                        className="voice-search"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#4285f4"
                          d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                        />
                        <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
                        <path
                          fill="#fbbc05"
                          d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                        />
                        <path
                          fill="#ea4335"
                          d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--input false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .palexruix-slippery-frog-10 .group {\n                        display: flex;\n                        line-height: 28px;\n                        align-items: center;\n                        position: relative;\n                        max-width: 190px;\n                      }\n\n                      .palexruix-slippery-frog-10 .input {\n                        width: 100%;\n                        height: 40px;\n                        line-height: 28px;\n                        padding: 0 1rem;\n                        padding-left: 2.5rem;\n                        border: 2px solid transparent;\n                        border-radius: 8px;\n                        outline: none;\n                        background-color: #f3f3f4;\n                        color: #0d0c22;\n                        transition: 0.3s ease;\n                      }\n\n                      .palexruix-slippery-frog-10 .input::placeholder {\n                        color: #9e9ea7;\n                      }\n\n                      .palexruix-slippery-frog-10 .input:focus,\n                      .palexruix-slippery-frog-10 input:hover {\n                        outline: none;\n                        border-color: rgba(234, 76, 137, 0.4);\n                        background-color: #fff;\n                        box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);\n                      }\n\n                      .palexruix-slippery-frog-10 .icon {\n                        position: absolute;\n                        left: 1rem;\n                        fill: #9e9ea7;\n                        width: 1rem;\n                        height: 1rem;\n                      }\n                    ",
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container palexruix-slippery-frog-10"
              >
                <div className="group">
                  <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                    </g>
                  </svg>
                  <input placeholder="Search" type="search" className="input" />
                </div>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--input dark-background false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .pliyaxu123-warm-eel-62 .form-control {\n                        position: relative;\n                        margin: 20px 0 40px;\n                        width: 190px;\n                      }\n\n                      .pliyaxu123-warm-eel-62 .form-control input {\n                        background-color: transparent;\n                        border: 0;\n                        border-bottom: 2px #fff solid;\n                        display: block;\n                        width: 100%;\n                        padding: 15px 0;\n                        font-size: 18px;\n                        color: #fff;\n                      }\n\n                      .pliyaxu123-warm-eel-62 .form-control input:focus,\n                      .pliyaxu123-warm-eel-62 .form-control input:valid {\n                        outline: 0;\n                        border-bottom-color: lightblue;\n                      }\n\n                      .pliyaxu123-warm-eel-62 .form-control label {\n                        position: absolute;\n                        top: 15px;\n                        left: 0;\n                        pointer-events: none;\n                      }\n\n                      .pliyaxu123-warm-eel-62 .form-control label span {\n                        display: inline-block;\n                        font-size: 18px;\n                        min-width: 5px;\n                        color: #fff;\n                        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n                      }\n\n                      .pliyaxu123-warm-eel-62\n                        .form-control\n                        input:focus\n                        + label\n                        span,\n                      .pliyaxu123-warm-eel-62\n                        .form-control\n                        input:valid\n                        + label\n                        span {\n                        color: lightblue;\n                        transform: translateY(-30px);\n                      }\n                    ",
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pliyaxu123-warm-eel-62"
              >
                <div className="form-control">
                  <input type="value" required />
                  <label>
                    <span style={{ transitionDelay: "0ms" }}>U</span>
                    <span style={{ transitionDelay: "50ms" }}>s</span>
                    <span style={{ transitionDelay: "100ms" }}>e</span>
                    <span style={{ transitionDelay: "150ms" }}>r</span>
                    <span style={{ transitionDelay: "200ms" }}>n</span>
                    <span style={{ transitionDelay: "250ms" }}>a</span>
                    <span style={{ transitionDelay: "300ms" }}>m</span>
                    <span style={{ transitionDelay: "350ms" }}>e</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--input false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .palexruix-jolly-emu-80 .input {\n                        max-width: 190px;\n                        height: 44px;\n                        background-color: #05060f0a;\n                        border-radius: 0.5rem;\n                        padding: 0 1rem;\n                        border: 2px solid transparent;\n                        font-size: 1rem;\n                        transition: border-color 0.3s\n                            cubic-bezier(0.25, 0.01, 0.25, 1) 0s,\n                          color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,\n                          background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;\n                      }\n\n                      .palexruix-jolly-emu-80 .label {\n                        display: block;\n                        margin-bottom: 0.3rem;\n                        font-size: 0.9rem;\n                        font-weight: bold;\n                        color: #05060f99;\n                        transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1)\n                          0s;\n                      }\n\n                      .palexruix-jolly-emu-80 .input:hover,\n                      .palexruix-jolly-emu-80 .input:focus,\n                      .palexruix-jolly-emu-80 .input-group:hover .input {\n                        outline: none;\n                        border-color: #05060f;\n                      }\n\n                      .palexruix-jolly-emu-80 .input-group:hover .label,\n                      .palexruix-jolly-emu-80 .input:focus {\n                        color: #05060fc2;\n                      }\n                    ",
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container palexruix-jolly-emu-80"
              >
                <div className="input-group">
                  <label className="label">Email address</label>
                  <input
                    autoComplete="off"
                    name="Email"
                    id="Email"
                    className="input"
                    type="email"
                  />
                  <div />
                </div>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
      </div>
      <Link
        className="button button--secondary see-more-button"
        to="/elements/input"
      >
        See all inputs
      </Link>
    </section>
  );
}

export default Inputs;
