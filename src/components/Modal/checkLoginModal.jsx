import { useDispatch } from "react-redux";
import { close } from "../../store/modal/modal-slice";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../configs/firebase.configs";
import { useState } from "react";
import { signInMail } from "../../api/auth";
import { userProfile, userProfileRes } from "../../store/profile/profile-slice";
import { setStorage } from "../../utils/helper";
import { useNavigate } from 'react-router-dom';
function CheckLoginModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const SignInMail = (type) => {
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    signInWithPopup(auth, type ? providerGoogle : providerGithub)
      .then(function (result) {
        setLoading(true);
        signInMail(result.user.accessToken).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            dispatch(
              userProfile({
                accessToken: data.data.access_token,
                id: data.data.account.id,
              })
            );
            dispatch(
              userProfileRes({
                username: data.data.account.profileResponse.username,
                imageUrl: data.data.account.profileResponse.imageUrl,
              })
            );
            setStorage([
              {
                key: "codeUiLog",
                value: JSON.stringify({
                  accessToken: data.data.access_token,
                  id: data.data.account.id,
                }),
              },
              {
                key: "profileResponse",
                value: JSON.stringify({
                  username: data.data.account.profileResponse.username,
                  imageUrl: data.data.account.profileResponse.imageUrl,
                }),
              },
            ]);
            dispatch(close());
            navigate("/");
          }
          setLoading(false);
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <div className="customModal--sign-in options-modal">
      <div className="font-semibold modal">
        <div className="mb-6 text-3xl font-bold text-center text-offwhite">
          Sign in
        </div>
        <p className="mb-2 text-base text-center text-gray-400">
          You need to sign in first.
        </p>
        <p className="text-base text-center text-gray-200">
          After you sign in you can create posts, subscribe, comment, add to
          favorites or participate in challenges.
        </p>
        <button
          className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-dark-600 hover:bg-dark-500 text-offwhite cursor-pointer mx-auto mt-6"
          onClick={() => SignInMail(true)}
          disabled={loading}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0,0,256,256"
          >
            <g transform="scale(5.33333,5.33333)">
              <path
                d="M43.611,20.083h-1.611v-0.083h-18v8h11.303c-1.649,4.657 -6.08,8 -11.303,8c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c3.059,0 5.842,1.154 7.961,3.039l5.657,-5.657c-3.572,-3.329 -8.35,-5.382 -13.618,-5.382c-11.045,0 -20,8.955 -20,20c0,11.045 8.955,20 20,20c11.045,0 20,-8.955 20,-20c0,-1.341 -0.138,-2.65 -0.389,-3.917z"
                fill="#fbc02d"
              ></path>
              <path
                d="M6.306,14.691l6.571,4.819c1.778,-4.402 6.084,-7.51 11.123,-7.51c3.059,0 5.842,1.154 7.961,3.039l5.657,-5.657c-3.572,-3.329 -8.35,-5.382 -13.618,-5.382c-7.682,0 -14.344,4.337 -17.694,10.691z"
                fill="#e53935"
              ></path>
              <path
                d="M24,44c5.166,0 9.86,-1.977 13.409,-5.192l-6.19,-5.238c-2.008,1.521 -4.504,2.43 -7.219,2.43c-5.202,0 -9.619,-3.317 -11.283,-7.946l-6.522,5.025c3.31,6.477 10.032,10.921 17.805,10.921z"
                fill="#4caf50"
              ></path>
              <path
                d="M43.611,20.083l-0.016,-0.083h-1.595h-18v8h11.303c-0.792,2.237 -2.231,4.166 -4.087,5.571c0.001,-0.001 0.002,-0.001 0.003,-0.002l6.19,5.238c-0.438,0.398 6.591,-4.807 6.591,-14.807c0,-1.341 -0.138,-2.65 -0.389,-3.917z"
                fill="#1565c0"
              ></path>
            </g>
          </svg>
          Sign in with Google
        </button>
        <button
          className="px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg text-base font-semibold transition-colors duration-200 bg-dark-600 hover:bg-dark-500 text-offwhite cursor-pointer mx-auto mt-6"
          onClick={() => SignInMail(false)}
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>{" "}
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

export default CheckLoginModal;
