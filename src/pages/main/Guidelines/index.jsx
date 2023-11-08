import React from "react";
import timeLineGreen from "../../../assets/images/time-line-green.svg";
import timeLineRed from "../../../assets/images/time-line-red.svg";
import approved1 from "../../../assets/images/approved1-THGHOKU7.png";
import approved2 from "../../../assets/images/approved2-R3LXMY7J.png";
import approved3 from "../../../assets/images/approved3-XUKRJNQM.png";
import approved4 from "../../../assets/images/approved4-X7W6A6CQ.png";
import approved5 from "../../../assets/images/approved5-OYPE2D6H.png";
import approved6 from "../../../assets/images/approved6-BGUA225W.png";

import rejected1 from "../../../assets/images/rejected1-2D6F362W.png";
import rejected2 from "../../../assets/images/rejected2-LB4LPNL4.png";
import rejected3 from "../../../assets/images/rejected3-NDGC3V7E.png";
import rejected4 from "../../../assets/images/rejected4-KUH4M4S3.png";
import rejected5 from "../../../assets/images/rejected5-6ORCOPSR.png";
import rejected6 from "../../../assets/images/rejected6-PXIBAEHH.png";
function Guidelines() {
  return (
    <section className="relative w-full group m-auto max-w-[1200px] pt-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-offwhite mb-4">
          Guidelines for UI elements
        </h1>
        <h6 className="indent-2 sm:indent-0 text-offwhite opacity-50">
          We review each submission to maintain the highest standards of design,
          functionality, and user-friendliness on our platform.{" "}
        </h6>
        <h6 className="indent-2 sm:indent-0 text-offwhite opacity-50">
          Adherence to these guidelines ensures the quality of content
          showcased. Let's uphold the excellence of our community together!
        </h6>
      </div>
      <ul className="w-full flex flex-col gap-4 mb-10">
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            <span className="text-green-400 font-semibold">
              Hover, focus, active
            </span>{" "}
            and other states will give you a higher chance of getting approved
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            Use <span className="text-green-400 font-semibold">em's</span> when
            possible so that the dimensions are proportionate to font-size (this
            applies mainly to buttons, checkboxes, inputs…)
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            You can only have{" "}
            <span className="text-green-400 font-semibold">one element</span> in
            each post (in most cases)
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            You can use{" "}
            <span className="text-green-400 font-semibold">SVG</span> (both in
            CSS and HTML) as long as the SVG is not too big.
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            Use of{" "}
            <span className="text-green-400 font-semibold">
              CSS custom properties/variables
            </span>{" "}
            is encouraged, but don't specify them globally (:root, body...).
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            Make sure your elements are accessible by{" "}
            <span className="text-green-400 font-semibold">web standards</span>.
            Enough contrast, for example.
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            Elements should be{" "}
            <span className="text-green-400 font-semibold">unique</span> or{" "}
            <span className="text-green-400 font-semibold">
              detailed enough
            </span>
            , changing background color on hover is not enough.
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            If you're using any text, it should be either in{" "}
            <span className="text-green-400 font-semibold">English</span> or{" "}
            <span className="text-green-400 font-semibold">Lorem ipsum</span>.
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            Follow basic{" "}
            <span className="text-green-400 font-semibold">
              design principles
            </span>{" "}
            like spacing, grouping, complementary colors, and so on…
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineGreen} alt="" />
          <p>
            Be subtle with{" "}
            <span className="text-green-400 font-semibold">shadows</span> (in
            most cases)
          </p>
        </li>
      </ul>
      <ul className="w-full flex flex-col gap-4">
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            <span className="font-semibold text-red-400">JavaScript</span> is
            forbidden. Any{" "}
            <span className="font-semibold text-red-400">XSS</span> attempts
            will get you banned.
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            We don't approve posts that are either{" "}
            <span className="font-semibold text-red-400">already</span> posted
            on Uiverse by you or someone else or they are too{" "}
            <span className="font-semibold text-red-400">similar.</span>
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            Adding tags that are{" "}
            <span className="font-semibold text-red-400">not relevant</span> to
            the post.
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            Don't style outside elements, like{" "}
            <span className="font-semibold text-red-400">&lt;body&gt;</span> or{" "}
            <span className="font-semibold text-red-400">&lt;html&gt;</span>
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            Avoid <span className="font-semibold text-red-400">global</span>{" "}
            styles, everything should be scoped to a{" "}
            <span className="font-semibold text-red-400">class name</span>
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            Any <span className="font-semibold text-red-400">external</span>{" "}
            links are not allowed and will be filtered out, this applies for{" "}
            <span className="font-semibold text-red-400">images, fonts</span>{" "}
            etc.
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            The use of <span className="font-semibold text-red-400">SVG</span>{" "}
            should complement the HTML &amp; CSS, the{" "}
            <span className="font-semibold text-red-400">SVG</span> itself
            shouldn't be the main{" "}
            <span className="font-semibold text-red-400">content.</span>
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            Don't write{" "}
            <span className="font-semibold text-red-400">CSS prefixes,</span>{" "}
            code will be prefixed on the{" "}
            <span className="font-semibold text-red-400">server.</span>
          </p>
        </li>
        <li className="rounded-lg w-full p-5 py-4 bg-neutral-800 text-offwhite flex items-center gap-3">
          <img className="tag-icon" src={timeLineRed} alt="" />
          <p>
            Don't make your elements too{" "}
            <span className="font-semibold text-red-400">big,</span> try to keep
            roughly the{" "}
            <span className="font-semibold text-red-400">same size</span> as
            other elements in the{" "}
            <span className="font-semibold text-red-400">category.</span>
          </p>
        </li>
      </ul>
      <div className="w-full flex flex-col gap-12 mt-16">
        <div className="rounded-lg w-full text-offwhite flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-8 h-8 text-red-500 shrink-0"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            />
          </svg>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-offwhite mb-1">
              Examples of rejected UI elements
            </h2>
            <p className="text-sm sm:text-base text-indigo-300">
              Check the following UI examples of how not to do things
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 ">
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-neutral-700 aspect-square rounded object-cover"
              alt="imgrected"
              src={rejected1}
            />
            <figcaption className="text-red-400 text-sm ">
              This is not a subtle shadow and the button is too big
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-neutral-700 aspect-square rounded object-cover"
              alt="imgrected"
              src={rejected2}
            />
            <figcaption className="text-red-400 text-sm ">
              Bad spacing, alignment and contrast
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-neutral-700 aspect-square rounded object-cover"
              alt="imgrected"
              src={rejected3}
            />
            <figcaption className="text-red-400 text-sm ">
              External images are not allowed
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-neutral-700 aspect-square rounded object-cover"
              alt="imgrected"
              src={rejected4}
            />
            <figcaption className="text-red-400 text-sm ">
              Not enough contrast
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-neutral-700 aspect-square rounded object-cover"
              alt="imgrected"
              src={rejected5}
            />
            <figcaption className="text-red-400 text-sm ">
              This SVG is too big and takes up about 270 lines in the HTML, this
              should be avoided
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-neutral-700 aspect-square rounded object-cover"
              alt="imgrected"
              src={rejected6}
            />
            <figcaption className="text-red-400 text-sm ">
              Not enough added value
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="w-full flex flex-col gap-12 mt-16 mb-16">
        <div className="rounded-lg w-full text-offwhite flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-green-400 shrink-0"
            strokeWidth={2}
          >
            <path d="m4 12.374 5.351 5.346.428-.748a30.506 30.506 0 0 1 9.278-10.048L20 6.28" />
          </svg>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-offwhite mb-1">
              Examples of approved UI elements
            </h2>
            <p className="text-sm sm:text-base text-indigo-300">
              Check the following ui examples
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 ">
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-[#E8E8E8] aspect-square rounded object-cover"
              alt="imgapproved"
              src={approved1}
            />
            <figcaption className="text-green-300 text-sm ">
              Good use of colors, shadows and hierarchy
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-[#E8E8E8] aspect-square rounded object-cover"
              alt="imgapproved"
              src={approved2}
            />
            <figcaption className="text-green-300 text-sm ">
              Good size, similar to all other buttons on Uiverse and in the real
              world
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-[#E8E8E8] aspect-square rounded object-cover"
              alt="imgapproved"
              src={approved3}
            />
            <figcaption className="text-green-300 text-sm ">
              Good SVG usage
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-[#E8E8E8] aspect-square rounded object-cover"
              alt="imgapproved"
              src={approved4}
            />
            <figcaption className="text-green-300 text-sm ">
              Unique design
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-[#E8E8E8] aspect-square rounded object-cover"
              alt="imgapproved"
              src={approved5}
            />
            <figcaption className="text-green-300 text-sm ">
              Good hierarchy, use of colors and SVG
            </figcaption>
          </figure>
          <figure className="w-full h-full flex flex-col gap-2">
            <img
              className=" bg-[#E8E8E8] aspect-square rounded object-cover"
              alt="imgapproved"
              src={approved6}
            />
            <figcaption className="text-green-300 text-sm ">
              Good SVG usage and custom color background
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Guidelines;
