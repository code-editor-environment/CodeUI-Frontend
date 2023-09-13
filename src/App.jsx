import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/main/Home";
import store from "./store";
import MainLayout from "./layouts";
import Element from "./pages/main/Element";

import "./assets/css/styles.scss";
import Creators from "./pages/main/Creators";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="elements" element={<Element />} />
            <Route path="creators" element={<Creators />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
