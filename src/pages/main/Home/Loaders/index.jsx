import React from "react";
import { Link } from "react-router-dom";
function Loaders() {
  return (
    <section className="posts-preview" style={{ width: "100%" }}>
      <div className="posts-header">
        <a href="/loaders">
          <h3 className="preview-heading">Loaders</h3>
        </a>
      </div>
      <div className="content">
        <article className="card card--spinner false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .palexruix-white-cat-50 .loader {\n                        width: 48px;\n                        height: 48px;\n                        margin: auto;\n                        position: relative;\n                      }\n\n                      .palexruix-white-cat-50 .loader:before {\n                        content: "";\n                        width: 48px;\n                        height: 5px;\n                        background: #f0808050;\n                        position: absolute;\n                        top: 60px;\n                        left: 0;\n                        border-radius: 50%;\n                        animation: shadow324 0.5s linear infinite;\n                      }\n\n                      .palexruix-white-cat-50 .loader:after {\n                        content: "";\n                        width: 100%;\n                        height: 100%;\n                        background: #f08080;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        border-radius: 4px;\n                        animation: jump7456 0.5s linear infinite;\n                      }\n\n                      @keyframes jump7456 {\n                        15% {\n                          border-bottom-right-radius: 3px;\n                        }\n\n                        25% {\n                          transform: translateY(9px) rotate(22.5deg);\n                        }\n\n                        50% {\n                          transform: translateY(18px) scale(1, 0.9)\n                            rotate(45deg);\n                          border-bottom-right-radius: 40px;\n                        }\n\n                        75% {\n                          transform: translateY(9px) rotate(67.5deg);\n                        }\n\n                        100% {\n                          transform: translateY(0) rotate(90deg);\n                        }\n                      }\n\n                      @keyframes shadow324 {\n                        0%,\n                        100% {\n                          transform: scale(1, 1);\n                        }\n\n                        50% {\n                          transform: scale(1.2, 1);\n                        }\n                      }',
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container palexruix-white-cat-50"
              >
                <div className="loader" />
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
        <article className="card card--spinner false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .pAqFox-young-dragon-29 .spinner {\n                        width: 44px;\n                        height: 44px;\n                        animation: spinner-y0fdc1 2s infinite ease;\n                        transform-style: preserve-3d;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner > div {\n                        background-color: rgba(0, 77, 255, 0.2);\n                        height: 100%;\n                        position: absolute;\n                        width: 100%;\n                        border: 2px solid #004dff;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(1) {\n                        transform: translateZ(-22px) rotateY(180deg);\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(2) {\n                        transform: rotateY(-270deg) translateX(50%);\n                        transform-origin: top right;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(3) {\n                        transform: rotateY(270deg) translateX(-50%);\n                        transform-origin: center left;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(4) {\n                        transform: rotateX(90deg) translateY(-50%);\n                        transform-origin: top center;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(5) {\n                        transform: rotateX(-90deg) translateY(50%);\n                        transform-origin: bottom center;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(6) {\n                        transform: translateZ(22px);\n                      }\n\n                      @keyframes spinner-y0fdc1 {\n                        0% {\n                          transform: rotate(45deg) rotateX(-25deg)\n                            rotateY(25deg);\n                        }\n\n                        50% {\n                          transform: rotate(45deg) rotateX(-385deg)\n                            rotateY(25deg);\n                        }\n\n                        100% {\n                          transform: rotate(45deg) rotateX(-385deg)\n                            rotateY(385deg);\n                        }\n                      }",
              }}
            />
            <a className="clickable-wrapper" href="/AqFox/young-dragon-29">
              <div
                id="container"
                className="card__button-container pAqFox-young-dragon-29"
              >
                <div className="spinner">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </a>
          </div>
          <div className="card__footer">
            <a href="/profile">
              <span className="card__nickname text-color">Creator</span>
            </a>
            <div className="card__views">1000K views</div>
          </div>
        </article>
        <article className="card card--spinner false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .pmobinkakei-proud-ladybug-46 .loader {\n                        --path: #2f3545;\n                        --dot: #5628ee;\n                        --duration: 3s;\n                        width: 44px;\n                        height: 44px;\n                        position: relative;\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader:before {\n                        content: "";\n                        width: 6px;\n                        height: 6px;\n                        border-radius: 50%;\n                        position: absolute;\n                        display: block;\n                        background: var(--dot);\n                        top: 37px;\n                        left: 19px;\n                        transform: translate(-18px, -18px);\n                        animation: dotRect var(--duration)\n                          cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader svg {\n                        display: block;\n                        width: 100%;\n                        height: 100%;\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader svg rect,\n                      .pmobinkakei-proud-ladybug-46 .loader svg polygon,\n                      .pmobinkakei-proud-ladybug-46 .loader svg circle {\n                        fill: none;\n                        stroke: var(--path);\n                        stroke-width: 10px;\n                        stroke-linejoin: round;\n                        stroke-linecap: round;\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader svg polygon {\n                        stroke-dasharray: 145 76 145 76;\n                        stroke-dashoffset: 0;\n                        animation: pathTriangle var(--duration)\n                          cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader svg rect {\n                        stroke-dasharray: 192 64 192 64;\n                        stroke-dashoffset: 0;\n                        animation: pathRect 3s\n                          cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader svg circle {\n                        stroke-dasharray: 150 50 150 50;\n                        stroke-dashoffset: 75;\n                        animation: pathCircle var(--duration)\n                          cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader.triangle {\n                        width: 48px;\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader.triangle:before {\n                        left: 21px;\n                        transform: translate(-10px, -18px);\n                        animation: dotTriangle var(--duration)\n                          cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n                      }\n\n                      @keyframes pathTriangle {\n                        33% {\n                          stroke-dashoffset: 74;\n                        }\n\n                        66% {\n                          stroke-dashoffset: 147;\n                        }\n\n                        100% {\n                          stroke-dashoffset: 221;\n                        }\n                      }\n\n                      @keyframes dotTriangle {\n                        33% {\n                          transform: translate(0, 0);\n                        }\n\n                        66% {\n                          transform: translate(10px, -18px);\n                        }\n\n                        100% {\n                          transform: translate(-10px, -18px);\n                        }\n                      }\n\n                      @keyframes pathRect {\n                        25% {\n                          stroke-dashoffset: 64;\n                        }\n\n                        50% {\n                          stroke-dashoffset: 128;\n                        }\n\n                        75% {\n                          stroke-dashoffset: 192;\n                        }\n\n                        100% {\n                          stroke-dashoffset: 256;\n                        }\n                      }\n\n                      @keyframes dotRect {\n                        25% {\n                          transform: translate(0, 0);\n                        }\n\n                        50% {\n                          transform: translate(18px, -18px);\n                        }\n\n                        75% {\n                          transform: translate(0, -36px);\n                        }\n\n                        100% {\n                          transform: translate(-18px, -18px);\n                        }\n                      }\n\n                      @keyframes pathCircle {\n                        25% {\n                          stroke-dashoffset: 125;\n                        }\n\n                        50% {\n                          stroke-dashoffset: 175;\n                        }\n\n                        75% {\n                          stroke-dashoffset: 225;\n                        }\n\n                        100% {\n                          stroke-dashoffset: 275;\n                        }\n                      }\n\n                      .pmobinkakei-proud-ladybug-46 .loader {\n                        display: inline-block;\n                        margin: 0 16px;\n                      }',
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container pmobinkakei-proud-ladybug-46"
              >
                <div className="loader">
                  <svg viewBox="0 0 80 80">
                    <circle id="test" cx={40} cy={40} r={32} />
                  </svg>
                </div>
                <div className="loader triangle">
                  <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72" />
                  </svg>
                </div>
                <div className="loader">
                  <svg viewBox="0 0 80 80">
                    <rect x={8} y={8} width={64} height={64} />
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
        <article className="card card--spinner false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .psatyamchaudharydev-red-cow-21 .loader {\n                        --height-of-loader: 4px;\n                        --loader-color: #0071e2;\n                        width: 60%;\n                        height: var(--height-of-loader);\n                        border-radius: 30px;\n                        background-color: rgba(0, 0, 0, 0.2);\n                        position: relative;\n                      }\n\n                      .psatyamchaudharydev-red-cow-21 .loader::before {\n                        content: "";\n                        position: absolute;\n                        background: var(--loader-color);\n                        top: 0;\n                        left: 0;\n                        width: 0%;\n                        height: 100%;\n                        border-radius: 30px;\n                        animation: moving 1s ease-in-out infinite;\n                      }\n\n                      @keyframes moving {\n                        50% {\n                          width: 100%;\n                        }\n\n                        100% {\n                          width: 0;\n                          right: 0;\n                          left: unset;\n                        }\n                      }',
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container psatyamchaudharydev-red-cow-21"
              >
                <div className="loader" />
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
        <article className="card card--spinner false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .palexruix-white-cat-50 .loader {\n                        width: 48px;\n                        height: 48px;\n                        margin: auto;\n                        position: relative;\n                      }\n\n                      .palexruix-white-cat-50 .loader:before {\n                        content: "";\n                        width: 48px;\n                        height: 5px;\n                        background: #f0808050;\n                        position: absolute;\n                        top: 60px;\n                        left: 0;\n                        border-radius: 50%;\n                        animation: shadow324 0.5s linear infinite;\n                      }\n\n                      .palexruix-white-cat-50 .loader:after {\n                        content: "";\n                        width: 100%;\n                        height: 100%;\n                        background: #f08080;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        border-radius: 4px;\n                        animation: jump7456 0.5s linear infinite;\n                      }\n\n                      @keyframes jump7456 {\n                        15% {\n                          border-bottom-right-radius: 3px;\n                        }\n\n                        25% {\n                          transform: translateY(9px) rotate(22.5deg);\n                        }\n\n                        50% {\n                          transform: translateY(18px) scale(1, 0.9)\n                            rotate(45deg);\n                          border-bottom-right-radius: 40px;\n                        }\n\n                        75% {\n                          transform: translateY(9px) rotate(67.5deg);\n                        }\n\n                        100% {\n                          transform: translateY(0) rotate(90deg);\n                        }\n                      }\n\n                      @keyframes shadow324 {\n                        0%,\n                        100% {\n                          transform: scale(1, 1);\n                        }\n\n                        50% {\n                          transform: scale(1.2, 1);\n                        }\n                      }',
              }}
            />
            <Link className="clickable-wrapper" to="/">
              <div
                id="container"
                className="card__button-container palexruix-white-cat-50"
              >
                <div className="loader" />
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
        <article className="card card--spinner false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .pAqFox-young-dragon-29 .spinner {\n                        width: 44px;\n                        height: 44px;\n                        animation: spinner-y0fdc1 2s infinite ease;\n                        transform-style: preserve-3d;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner > div {\n                        background-color: rgba(0, 77, 255, 0.2);\n                        height: 100%;\n                        position: absolute;\n                        width: 100%;\n                        border: 2px solid #004dff;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(1) {\n                        transform: translateZ(-22px) rotateY(180deg);\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(2) {\n                        transform: rotateY(-270deg) translateX(50%);\n                        transform-origin: top right;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(3) {\n                        transform: rotateY(270deg) translateX(-50%);\n                        transform-origin: center left;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(4) {\n                        transform: rotateX(90deg) translateY(-50%);\n                        transform-origin: top center;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(5) {\n                        transform: rotateX(-90deg) translateY(50%);\n                        transform-origin: bottom center;\n                      }\n\n                      .pAqFox-young-dragon-29 .spinner div:nth-of-type(6) {\n                        transform: translateZ(22px);\n                      }\n\n                      @keyframes spinner-y0fdc1 {\n                        0% {\n                          transform: rotate(45deg) rotateX(-25deg)\n                            rotateY(25deg);\n                        }\n\n                        50% {\n                          transform: rotate(45deg) rotateX(-385deg)\n                            rotateY(25deg);\n                        }\n\n                        100% {\n                          transform: rotate(45deg) rotateX(-385deg)\n                            rotateY(385deg);\n                        }\n                      }",
              }}
            />
            <a className="clickable-wrapper" href="/AqFox/young-dragon-29">
              <div
                id="container"
                className="card__button-container pAqFox-young-dragon-29"
              >
                <div className="spinner">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </a>
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
        to="/elements/spinner"
      >
        See all loaders
      </Link>
    </section>
  );
}

export default Loaders;
