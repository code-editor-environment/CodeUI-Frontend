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
    <div className="main-container dark">
      <Header />
      <div className="root-container">
        {["elements", "detail"].includes(pathname) && <Sidebar />}
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
