import { Outlet } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
} from "firebase/firestore";
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
// import { useFetchElements } from "../hooks/useFetchElements";
const MainLayout = () => {
  const dispatch = useDispatch();
  const { pathname } = useParseUrl();
  // const fetchElements = useFetchElements();
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
  const [lastVisible, setLastVisible] = useState(null);
  const [documents, setDocuments] = useState([]);
  const fetchPost = async () => {
    const q = lastVisible
      ? query(collection(db, "elements"), startAfter(lastVisible), limit(25))
      : query(collection(db, "elements"), limit(20));
    const querySnapshot = await getDocs(q);
    const newDocuments = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDocuments((prevDocuments) => [...prevDocuments, ...newDocuments]);

    // Set the last document from the batch to the state
    const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    setLastVisible(newLastVisible);
    // await getDocs(query(collection(db, "elements"), limit(100))).then(
    //   (querySnapshot) => {
    //     const newData = querySnapshot.docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id,
    //     }));
    //     dispatch(getElements(newData));
    //   }
    // );
  };
  const fetchCategories = async () => {
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
      if (lastVisible === undefined) {
        dispatch(getElements(documents));
      } else {
        fetchPost();
      }
    }, // eslint-disable-next-line
    [lastVisible]
  );

  useEffect(
    () => {
      fetchCategories();
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
