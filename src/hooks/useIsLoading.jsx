import { useState } from "react";

export function useIsLoading() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(!loading);
  }
  const Loading = () => {
    return (
      loading && (
        <div className="loader">
          <svg className="absolute" viewBox="0 0 64 64" width="0" height="0">
            <defs xmlns="http://www.w3.org/2000/svg" className="s-xJBuHA073rTt">
              <linearGradient
                id="u"
                x1="0"
                y1="64"
                x2="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
                className="s-xJBuHA073rTt"
              >
                <stop stopColor="#a855f7" className="s-xJBuHA073rTt"></stop>
                <stop
                  offset="1"
                  stopColor="#ec4899"
                  className="s-xJBuHA073rTt"
                ></stop>
                <animateTransform
                  attributeName="gradientTransform"
                  type="rotate"
                  values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                  dur="8s"
                  keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                  keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                  repeatCount="indefinite"
                ></animateTransform>
              </linearGradient>
              <linearGradient
                id="i"
                x1="0"
                y1="64"
                x2="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
                className="s-xJBuHA073rTt"
              >
                <stop stopColor="#973BED" className="s-xJBuHA073rTt"></stop>
                <stop
                  offset="1"
                  stopColor="#007CFF"
                  className="s-xJBuHA073rTt"
                ></stop>
                <animateTransform
                  attributeName="gradientTransform"
                  type="rotate"
                  values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                  dur="8s"
                  keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                  keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                  repeatCount="indefinite"
                ></animateTransform>
              </linearGradient>
            </defs>
          </svg>
<svg classname="inline-block" width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path pathLength={360} id="d" classname="dash" d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z" stroke="url(#u)" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
</svg>

          <svg
            className="inline-block"
            width="75"
            height="75"
            viewBox="10 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
<path pathlength={360} id="d" classname="dash" d="M28,48h-7c-0.553,0 -1,-0.448 -1,-1v-43c0,-0.552 0.447,-1 1,-1h7c0.553,0 1,0.448 1,1v43c0,0.552 -0.447,1 -1,1z" stroke="url(#i)" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />

          </svg>
        </div>
      )
    );
  };
  return {
    Loading,
    setLoading,
    handleClick,
  };
}
