import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { ModalContainer } from "../components/Modal";
import { ToastContainer } from "react-toastify";
import Sidebar from "./sidebar";
import { useParseUrl } from "../hooks/useParseUrl";
const MainLayout = () => {
  const { pathname } = useParseUrl();
  return (
    <div className="main-container dark" style={{ backgroundColor: pathname=== ""?"#030014":"#171717" }}>
      <Header />
      <div className="root-container">
        {!["", "creators", "subscription"].includes(pathname) && <Sidebar />}
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </div>
      <Footer />
      <ModalContainer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
