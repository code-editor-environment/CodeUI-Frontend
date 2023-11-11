import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../configs/firebase.configs";
import { collection, getDocs } from "firebase/firestore";
function Challenges() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await getDocs(collection(db, "challenges")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(newData);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="pt-[40px] pb-[100px]">
      {data.map((item, index) => (
        <Link
          className="block"
          to={`/challenges/css-challenge-${item.id}`}
          key={index}
        >
          <section className="relative w-full group rounded-3xl overflow-hidden mb-10 transition-transform duration-300 flex bg-dark-800 m-auto flex-wrap-reverse min-h-[400px] max-w-[1200px] gap-10">
            <div className="absolute inset-0 flex items-start ms:justify-end">
              <div
                className="challenge-cover scale-105 group-hover:scale-110 transition-transform challenge-cover-shift"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              />
            </div>
            <div className="pt-[65%] p-10 ms:pt-10 relative z-40 flex flex-col items-start flex-1 ms:max-w-[65%]">
              {/* <div class="flex items-center gap-3 flex-wrap">
                <div class="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-yellow-600 text-yellow-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="w-5 h-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    ></path>
                  </svg>{" "}
                  Voting started
                </div>
              </div> */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="py-2 pl-3 pr-4 rounded-lg inline-flex items-center gap-2 text-sm font-bold bg-dark-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    strokeWidth={2}
                  >
                    <path d="m4 12.374 5.351 5.346.428-.748a30.506 30.506 0 0 1 9.278-10.048L20 6.28" />
                  </svg>
                  Finished
                </div>
              </div>
              <div className="mt-6 mb-4 text-4xl font-bold">{item.name}</div>
              <div className="mb-2 text-lg italic font-semibold transition-colors group-hover:text-fuchsia-400">
                {item.content}
              </div>
              <p className="text-base text-gray-400">{item.description}</p>
              {/* <footer class="flex items-center gap-4 mt-8 flex-wrap">
                <div>
                  🎉 You've already submitted a{" "}
                  <a
                    class="underline post-link"
                    href="/tranquoclong/unlucky-shrimp-12"
                  >
                    tooltip
                  </a>
                  !
                </div>
                <div class="deadline">
                  <div>Vote for the winner below!</div>
                </div>
              </footer> */}
              <footer className="flex flex-wrap items-end flex-1 gap-6 mt-8 font-semibold">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M8 2v2.128M8 6V4.128M16 2v2.128M16 6V4.128M20.96 10c.04.788.04 1.755.04 3 0 2.796 0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 22 14.796 22 12 22c-2.796 0-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 17.194 3 15.796 3 13c0-1.245 0-2.212.04-3m17.92 0c-.05-.982-.163-1.684-.417-2.296a6 6 0 0 0-3.247-3.247A5.136 5.136 0 0 0 16 4.127M20.96 10H3.04m0 0c.05-.982.163-1.684.417-2.296a6 6 0 0 1 3.247-3.247A5.135 5.135 0 0 1 8 4.127m0 0C8.941 4 10.172 4 12 4c1.828 0 3.059 0 4 .128" />
                  </svg>
                  <span className="item__text">
                    {new Date(item.date).toDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="w-5 h-5"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"
                    />
                  </svg>
                  <span className="item__text">{item.participants}</span>
                </div>
              </footer>
            </div>
          </section>
        </Link>
      ))}
    </div>
  );
}

export default Challenges;
