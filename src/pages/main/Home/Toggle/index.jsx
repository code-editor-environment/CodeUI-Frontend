import React from "react";
import { Link } from "react-router-dom";
function Toggle() {
  return (
    <section className="posts-preview" style={{ width: "100%" }}>
      <div className="posts-header">
        <a href="/switches">
          <h3 className="preview-heading">Toggle Switches</h3>
        </a>
      </div>
      <div className="content">
        <article className="card card--switch false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart:before,\n                      .pbarisdogansutcu-tender-dingo-64 #switch {\n                        display: none;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart,\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart::after {\n                        border-color: hsl(231deg 28% 86%);\n                        border: 1px solid;\n                        border-top-left-radius: 100px;\n                        border-top-right-radius: 100px;\n                        width: 10px;\n                        height: 8px;\n                        border-bottom: 0;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .round {\n                        position: absolute;\n                        z-index: 1;\n                        width: 8px;\n                        height: 8px;\n                        background: hsl(0deg 0% 100%);\n                        box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;\n                        border-radius: 100%;\n                        left: 0px;\n                        bottom: -1px;\n                        transition: all 0.5s ease;\n                        animation: check-animation2 0.5s forwards;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64\n                        input:checked\n                        + label\n                        .round {\n                        transform: translate(0px, 0px);\n                        animation: check-animation 0.5s forwards;\n                        background-color: hsl(0deg 0% 100%);\n                      }\n\n                      @keyframes check-animation {\n                        0% {\n                          transform: translate(0px, 0px);\n                        }\n\n                        50% {\n                          transform: translate(0px, 7px);\n                        }\n\n                        100% {\n                          transform: translate(7px, 7px);\n                        }\n                      }\n\n                      @keyframes check-animation2 {\n                        0% {\n                          transform: translate(7px, 7px);\n                        }\n\n                        50% {\n                          transform: translate(0px, 7px);\n                        }\n\n                        100% {\n                          transform: translate(0px, 0px);\n                        }\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart {\n                        box-sizing: border-box;\n                        position: relative;\n                        transform: rotate(-45deg) translate(-50%, -33px)\n                          scale(4);\n                        display: block;\n                        border-color: hsl(231deg 28% 86%);\n                        cursor: pointer;\n                        top: 0;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64\n                        input:checked\n                        + .love-heart,\n                      .pbarisdogansutcu-tender-dingo-64\n                        input:checked\n                        + .love-heart::after,\n                      .pbarisdogansutcu-tender-dingo-64\n                        input:checked\n                        + .love-heart\n                        .bottom {\n                        border-color: hsl(347deg 81% 61%);\n                        box-shadow: inset 6px -5px 0px 2px hsl(347deg 99% 72%);\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart::after,\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart .bottom {\n                        content: "";\n                        display: block;\n                        box-sizing: border-box;\n                        position: absolute;\n                        border-color: hsl(231deg 28% 86%);\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart::after {\n                        right: -9px;\n                        transform: rotate(90deg);\n                        top: 7px;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart .bottom {\n                        width: 11px;\n                        height: 11px;\n                        border-left: 1px solid;\n                        border-bottom: 1px solid;\n                        border-color: hsl(231deg 28% 86%);\n                        left: -1px;\n                        top: 5px;\n                        border-radius: 0px 0px 0px 5px;\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pbarisdogansutcu-tender-dingo-64"
              >
                <div className="love">
                  <input id="switch" type="checkbox" />
                  <label className="love-heart" htmlFor="switch">
                    <i className="left" />
                    <i className="right" />
                    <i className="bottom" />
                    <div className="round" />
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
        <article className="card card--switch false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .pnamecho-quiet-panther-93 .switch {\n                        --button-width: 3.5em;\n                        --button-height: 2em;\n                        --toggle-diameter: 1.5em;\n                        --button-toggle-offset: calc(\n                          (var(--button-height) - var(--toggle-diameter)) / 2\n                        );\n                        --toggle-shadow-offset: 10px;\n                        --toggle-wider: 3em;\n                        --color-grey: #cccccc;\n                        --color-green: #4296f4;\n                      }\n\n                      .pnamecho-quiet-panther-93 .slider {\n                        display: inline-block;\n                        width: var(--button-width);\n                        height: var(--button-height);\n                        background-color: var(--color-grey);\n                        border-radius: calc(var(--button-height) / 2);\n                        position: relative;\n                        transition: 0.3s all ease-in-out;\n                      }\n\n                      .pnamecho-quiet-panther-93 .slider::after {\n                        content: "";\n                        display: inline-block;\n                        width: var(--toggle-diameter);\n                        height: var(--toggle-diameter);\n                        background-color: #fff;\n                        border-radius: calc(var(--toggle-diameter) / 2);\n                        position: absolute;\n                        top: var(--button-toggle-offset);\n                        transform: translateX(var(--button-toggle-offset));\n                        box-shadow: var(--toggle-shadow-offset) 0\n                          calc(var(--toggle-shadow-offset) * 4)\n                          rgba(0, 0, 0, 0.1);\n                        transition: 0.3s all ease-in-out;\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"]:checked\n                        + .slider {\n                        background-color: var(--color-green);\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"]:checked\n                        + .slider::after {\n                        transform: translateX(\n                          calc(\n                            var(--button-width) - var(--toggle-diameter) -\n                              var(--button-toggle-offset)\n                          )\n                        );\n                        box-shadow: calc(var(--toggle-shadow-offset) * -1) 0\n                          calc(var(--toggle-shadow-offset) * 4)\n                          rgba(0, 0, 0, 0.1);\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"] {\n                        display: none;\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"]:active\n                        + .slider::after {\n                        width: var(--toggle-wider);\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"]:checked:active\n                        + .slider::after {\n                        transform: translateX(\n                          calc(\n                            var(--button-width) - var(--toggle-wider) -\n                              var(--button-toggle-offset)\n                          )\n                        );\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pnamecho-quiet-panther-93"
              >
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
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
        <article className="card card--switch dark-background false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                      .pmrhyddenn-silly-starfish-53 input {\n                        display: none;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 .on,\n                      .pmrhyddenn-silly-starfish-53 .off {\n                        position: absolute;\n                        text-align: center;\n                        text-shadow: inset 1px 1px 1px black;\n                        width: 100%;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 .on {\n                        color: #fff;\n                        top: 10px;\n                        transition: all 0.1s;\n                        font-family: sans-serif;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 .off {\n                        color: #636161;\n                        bottom: 5px;\n                        transition: all 0.1s;\n                        transform: scaleY(0.85);\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 .but {\n                        background-color: #000;\n                        border-radius: 400px 400px 400px 400px / 400px 400px\n                          300px 300px;\n                        border-bottom-width: 0px;\n                        box-shadow: inset 8px 6px 5px -7px rgba(0, 0, 0, 1),\n                          inset -8px 6px 5px -7px rgba(0, 0, 0, 1),\n                          inset 0 -3px 2px -2px rgba(200, 200, 200, 0.5),\n                          0 3px 3px -2px rgba(0, 0, 0, 1),\n                          inset 0 -230px 60px -200px rgba(255, 255, 255, 0.2),\n                          inset 0 220px 40px -200px rgba(0, 0, 0, 0.3);\n                        display: block;\n                        font-size: 17px;\n                        height: 60px;\n                        position: relative;\n                        transition: all 0.2s;\n                        width: 40px;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 .back {\n                        background-color: #000;\n                        background-image: -webkit-linear-gradient(\n                            0deg,\n                            transparent 30%,\n                            transparent 65%\n                          ),\n                          -webkit-linear-gradient(0deg, rgba(245, 245, 245, 0)\n                                30%, rgba(150, 150, 150, 0.1) 50%, rgba(\n                                  150,\n                                  150,\n                                  150,\n                                  0\n                                )\n                                70%);\n                        border-radius: 115px;\n                        box-sizing: border-box;\n                        height: 85px;\n                        padding: 4px 4px;\n                        transition: all 0.2s;\n                        width: 50px;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 input:checked + .back .on,\n                      .pmrhyddenn-silly-starfish-53 input:checked + .back .off {\n                        text-shadow: inset 1px 1px 1px black;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 input:checked + .back .on {\n                        color: rgb(141, 141, 141);\n                        top: 10px;\n                        transform: scaleY(0.85);\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 input:checked + .back .off {\n                        color: #fff;\n                        bottom: 5px;\n                        transform: scaleY(1);\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 input:checked + .back .but {\n                        background: #232323;\n                        background-image: -webkit-radial-gradient(\n                          55% 18%,\n                          circle closest-corner,\n                          rgba(0, 0, 0, 0.3),\n                          rgba(0, 0, 0, 0)\n                        );\n                        border-radius: 410px 410px 410px 410px / 310px 310px\n                          410px 410px;\n                        box-shadow: inset 8px -4px 5px -7px rgba(0, 0, 0, 1),\n                          inset -8px -4px 5px -7px rgba(0, 0, 0, 1),\n                          0 -3px 8px -4px rgba(250, 250, 250, 0.4),\n                          inset 0 3px 4px -2px rgba(10, 10, 10, 1),\n                          inset 0 280px 40px -200px rgba(0, 0, 0, 0.2),\n                          inset 0 -200px 40px -200px rgba(180, 180, 180, 0.2);\n                        margin-top: 20px;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 input:checked + .back {\n                        background-image: -webkit-linear-gradient(\n                            90deg,\n                            black 30%,\n                            transparent 65%\n                          ),\n                          -webkit-linear-gradient(180deg, rgba(250, 250, 250, 0)\n                                0%, rgba(250, 250, 250, 0.4) 50%, rgba(\n                                  150,\n                                  150,\n                                  150,\n                                  0\n                                )\n                                100%);\n                        box-shadow: 28px 28px 28px -28px rgba(0, 0, 0, 0.1),\n                          -28px 28px 28px -22px rgba(0, 0, 0, 0.1),\n                          0 30px 30px 0px rgba(0, 0, 0, 0.2),\n                          inset 0 1px 2px 0 rgba(0, 0, 0, 0.6);\n                        padding: 2px 4px;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 .l,\n                      .pmrhyddenn-silly-starfish-53 .r {\n                        margin: 0 auto;\n                        text-align: center;\n                      }\n\n                      .pmrhyddenn-silly-starfish-53 .round,\n                      .pmrhyddenn-silly-starfish-53 #onoff,\n                      .pmrhyddenn-silly-starfish-53 .back,\n                      .pmrhyddenn-silly-starfish-53 .but,\n                      .pmrhyddenn-silly-starfish-53 .on,\n                      .pmrhyddenn-silly-starfish-53 .off {\n                        user-select: none;\n                      }\n                    ",
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pmrhyddenn-silly-starfish-53"
              >
                <label className="switch">
                  <div className="round">
                    <input name="onoff" id="onoff" type="checkbox" />
                    <div className="back">
                      <label htmlFor="onoff" className="but">
                        <span className="on">0</span>
                        <span className="off">I</span>
                      </label>
                    </div>
                  </div>
                </label>
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
        <article className="card card--switch false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      /* The switch - the box around the slider */\n                      .pVoxybuns-horrible-shrimp-47 .switch {\n                        /* Variables */\n                        --switch_width: 2em;\n                        --switch_height: 1em;\n                        --thumb_color: #e8e8e8;\n                        --track_color: #e8e8e8;\n                        --track_active_color: #888;\n                        --outline_color: #000;\n                        font-size: 17px;\n                        position: relative;\n                        display: inline-block;\n                        width: var(--switch_width);\n                        height: var(--switch_height);\n                      }\n\n                      /* Hide default HTML checkbox */\n                      .pVoxybuns-horrible-shrimp-47 .switch input {\n                        opacity: 0;\n                        width: 0;\n                        height: 0;\n                      }\n\n                      /* The slider */\n                      .pVoxybuns-horrible-shrimp-47 .slider {\n                        box-sizing: border-box;\n                        border: 2px solid var(--outline_color);\n                        position: absolute;\n                        cursor: pointer;\n                        top: 0;\n                        left: 0;\n                        right: 0;\n                        bottom: 0;\n                        background-color: var(--track_color);\n                        transition: 0.15s;\n                        border-radius: var(--switch_height);\n                      }\n\n                      .pVoxybuns-horrible-shrimp-47 .slider:before {\n                        box-sizing: border-box;\n                        position: absolute;\n                        content: "";\n                        height: var(--switch_height);\n                        width: var(--switch_height);\n                        border: 2px solid var(--outline_color);\n                        border-radius: 100%;\n                        left: -2px;\n                        bottom: -2px;\n                        background-color: var(--thumb_color);\n                        transform: translateY(-0.2em);\n                        box-shadow: 0 0.2em 0 var(--outline_color);\n                        transition: 0.15s;\n                      }\n\n                      .pVoxybuns-horrible-shrimp-47 input:checked + .slider {\n                        background-color: var(--track_active_color);\n                      }\n\n                      .pVoxybuns-horrible-shrimp-47\n                        input:focus-visible\n                        + .slider {\n                        box-shadow: 0 0 0 2px var(--track_active_color);\n                      }\n\n                      /* Raise thumb when hovered */\n                      .pVoxybuns-horrible-shrimp-47\n                        input:hover\n                        + .slider:before {\n                        transform: translateY(-0.3em);\n                        box-shadow: 0 0.3em 0 var(--outline_color);\n                      }\n\n                      .pVoxybuns-horrible-shrimp-47\n                        input:checked\n                        + .slider:before {\n                        transform: translateX(\n                            calc(var(--switch_width) - var(--switch_height))\n                          )\n                          translateY(-0.2em);\n                      }\n\n                      /* Raise thumb when hovered & checked */\n                      .pVoxybuns-horrible-shrimp-47\n                        input:hover:checked\n                        + .slider:before {\n                        transform: translateX(\n                            calc(var(--switch_width) - var(--switch_height))\n                          )\n                          translateY(-0.3em);\n                        box-shadow: 0 0.3em 0 var(--outline_color);\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pVoxybuns-horrible-shrimp-47"
              >
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
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
        <article className="card card--switch false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart:before,\n                      .pbarisdogansutcu-tender-dingo-64 #switch {\n                        display: none;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart,\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart::after {\n                        border-color: hsl(231deg 28% 86%);\n                        border: 1px solid;\n                        border-top-left-radius: 100px;\n                        border-top-right-radius: 100px;\n                        width: 10px;\n                        height: 8px;\n                        border-bottom: 0;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .round {\n                        position: absolute;\n                        z-index: 1;\n                        width: 8px;\n                        height: 8px;\n                        background: hsl(0deg 0% 100%);\n                        box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;\n                        border-radius: 100%;\n                        left: 0px;\n                        bottom: -1px;\n                        transition: all 0.5s ease;\n                        animation: check-animation2 0.5s forwards;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64\n                        input:checked\n                        + label\n                        .round {\n                        transform: translate(0px, 0px);\n                        animation: check-animation 0.5s forwards;\n                        background-color: hsl(0deg 0% 100%);\n                      }\n\n                      @keyframes check-animation {\n                        0% {\n                          transform: translate(0px, 0px);\n                        }\n\n                        50% {\n                          transform: translate(0px, 7px);\n                        }\n\n                        100% {\n                          transform: translate(7px, 7px);\n                        }\n                      }\n\n                      @keyframes check-animation2 {\n                        0% {\n                          transform: translate(7px, 7px);\n                        }\n\n                        50% {\n                          transform: translate(0px, 7px);\n                        }\n\n                        100% {\n                          transform: translate(0px, 0px);\n                        }\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart {\n                        box-sizing: border-box;\n                        position: relative;\n                        transform: rotate(-45deg) translate(-50%, -33px)\n                          scale(4);\n                        display: block;\n                        border-color: hsl(231deg 28% 86%);\n                        cursor: pointer;\n                        top: 0;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64\n                        input:checked\n                        + .love-heart,\n                      .pbarisdogansutcu-tender-dingo-64\n                        input:checked\n                        + .love-heart::after,\n                      .pbarisdogansutcu-tender-dingo-64\n                        input:checked\n                        + .love-heart\n                        .bottom {\n                        border-color: hsl(347deg 81% 61%);\n                        box-shadow: inset 6px -5px 0px 2px hsl(347deg 99% 72%);\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart::after,\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart .bottom {\n                        content: "";\n                        display: block;\n                        box-sizing: border-box;\n                        position: absolute;\n                        border-color: hsl(231deg 28% 86%);\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart::after {\n                        right: -9px;\n                        transform: rotate(90deg);\n                        top: 7px;\n                      }\n\n                      .pbarisdogansutcu-tender-dingo-64 .love-heart .bottom {\n                        width: 11px;\n                        height: 11px;\n                        border-left: 1px solid;\n                        border-bottom: 1px solid;\n                        border-color: hsl(231deg 28% 86%);\n                        left: -1px;\n                        top: 5px;\n                        border-radius: 0px 0px 0px 5px;\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pbarisdogansutcu-tender-dingo-64"
              >
                <div className="love">
                  <input id="switch" type="checkbox" />
                  <label className="love-heart" htmlFor="switch">
                    <i className="left" />
                    <i className="right" />
                    <i className="bottom" />
                    <div className="round" />
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
        <article className="card card--switch false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .pnamecho-quiet-panther-93 .switch {\n                        --button-width: 3.5em;\n                        --button-height: 2em;\n                        --toggle-diameter: 1.5em;\n                        --button-toggle-offset: calc(\n                          (var(--button-height) - var(--toggle-diameter)) / 2\n                        );\n                        --toggle-shadow-offset: 10px;\n                        --toggle-wider: 3em;\n                        --color-grey: #cccccc;\n                        --color-green: #4296f4;\n                      }\n\n                      .pnamecho-quiet-panther-93 .slider {\n                        display: inline-block;\n                        width: var(--button-width);\n                        height: var(--button-height);\n                        background-color: var(--color-grey);\n                        border-radius: calc(var(--button-height) / 2);\n                        position: relative;\n                        transition: 0.3s all ease-in-out;\n                      }\n\n                      .pnamecho-quiet-panther-93 .slider::after {\n                        content: "";\n                        display: inline-block;\n                        width: var(--toggle-diameter);\n                        height: var(--toggle-diameter);\n                        background-color: #fff;\n                        border-radius: calc(var(--toggle-diameter) / 2);\n                        position: absolute;\n                        top: var(--button-toggle-offset);\n                        transform: translateX(var(--button-toggle-offset));\n                        box-shadow: var(--toggle-shadow-offset) 0\n                          calc(var(--toggle-shadow-offset) * 4)\n                          rgba(0, 0, 0, 0.1);\n                        transition: 0.3s all ease-in-out;\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"]:checked\n                        + .slider {\n                        background-color: var(--color-green);\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"]:checked\n                        + .slider::after {\n                        transform: translateX(\n                          calc(\n                            var(--button-width) - var(--toggle-diameter) -\n                              var(--button-toggle-offset)\n                          )\n                        );\n                        box-shadow: calc(var(--toggle-shadow-offset) * -1) 0\n                          calc(var(--toggle-shadow-offset) * 4)\n                          rgba(0, 0, 0, 0.1);\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"] {\n                        display: none;\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"]:active\n                        + .slider::after {\n                        width: var(--toggle-wider);\n                      }\n\n                      .pnamecho-quiet-panther-93\n                        .switch\n                        input[type="checkbox"]:checked:active\n                        + .slider::after {\n                        transform: translateX(\n                          calc(\n                            var(--button-width) - var(--toggle-wider) -\n                              var(--button-toggle-offset)\n                          )\n                        );\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pnamecho-quiet-panther-93"
              >
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider" />
                </label>
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
        to="/elements/switch"
      >
        See all toggle switches
      </Link>
    </section>
  );
}

export default Toggle;
