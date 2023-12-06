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
import "./assets/css/tailwind.scss";
import Subscription from './pages/main/Subscription';
import Create from "./pages/main/Create";
import ChatBox from "./pages/main/Chat";
import VideoCall from "./pages/main/Chat/videoCall";
import Integration from "./core/integration";
import Challenges from "./pages/main/Challenges";
import DetailChallenges from "./pages/main/Challenges/detailChallenges";
import Guidelines from "./pages/main/Guidelines";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="elements" element={<Element />} />
            <Route path="detail/:postId" element={<Detail />} />
            <Route path="request" element={<Challenges />} />
            <Route path="request/:requestId" element={<DetailChallenges />} />
            <Route path="creators" element={<Creators />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="guidelines" element={<Guidelines />} />
            <Route path="profile/:accountID" element={<Profile />} />
            <Route path="chat" element={<ChatBox />} />
            <Route path="chat/:chatId" element={<VideoCall />} />
          </Route>
          <Route path="*" element={<Err />} />
          <Route path="/integration/:postId" element={<Integration />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
