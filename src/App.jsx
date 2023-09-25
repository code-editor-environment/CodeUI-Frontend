import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/main/Home";
import store from "./store";
import MainLayout from "./layouts";
import Element from "./pages/main/Element";
import Creators from "./pages/main/Creators";
import Profile from "./pages/main/Profile";
import Detail from "./pages/main/Detail";
import Err from "./pages/main/Err";
import "./assets/css/styles.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="elements" element={<Element />} />
            <Route path="detail/:postId" element={<Detail />} />
            <Route path="creators" element={<Creators />} />
            <Route path="profile/:login" element={<Profile />} />
          </Route>
          <Route path="*" element={<Err />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
