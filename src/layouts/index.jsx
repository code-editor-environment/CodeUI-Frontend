import { Outlet } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Header from "./header";
import Footer from "./footer";
import { ModalContainer } from "../components/Modal";
import { ToastContainer } from "react-toastify";
import Sidebar from "./sidebar";
import { useParseUrl } from "../hooks/useParseUrl";
import { db } from "../configs/firebase.configs";
import { useDispatch } from "react-redux";
import {
  getElements,
  getCategories,
  getTotalElements,
} from "../store/element/elements-slice";
import { useEffect, useState } from "react";
import { useFetchElements } from "../hooks/useFetchElements";
const MainLayout = () => {
  const dispatch = useDispatch();
  const { pathname } = useParseUrl();
  const fetchElements = useFetchElements();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const fetchPost = async () => {
    await getDocs(collection(db, "elements")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getElements(newData));
    });
    await getDocs(collection(db, "categories")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getCategories(newData));
      dispatch(
        getTotalElements({
          windowSize: windowSize.width > 1600 ? 15 : 12,
        })
      );
    });
  };

  useEffect(
    () => {
      // fetchElements();
      fetchPost();
    }, // eslint-disable-next-line
    []
  );

  return (
    <div
      className="main-container dark"
      style={{ backgroundColor: pathname === "" ? "#030014" : "#171717" }}
    >
      <Header />
      <div className="root-container">
        {(/element/.test(pathname) || /profile/.test(pathname)) && <Sidebar />}
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </div>
      {!/chat/.test(pathname) && <Footer />}
      <ModalContainer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
