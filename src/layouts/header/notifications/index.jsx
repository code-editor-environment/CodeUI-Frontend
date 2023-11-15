import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { remove, ref, onValue, off } from "firebase/database";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";
import point from "../../../assets/images/logoCover.png";
import { database, db } from "../../../configs/firebase.configs";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { Link } from "react-router-dom";
import { formatDateString } from "../../../utils/functions";
import { useDispatch } from "react-redux";
import { checkElements } from "../../../store/element/elements-slice";
function Notification() {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const { isActive, setIsActive, nodeRef, triggerRef } =
    useDetectOutsideClick(false);
  const [data, setData] = useState([]);
  const [check, setCheck] = useState({ quantity: 0, element :[]});
  const fetchPost = async () => {
    try {
      const docRef = doc(db, "notifications", isLogin.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const dataArray = docSnap.data().data;
        const sortedArray = dataArray.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        setData(sortedArray);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  useEffect(() => {
    const notificationsRef = ref(database, `notifications/${isLogin.id}`);
    const unsubscribe = onValue(
      notificationsRef,
      (snapshot) => {
        const updatedQuantity = snapshot.val();
        if (updatedQuantity !== null && updatedQuantity !== 0) {
          setCheck(updatedQuantity);
        }
      },
      {
        onlyOnce: false,
      }
    );
    return () => off(notificationsRef, "value", unsubscribe);
  }, [isLogin.id]);
  const updateElement = async (id) => {
    const elementRef = doc(db, "elements", id.toString());
    const updatedDoc = await getDoc(elementRef);
    if (updatedDoc.exists()) {
      const dataUpdated = {
        id: id.toString(),
        status:check.element[0].status,
        ...updatedDoc.data(),
      };
      dispatch(checkElements(dataUpdated));
    } else {
      throw new Error("Document not found");
    }
  };
  useEffect(
    () => {
      fetchPost();
      check.element[0]?.id && updateElement(check.element[0].id);
    }, // eslint-disable-next-line
    [check]
  );
  const ViewNotifications = ({ item }) => {
    const currentView = {
      APPROVED: (
        <li className="pl-3 gap-3 w-full inline-flex bg-dark-600 false">
          <div className="flex-[0_0_40px] mt-1 items-start justify-center min-w-0 pt-2 pb-2">
            <div className="text-blue-800 bg-blue-400 rounded-lg w-[40px] h-[40px] flex items-center justify-center blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 mr-0"
              >
                <path
                  d="M5.83087 18.1693L3.00261 20.9979M7.95219 20.2906L7.24508 20.9977M3.70955 16.0479L3.00244 16.755M11.3588 6.14844L6.98115 6.14844C6.65417 6.14844 6.43834 6.20823 6.15796 6.37645L4.34408 7.46478C3.91094 7.72466 3.69438 7.8546 3.63232 8.01389C3.5783 8.15256 3.58885 8.30808 3.66112 8.43818C3.74412 8.58763 3.97626 8.68711 4.44054 8.88609L7.91447 10.3749M11.3588 6.14844C10.7176 6.79012 10.1116 7.56433 9.18973 8.74215L8.32567 9.84608C8.16879 10.0465 8.0327 10.2204 7.91447 10.3749M11.3588 6.14844C11.6532 5.85384 11.955 5.58717 12.2982 5.32221C13.0456 4.7452 14.6119 3.90719 15.5067 3.6056C16.8125 3.16545 17.3933 3.12131 18.5548 3.03303C19.5534 2.95712 20.3717 3.01164 20.6801 3.32001C20.9885 3.62839 21.043 4.44669 20.9671 5.44536C20.8788 6.60685 20.8347 7.18759 20.3945 8.49341C20.0929 9.38818 19.2549 10.9545 18.6779 11.7019C18.413 12.0451 18.1463 12.3469 17.8517 12.6413M7.91447 10.3749C7.58676 10.8033 7.39618 11.0832 7.27999 11.3693C6.93821 12.2106 6.99595 13.1615 7.43702 13.9554C7.64105 14.3226 7.98047 14.662 8.6593 15.3408C9.33813 16.0197 9.67754 16.3591 10.0448 16.5631C10.8386 17.0042 11.7895 17.0619 12.6309 16.7201C12.9169 16.6039 13.1968 16.4134 13.6252 16.0857M13.6252 16.0857L15.114 19.5596C15.313 20.0239 15.4125 20.256 15.5619 20.339C15.692 20.4113 15.8476 20.4218 15.9862 20.3678C16.1455 20.3057 16.2755 20.0892 16.5353 19.656L17.6237 17.8422C17.7919 17.5618 17.8517 17.346 17.8517 17.019L17.8517 12.6413M13.6252 16.0857C13.7798 15.9674 13.9536 15.8313 14.154 15.6745L15.258 14.8104C16.4358 13.8885 17.21 13.2825 17.8517 12.6413"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className=" font-semibold min-w-0 pr-3 pt-3 pb-3">
            <p className="text-base font-semibold">
              Your Element on a
              <Link
                className="underline underline-offset-2"
                to={`/detail/${item.id}`}
                onClick={() => setIsActive(!isActive)}
              >
                <b className="text-blue-400"> {item.title} </b>
              </Link>
              has been approved!
            </p>
            <span className="flex items-center text-sm font-normal text-gray-400">
              {formatDateString(item.date, "nt")}
            </span>
          </div>
        </li>
      ),
      CHALLENGE: (
        <li className="pl-3 gap-3 w-full inline-flex bg-dark-600 false">
          <div className="flex-[0_0_40px] mt-1 items-start justify-center min-w-0 pt-2 pb-2">
            <div className="rounded-lg w-[40px] h-[40px] flex items-center justify-center purple text-offwhite bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="h-5 w-5 mr-0"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            </div>
          </div>
          <div className=" font-semibold min-w-0 pr-3 pt-3 pb-3">
            <p className="text-base font-semibold">
              New <b className="text-violet-400">CSS Challenge</b> is now open!
              <Link
                className="inline-flex justify-center px-2 py-1 mt-2 mb-2 text-sm font-semibold text-white border border-transparent rounded-md shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                to={`/challenges/css-challenge-${item.id}`}
              >
                View challenge
              </Link>
            </p>
            <span className="flex items-center text-sm font-normal text-gray-400">
              {item.date}
            </span>
          </div>
        </li>
      ),
      VARIATION: (
        <li className="pl-3 gap-3 w-full inline-flex bg-dark-600 false">
          <div className="flex-[0_0_40px] mt-1 items-start justify-center min-w-0 pt-2 pb-2">
            <div className="rounded-lg w-[40px] h-[40px] flex items-center justify-center bg-amber-300 text-amber-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5 mr-0"
              >
                <path d="M5 9c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 2 10.139 2 12 2s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 6.208 19 7.139 19 9v13l-1.794-1.537c-1.848-1.584-2.771-2.376-3.808-2.678a5 5 0 0 0-2.796 0c-1.037.302-1.96 1.094-3.808 2.678L5 22V9Z" />
              </svg>
            </div>
          </div>
          <div className=" font-semibold min-w-0 pr-3 pt-3 pb-3">
            <p className="text-base font-semibold">
              Someone has favorited your post!
            </p>
            <span className="flex items-center text-sm font-normal text-gray-400">
              6. October at 1:13
              <span className="flex items-center gap-1.5 px-2 py-1 text-sm font-semibold rounded-full text-offwhite">
                <img src={point} alt="" style={{ width: "24px" }} />
                10
              </span>
            </span>
          </div>
        </li>
      ),
    }[item.type];
    return <> {currentView} </>;
  };
  return (
    <div className="dropdown-container header-dropdown-menu dropdown-notifications">
      <button
        className={`button button--notifications hover:bg-dark-600 rounded-lg button--secondary px-3 border-transparent relative ${
          check.quantity !== 0 && "new"
        }`}
        data-count={check.quantity}
        ref={triggerRef}
        onClick={() => {
          setIsActive(!isActive);
          setCheck({ quantity: 0, element: [] });
          remove(ref(database, "/notifications/" + isLogin.id));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="mr-0"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M9 18.542a62.872 62.872 0 0 1-3.94-.313 1.676 1.676 0 0 1-1.404-2.195c.171-.513.343-1.018.389-1.561l.375-4.497a7.608 7.608 0 0 1 15.162 0l.375 4.499c.045.543.217 1.048.388 1.56a1.675 1.675 0 0 1-1.405 2.194c-1.31.145-2.624.25-3.94.313m-6 0V19a3 3 0 1 0 6 0v-.459m-6 0a62.83 62.83 0 0 0 6 0" />
        </svg>
      </button>
      <div
        ref={nodeRef}
        className={`dropdown-menu shadow-xl notifications right-auto lg:right-0 w-64 sm:w-96 text-offwhite bg-dark-600 ${
          isActive ? "open" : "closed"
        }`}
      >
        <div className="flex items-center px-4 py-2 text-base font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 mr-2 -translate-y-px"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          >
            <path d="M9 18.542a62.872 62.872 0 0 1-3.94-.313 1.676 1.676 0 0 1-1.404-2.195c.171-.513.343-1.018.389-1.561l.375-4.497a7.608 7.608 0 0 1 15.162 0l.375 4.499c.045.543.217 1.048.388 1.56a1.675 1.675 0 0 1-1.405 2.194c-1.31.145-2.624.25-3.94.313m-6 0V19a3 3 0 1 0 6 0v-.459m-6 0a62.83 62.83 0 0 0 6 0" />
          </svg>
          Notifications
        </div>
        <div className="overflow-y-auto custom-scrollbar max-h-96">
          <ul>
            {data.length > 0 &&
              data.map((item, i) => (
                <div key={i}>
                  <ViewNotifications item={item} />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notification;
