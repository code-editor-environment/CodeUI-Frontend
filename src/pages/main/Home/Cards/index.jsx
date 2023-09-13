import React from "react";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <section className="posts-preview" style={{ width: "100%" }}>
      <div className="posts-header">
        <a href="/cards">
          <h3 className="preview-heading">Cards</h3>
        </a>
      </div>
      <div className="content">
        <article className="card card--card false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .padamgiebl-blue-mole-92 .card {\n                        position: relative;\n                        width: 190px;\n                        height: 254px;\n                        background: lightgrey;\n                        box-shadow: #d11bff42 0 15px 40px -5px;\n                        z-index: 1;\n                        border-radius: 21px;\n                        overflow: hidden;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card__content {\n                        background: linear-gradient(\n                          rgba(255, 255, 255, 0.473),\n                          rgba(150, 150, 150, 0.25)\n                        );\n                        z-index: 1;\n                        backdrop-filter: blur(20px);\n                        -webkit-backdrop-filter: blur(20px);\n                        position: absolute;\n                        left: 0;\n                        top: 0;\n                        width: 100%;\n                        height: 100%;\n                        border-radius: 21px;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob {\n                        position: absolute;\n                        z-index: -1;\n                        border-radius: 5em;\n                        width: 200px;\n                        height: 200px;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob:nth-child(2) {\n                        left: -50px;\n                        top: -90px;\n                        background: #ff930f;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob:nth-child(3) {\n                        left: 110px;\n                        top: -20px;\n                        z-index: -1;\n                        background: #bf0fff;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob:nth-child(4) {\n                        left: -40px;\n                        top: 100px;\n                        background: #ff1b6b;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob:nth-child(5) {\n                        left: 100px;\n                        top: 180px;\n                        background: #0061ff;\n                      }",
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container padamgiebl-blue-mole-92"
              >
                <div className="card">
                  <div className="card__content" />
                  <div className="blob" />
                  <div className="blob" />
                  <div className="blob" />
                  <div className="blob" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--card false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .palexruix-moody-goose-93 .card {\n                        width: 190px;\n                        height: 254px;\n                        padding: 0.8em;\n                        background: #f5f5f5;\n                        position: relative;\n                        overflow: visible;\n                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),\n                          0 1px 2px rgba(0, 0, 0, 0.24);\n                      }\n\n                      .palexruix-moody-goose-93 .card-img {\n                        background-color: #ffcaa6;\n                        height: 40%;\n                        width: 100%;\n                        border-radius: 0.5rem;\n                        transition: 0.3s ease;\n                      }\n\n                      .palexruix-moody-goose-93 .card-info {\n                        padding-top: 10%;\n                      }\n\n                      .palexruix-moody-goose-93 svg {\n                        width: 20px;\n                        height: 20px;\n                      }\n\n                      .palexruix-moody-goose-93 .card-footer {\n                        width: 100%;\n                        display: flex;\n                        justify-content: space-between;\n                        align-items: center;\n                        padding-top: 10px;\n                        border-top: 1px solid #ddd;\n                      }\n\n                      /*Text*/\n                      .palexruix-moody-goose-93 .text-title {\n                        font-weight: 900;\n                        font-size: 1.2em;\n                        line-height: 1.5;\n                      }\n\n                      .palexruix-moody-goose-93 .text-body {\n                        font-size: 0.9em;\n                        padding-bottom: 10px;\n                      }\n\n                      /*Button*/\n                      .palexruix-moody-goose-93 .card-button {\n                        border: 1px solid #252525;\n                        display: flex;\n                        padding: 0.3em;\n                        cursor: pointer;\n                        border-radius: 50px;\n                        transition: 0.3s ease-in-out;\n                      }\n\n                      /*Hover*/\n                      .palexruix-moody-goose-93 .card-img:hover {\n                        transform: translateY(-25%);\n                        box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,\n                          rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;\n                      }\n\n                      .palexruix-moody-goose-93 .card-button:hover {\n                        border: 1px solid #ffcaa6;\n                        background-color: #ffcaa6;\n                      }",
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container palexruix-moody-goose-93"
              >
                <div className="card">
                  <div className="card-img" />
                  <div className="card-info">
                    <p className="text-title">Product title</p>
                    <p className="text-body">Product description and details</p>
                  </div>
                  <div className="card-footer">
                    <span className="text-title">$499.49</span>
                    <div className="card-button">
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z" />
                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z" />
                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--card false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .palexmaracinaru-tender-fly-40 .card {\n                        width: 190px;\n                        height: 254px;\n                        background: rgb(183, 226, 25);\n                        font-family: inherit;\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .quote {\n                        color: rgb(223, 248, 134);\n                        padding-left: 30px;\n                        position: relative;\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .quote:hover {\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .card-name {\n                        text-transform: uppercase;\n                        font-weight: 700;\n                        color: rgb(158, 196, 21);\n                        padding: 35px;\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .body-text {\n                        font-size: 20px;\n                        font-weight: 900;\n                        padding: 60px 40px 0;\n                        color: #465512;\n                        position: absolute;\n                        top: 2vw;\n                        left: 1vw;\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .author {\n                        margin-top: 5px;\n                        opacity: 0;\n                        transition: 0.5s;\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .card:hover .author {\n                        opacity: 1;\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .pic {\n                        width: 50px;\n                        height: 50px;\n                        background-color: rgb(158, 196, 21);\n                        border-radius: 50%;\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .author-container {\n                        display: flex;\n                        align-items: center;\n                      }\n\n                      .palexmaracinaru-tender-fly-40 .author {\n                        font-weight: 700;\n                        color: rgb(158, 196, 21);\n                        padding-left: 30px;\n                      }",
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container palexmaracinaru-tender-fly-40"
              >
                <div className="card">
                  <div className="card-name">Quote of the month</div>
                  <div className="quote">
                    <svg
                      width={80}
                      height={80}
                      viewBox="0 0 330 307"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="body-text">Fortune favors the bold.</div>
                  <div className="author">
                    - by Virgil <br />
                    <span>Latin poet</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={18}
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--card false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .padamgiebl-strong-zebra-87 .card {\n                        width: 190px;\n                        height: 254px;\n                        border-radius: 30px;\n                        background: #e0e0e0;\n                        box-shadow: 15px 15px 30px #bebebe,\n                          -15px -15px 30px #ffffff;\n                      }",
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container padamgiebl-strong-zebra-87"
              >
                <div className="card" />
              </div>
            </Link>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--card false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .padamgiebl-blue-mole-92 .card {\n                        position: relative;\n                        width: 190px;\n                        height: 254px;\n                        background: lightgrey;\n                        box-shadow: #d11bff42 0 15px 40px -5px;\n                        z-index: 1;\n                        border-radius: 21px;\n                        overflow: hidden;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card__content {\n                        background: linear-gradient(\n                          rgba(255, 255, 255, 0.473),\n                          rgba(150, 150, 150, 0.25)\n                        );\n                        z-index: 1;\n                        backdrop-filter: blur(20px);\n                        -webkit-backdrop-filter: blur(20px);\n                        position: absolute;\n                        left: 0;\n                        top: 0;\n                        width: 100%;\n                        height: 100%;\n                        border-radius: 21px;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob {\n                        position: absolute;\n                        z-index: -1;\n                        border-radius: 5em;\n                        width: 200px;\n                        height: 200px;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob:nth-child(2) {\n                        left: -50px;\n                        top: -90px;\n                        background: #ff930f;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob:nth-child(3) {\n                        left: 110px;\n                        top: -20px;\n                        z-index: -1;\n                        background: #bf0fff;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob:nth-child(4) {\n                        left: -40px;\n                        top: 100px;\n                        background: #ff1b6b;\n                      }\n\n                      .padamgiebl-blue-mole-92 .card .blob:nth-child(5) {\n                        left: 100px;\n                        top: 180px;\n                        background: #0061ff;\n                      }",
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container padamgiebl-blue-mole-92"
              >
                <div className="card">
                  <div className="card__content" />
                  <div className="blob" />
                  <div className="blob" />
                  <div className="blob" />
                  <div className="blob" />
                </div>
              </div>
            </Link>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--card false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .palexruix-moody-goose-93 .card {\n                        width: 190px;\n                        height: 254px;\n                        padding: 0.8em;\n                        background: #f5f5f5;\n                        position: relative;\n                        overflow: visible;\n                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),\n                          0 1px 2px rgba(0, 0, 0, 0.24);\n                      }\n\n                      .palexruix-moody-goose-93 .card-img {\n                        background-color: #ffcaa6;\n                        height: 40%;\n                        width: 100%;\n                        border-radius: 0.5rem;\n                        transition: 0.3s ease;\n                      }\n\n                      .palexruix-moody-goose-93 .card-info {\n                        padding-top: 10%;\n                      }\n\n                      .palexruix-moody-goose-93 svg {\n                        width: 20px;\n                        height: 20px;\n                      }\n\n                      .palexruix-moody-goose-93 .card-footer {\n                        width: 100%;\n                        display: flex;\n                        justify-content: space-between;\n                        align-items: center;\n                        padding-top: 10px;\n                        border-top: 1px solid #ddd;\n                      }\n\n                      /*Text*/\n                      .palexruix-moody-goose-93 .text-title {\n                        font-weight: 900;\n                        font-size: 1.2em;\n                        line-height: 1.5;\n                      }\n\n                      .palexruix-moody-goose-93 .text-body {\n                        font-size: 0.9em;\n                        padding-bottom: 10px;\n                      }\n\n                      /*Button*/\n                      .palexruix-moody-goose-93 .card-button {\n                        border: 1px solid #252525;\n                        display: flex;\n                        padding: 0.3em;\n                        cursor: pointer;\n                        border-radius: 50px;\n                        transition: 0.3s ease-in-out;\n                      }\n\n                      /*Hover*/\n                      .palexruix-moody-goose-93 .card-img:hover {\n                        transform: translateY(-25%);\n                        box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,\n                          rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;\n                      }\n\n                      .palexruix-moody-goose-93 .card-button:hover {\n                        border: 1px solid #ffcaa6;\n                        background-color: #ffcaa6;\n                      }",
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container palexruix-moody-goose-93"
              >
                <div className="card">
                  <div className="card-img" />
                  <div className="card-info">
                    <p className="text-title">Product title</p>
                    <p className="text-body">Product description and details</p>
                  </div>
                  <div className="card-footer">
                    <span className="text-title">$499.49</span>
                    <div className="card-button">
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z" />
                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z" />
                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
        to="/elements/card"
      >
        See all cards
      </Link>
    </section>
  );
}

export default Cards;
