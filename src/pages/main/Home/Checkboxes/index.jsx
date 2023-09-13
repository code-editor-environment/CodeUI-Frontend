import React from "react";
import { Link } from "react-router-dom";
function Checkboxes() {
  return (
    <section className="posts-preview" style={{ width: "100%" }}>
      <div className="posts-header">
        <a href="/checkboxes">
          <h3 className="preview-heading">Checkboxes</h3>
        </a>
      </div>
      <div className="content">
        <article className="card card--checkbox false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .plenin55-black-dragon-46 .cl-checkbox {\n                        position: relative;\n                        display: inline-block;\n                      }\n\n                      /* Input */\n                      .plenin55-black-dragon-46 .cl-checkbox > input {\n                        appearance: none;\n                        -moz-appearance: none;\n                        -webkit-appearance: none;\n                        z-index: -1;\n                        position: absolute;\n                        left: -10px;\n                        top: -8px;\n                        display: block;\n                        margin: 0;\n                        border-radius: 50%;\n                        width: 40px;\n                        height: 40px;\n                        background-color: rgba(0, 0, 0, 0.6);\n                        box-shadow: none;\n                        outline: none;\n                        opacity: 0;\n                        transform: scale(1);\n                        pointer-events: none;\n                        transition: opacity 0.3s, transform 0.2s;\n                      }\n\n                      /* Span */\n                      .plenin55-black-dragon-46 .cl-checkbox > span {\n                        display: inline-block;\n                        width: 100%;\n                        cursor: pointer;\n                      }\n\n                      /* Box */\n                      .plenin55-black-dragon-46 .cl-checkbox > span::before {\n                        content: "";\n                        display: inline-block;\n                        box-sizing: border-box;\n                        margin: 3px 11px 3px 1px;\n                        border: solid 2px;\n                        /* Safari */\n                        border-color: rgba(0, 0, 0, 0.6);\n                        border-radius: 2px;\n                        width: 18px;\n                        height: 18px;\n                        vertical-align: top;\n                        transition: border-color 0.2s, background-color 0.2s;\n                      }\n\n                      /* Checkmark */\n                      .plenin55-black-dragon-46 .cl-checkbox > span::after {\n                        content: "";\n                        display: block;\n                        position: absolute;\n                        top: 3px;\n                        left: 1px;\n                        width: 10px;\n                        height: 5px;\n                        border: solid 2px transparent;\n                        border-right: none;\n                        border-top: none;\n                        transform: translate(3px, 4px) rotate(-45deg);\n                      }\n\n                      /* Checked, Indeterminate */\n                      .plenin55-black-dragon-46 .cl-checkbox > input:checked,\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate {\n                        background-color: #018786;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:checked\n                        + span::before,\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate\n                        + span::before {\n                        border-color: #018786;\n                        background-color: #018786;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:checked\n                        + span::after,\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate\n                        + span::after {\n                        border-color: #fff;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate\n                        + span::after {\n                        border-left: none;\n                        transform: translate(4px, 3px);\n                      }\n\n                      /* Hover, Focus */\n                      .plenin55-black-dragon-46 .cl-checkbox:hover > input {\n                        opacity: 0.04;\n                      }\n\n                      .plenin55-black-dragon-46 .cl-checkbox > input:focus {\n                        opacity: 0.12;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox:hover\n                        > input:focus {\n                        opacity: 0.16;\n                      }\n\n                      /* Active */\n                      .plenin55-black-dragon-46 .cl-checkbox > input:active {\n                        opacity: 1;\n                        transform: scale(0);\n                        transition: transform 0s, opacity 0s;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:active\n                        + span::before {\n                        border-color: #85b8b7;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:checked:active\n                        + span::before {\n                        border-color: transparent;\n                        background-color: rgba(0, 0, 0, 0.6);\n                      }\n\n                      /* Disabled */\n                      .plenin55-black-dragon-46 .cl-checkbox > input:disabled {\n                        opacity: 0;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:disabled\n                        + span {\n                        color: rgba(0, 0, 0, 0.38);\n                        cursor: initial;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:disabled\n                        + span::before {\n                        border-color: currentColor;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:checked:disabled\n                        + span::before,\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate:disabled\n                        + span::before {\n                        border-color: transparent;\n                        background-color: currentColor;\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container plenin55-black-dragon-46"
              >
                <label className="cl-checkbox">
                  <input defaultChecked type="checkbox" />
                  <span />
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
        <article className="card card--checkbox false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      /* Hide the default checkbox */\n                      .psssynk-tall-octopus-55 .container input {\n                        position: absolute;\n                        opacity: 0;\n                        cursor: pointer;\n                        height: 0;\n                        width: 0;\n                        border-radius: 5px;\n                      }\n\n                      .psssynk-tall-octopus-55 .container {\n                        display: block;\n                        position: relative;\n                        cursor: pointer;\n                        font-size: 20px;\n                        user-select: none;\n                        border-radius: 5px;\n                        box-shadow: 2px 2px 0px rgb(183, 183, 183);\n                      }\n\n                      /* Create a custom checkbox */\n                      .psssynk-tall-octopus-55 .checkmark {\n                        position: relative;\n                        top: 0;\n                        left: 0;\n                        height: 1.3em;\n                        width: 1.3em;\n                        background-color: #ccc;\n                        border-radius: 5px;\n                      }\n\n                      /* When the checkbox is checked, add a blue background */\n                      .psssynk-tall-octopus-55\n                        .container\n                        input:checked\n                        ~ .checkmark {\n                        box-shadow: 3px 3px 0px rgb(183, 183, 183);\n                        transition: all 0.2s;\n                        opacity: 1;\n                        background-image: linear-gradient(\n                          45deg,\n                          rgb(100, 61, 219) 0%,\n                          rgb(217, 21, 239) 100%\n                        );\n                      }\n\n                      .psssynk-tall-octopus-55 .container input ~ .checkmark {\n                        transition: all 0.2s;\n                        opacity: 1;\n                        box-shadow: 1px 1px 0px rgb(183, 183, 183);\n                      }\n\n                      /* Create the checkmark/indicator (hidden when not checked) */\n                      .psssynk-tall-octopus-55 .checkmark:after {\n                        content: "";\n                        position: absolute;\n                        opacity: 0;\n                        transition: all 0.2s;\n                      }\n\n                      /* Show the checkmark when checked */\n                      .psssynk-tall-octopus-55\n                        .container\n                        input:checked\n                        ~ .checkmark:after {\n                        opacity: 1;\n                        transition: all 0.2s;\n                      }\n\n                      /* Style the checkmark/indicator */\n                      .psssynk-tall-octopus-55 .container .checkmark:after {\n                        left: 0.45em;\n                        top: 0.25em;\n                        width: 0.25em;\n                        height: 0.5em;\n                        border: solid white;\n                        border-width: 0 0.15em 0.15em 0;\n                        transform: rotate(45deg);\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container psssynk-tall-octopus-55"
              >
                <label className="container">
                  <input type="checkbox" defaultChecked="checked" />
                  <div className="checkmark" />
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
        <article className="card card--checkbox false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .pcssbuttons-io-short-shrimp-54 .cbx {\n                        position: relative;\n                        top: 1px;\n                        width: 27px;\n                        height: 27px;\n                        border: 1px solid #c8ccd4;\n                        border-radius: 3px;\n                        vertical-align: middle;\n                        transition: background 0.1s ease;\n                        cursor: pointer;\n                        display: block;\n                      }\n\n                      .pcssbuttons-io-short-shrimp-54 .cbx:after {\n                        content: "";\n                        position: absolute;\n                        top: 2px;\n                        left: 8px;\n                        width: 7px;\n                        height: 14px;\n                        opacity: 0;\n                        transform: rotate(45deg) scale(0);\n                        border-right: 2px solid #fff;\n                        border-bottom: 2px solid #fff;\n                        transition: all 0.3s ease;\n                        transition-delay: 0.15s;\n                      }\n\n                      .pcssbuttons-io-short-shrimp-54 .lbl {\n                        margin-left: 5px;\n                        vertical-align: middle;\n                        cursor: pointer;\n                      }\n\n                      .pcssbuttons-io-short-shrimp-54 #cbx:checked ~ .cbx {\n                        border-color: transparent;\n                        background: #6871f1;\n                        animation: jelly 0.6s ease;\n                      }\n\n                      .pcssbuttons-io-short-shrimp-54\n                        #cbx:checked\n                        ~ .cbx:after {\n                        opacity: 1;\n                        transform: rotate(45deg) scale(1);\n                      }\n\n                      .pcssbuttons-io-short-shrimp-54 .cntr {\n                        position: relative;\n                      }\n\n                      @keyframes jelly {\n                        from {\n                          transform: scale(1, 1);\n                        }\n\n                        30% {\n                          transform: scale(1.25, 0.75);\n                        }\n\n                        40% {\n                          transform: scale(0.75, 1.25);\n                        }\n\n                        50% {\n                          transform: scale(1.15, 0.85);\n                        }\n\n                        65% {\n                          transform: scale(0.95, 1.05);\n                        }\n\n                        75% {\n                          transform: scale(1.05, 0.95);\n                        }\n\n                        to {\n                          transform: scale(1, 1);\n                        }\n                      }\n\n                      .pcssbuttons-io-short-shrimp-54 .hidden-xs-up {\n                        display: none !important;\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pcssbuttons-io-short-shrimp-54"
              >
                <div className="cntr">
                  <input
                    defaultChecked
                    type="checkbox"
                    id="cbx"
                    className="hidden-xs-up"
                  />
                  <label htmlFor="cbx" className="cbx" />
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
        <article className="card card--checkbox false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      /* Hide the default checkbox */\n                      .pmartinval9-wise-elephant-23 .container input {\n                        position: absolute;\n                        opacity: 0;\n                        cursor: pointer;\n                        height: 0;\n                        width: 0;\n                      }\n\n                      .pmartinval9-wise-elephant-23 .container {\n                        display: block;\n                        position: relative;\n                        cursor: pointer;\n                        font-size: 20px;\n                        user-select: none;\n                      }\n\n                      /* Create a custom checkbox */\n                      .pmartinval9-wise-elephant-23 .checkmark {\n                        position: relative;\n                        top: 0;\n                        left: 0;\n                        height: 1.3em;\n                        width: 1.3em;\n                        background-color: #ccc;\n                        border-radius: 25px;\n                        transition: 0.15s;\n                      }\n\n                      /* When the checkbox is checked, add a blue background */\n                      .pmartinval9-wise-elephant-23\n                        .container\n                        input:checked\n                        ~ .checkmark {\n                        background-color: limegreen;\n                        border-radius: 25px;\n                        transition: 0.15s;\n                      }\n\n                      /* Create the checkmark/indicator (hidden when not checked) */\n                      .pmartinval9-wise-elephant-23 .checkmark:after {\n                        content: "";\n                        position: absolute;\n                        display: none;\n                      }\n\n                      /* Show the checkmark when checked */\n                      .pmartinval9-wise-elephant-23\n                        .container\n                        input:checked\n                        ~ .checkmark:after {\n                        display: block;\n                      }\n\n                      /* Style the checkmark/indicator */\n                      .pmartinval9-wise-elephant-23\n                        .container\n                        .checkmark:after {\n                        left: 0.45em;\n                        top: 0.25em;\n                        width: 0.25em;\n                        height: 0.5em;\n                        border: solid white;\n                        border-width: 0 0.15em 0.15em 0;\n                        transform: rotate(45deg);\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container pmartinval9-wise-elephant-23"
              >
                <label className="container">
                  <input type="checkbox" defaultChecked="checked" />
                  <div className="checkmark" />
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
        <article className="card card--checkbox false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      .plenin55-black-dragon-46 .cl-checkbox {\n                        position: relative;\n                        display: inline-block;\n                      }\n\n                      /* Input */\n                      .plenin55-black-dragon-46 .cl-checkbox > input {\n                        appearance: none;\n                        -moz-appearance: none;\n                        -webkit-appearance: none;\n                        z-index: -1;\n                        position: absolute;\n                        left: -10px;\n                        top: -8px;\n                        display: block;\n                        margin: 0;\n                        border-radius: 50%;\n                        width: 40px;\n                        height: 40px;\n                        background-color: rgba(0, 0, 0, 0.6);\n                        box-shadow: none;\n                        outline: none;\n                        opacity: 0;\n                        transform: scale(1);\n                        pointer-events: none;\n                        transition: opacity 0.3s, transform 0.2s;\n                      }\n\n                      /* Span */\n                      .plenin55-black-dragon-46 .cl-checkbox > span {\n                        display: inline-block;\n                        width: 100%;\n                        cursor: pointer;\n                      }\n\n                      /* Box */\n                      .plenin55-black-dragon-46 .cl-checkbox > span::before {\n                        content: "";\n                        display: inline-block;\n                        box-sizing: border-box;\n                        margin: 3px 11px 3px 1px;\n                        border: solid 2px;\n                        /* Safari */\n                        border-color: rgba(0, 0, 0, 0.6);\n                        border-radius: 2px;\n                        width: 18px;\n                        height: 18px;\n                        vertical-align: top;\n                        transition: border-color 0.2s, background-color 0.2s;\n                      }\n\n                      /* Checkmark */\n                      .plenin55-black-dragon-46 .cl-checkbox > span::after {\n                        content: "";\n                        display: block;\n                        position: absolute;\n                        top: 3px;\n                        left: 1px;\n                        width: 10px;\n                        height: 5px;\n                        border: solid 2px transparent;\n                        border-right: none;\n                        border-top: none;\n                        transform: translate(3px, 4px) rotate(-45deg);\n                      }\n\n                      /* Checked, Indeterminate */\n                      .plenin55-black-dragon-46 .cl-checkbox > input:checked,\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate {\n                        background-color: #018786;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:checked\n                        + span::before,\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate\n                        + span::before {\n                        border-color: #018786;\n                        background-color: #018786;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:checked\n                        + span::after,\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate\n                        + span::after {\n                        border-color: #fff;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate\n                        + span::after {\n                        border-left: none;\n                        transform: translate(4px, 3px);\n                      }\n\n                      /* Hover, Focus */\n                      .plenin55-black-dragon-46 .cl-checkbox:hover > input {\n                        opacity: 0.04;\n                      }\n\n                      .plenin55-black-dragon-46 .cl-checkbox > input:focus {\n                        opacity: 0.12;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox:hover\n                        > input:focus {\n                        opacity: 0.16;\n                      }\n\n                      /* Active */\n                      .plenin55-black-dragon-46 .cl-checkbox > input:active {\n                        opacity: 1;\n                        transform: scale(0);\n                        transition: transform 0s, opacity 0s;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:active\n                        + span::before {\n                        border-color: #85b8b7;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:checked:active\n                        + span::before {\n                        border-color: transparent;\n                        background-color: rgba(0, 0, 0, 0.6);\n                      }\n\n                      /* Disabled */\n                      .plenin55-black-dragon-46 .cl-checkbox > input:disabled {\n                        opacity: 0;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:disabled\n                        + span {\n                        color: rgba(0, 0, 0, 0.38);\n                        cursor: initial;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:disabled\n                        + span::before {\n                        border-color: currentColor;\n                      }\n\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:checked:disabled\n                        + span::before,\n                      .plenin55-black-dragon-46\n                        .cl-checkbox\n                        > input:indeterminate:disabled\n                        + span::before {\n                        border-color: transparent;\n                        background-color: currentColor;\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container plenin55-black-dragon-46"
              >
                <label className="cl-checkbox">
                  <input defaultChecked type="checkbox" />
                  <span />
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
        <article className="card card--checkbox false false">
          <div className="card-content">
            <Link className="get-html-css" to="/">
              Get <span className="html">HTML</span> &amp;
              <span className="css">CSS</span>
            </Link>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                      /* Hide the default checkbox */\n                      .psssynk-tall-octopus-55 .container input {\n                        position: absolute;\n                        opacity: 0;\n                        cursor: pointer;\n                        height: 0;\n                        width: 0;\n                        border-radius: 5px;\n                      }\n\n                      .psssynk-tall-octopus-55 .container {\n                        display: block;\n                        position: relative;\n                        cursor: pointer;\n                        font-size: 20px;\n                        user-select: none;\n                        border-radius: 5px;\n                        box-shadow: 2px 2px 0px rgb(183, 183, 183);\n                      }\n\n                      /* Create a custom checkbox */\n                      .psssynk-tall-octopus-55 .checkmark {\n                        position: relative;\n                        top: 0;\n                        left: 0;\n                        height: 1.3em;\n                        width: 1.3em;\n                        background-color: #ccc;\n                        border-radius: 5px;\n                      }\n\n                      /* When the checkbox is checked, add a blue background */\n                      .psssynk-tall-octopus-55\n                        .container\n                        input:checked\n                        ~ .checkmark {\n                        box-shadow: 3px 3px 0px rgb(183, 183, 183);\n                        transition: all 0.2s;\n                        opacity: 1;\n                        background-image: linear-gradient(\n                          45deg,\n                          rgb(100, 61, 219) 0%,\n                          rgb(217, 21, 239) 100%\n                        );\n                      }\n\n                      .psssynk-tall-octopus-55 .container input ~ .checkmark {\n                        transition: all 0.2s;\n                        opacity: 1;\n                        box-shadow: 1px 1px 0px rgb(183, 183, 183);\n                      }\n\n                      /* Create the checkmark/indicator (hidden when not checked) */\n                      .psssynk-tall-octopus-55 .checkmark:after {\n                        content: "";\n                        position: absolute;\n                        opacity: 0;\n                        transition: all 0.2s;\n                      }\n\n                      /* Show the checkmark when checked */\n                      .psssynk-tall-octopus-55\n                        .container\n                        input:checked\n                        ~ .checkmark:after {\n                        opacity: 1;\n                        transition: all 0.2s;\n                      }\n\n                      /* Style the checkmark/indicator */\n                      .psssynk-tall-octopus-55 .container .checkmark:after {\n                        left: 0.45em;\n                        top: 0.25em;\n                        width: 0.25em;\n                        height: 0.5em;\n                        border: solid white;\n                        border-width: 0 0.15em 0.15em 0;\n                        transform: rotate(45deg);\n                      }\n                    ',
              }}
            />
            <div className="clickable-wrapper">
              <Link className="fake-link" to="/">
                Link to button
              </Link>
              <div
                id="container"
                className="card__button-container psssynk-tall-octopus-55"
              >
                <label className="container">
                  <input type="checkbox" defaultChecked="checked" />
                  <div className="checkmark" />
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
        to="/elements/checkbox"
      >
        See all checkboxes
      </Link>
    </section>
  );
}

export default Checkboxes;
