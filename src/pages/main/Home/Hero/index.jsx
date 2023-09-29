import React from "react";
import thumnailcode from "../../../../assets/images/thumnailcode.png";
import htmlIcon from "../../../../assets/images/html.svg";
import cssIcon from "../../../../assets/images/css.svg";
import jsIcon from "../../../../assets/images/js.png";
import { Link } from "react-router-dom";
function Hero() {
  const slogan = "Celebrating the Artistry of Creative Coders";
  setTimeout(
    function () {
      this.setState({ position: 1 });
    }.bind(this),
    3000
  );
  return (
    <div className="home-page_hero">
      <div className="home-page__hero">
        <div className="left">
          <h1 className="home-page__heading" style={{ maxWidth: "100%" }}>
            <span>CodeUI</span> :{" "}
            {slogan
              .split("")
              .map((character) =>
                character === " " ? " " : <strong>{character}</strong>
              )}
          </h1>
          <h2 className="home-page__subheading">
            <span className="boxText boxTextRed">
              where code comes to life{" "}
            </span>
            and
            <span className="boxText boxTextPurple">
              {" "}
              creativity takes flight
            </span>
          </h2>
          <div style={{ display: "flex" }}>
            <Link className="button cta-button" to="/elements/all">
              Browse all elements
            </Link>
            <img
              src={htmlIcon}
              alt="htmlIcon"
              style={{ height: "8%", width: "8%", marginTop: "23px" }}
            />
            <img
              src={cssIcon}
              alt="cssIcon"
              style={{ height: "8%", width: "8%", marginTop: "23px" }}
            />
            <img
              src={jsIcon}
              alt="cssIcon"
              style={{ height: "8%", width: "8%", marginTop: "23px" }}
            />
          </div>
        </div>
        <img
          src="https://cdn.dribbble.com/users/1139587/screenshots/14694006/media/5a5ac23e2385cf6a2afb6b02b94c0d3d.png?resize=1000x750&vertical=center"
          alt="thumnailcode"
        />
      </div>
    </div>
  );
}

export default Hero;
