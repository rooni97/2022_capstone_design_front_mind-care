import logo from './logo.svg';
import './App.css';
import MainPage from "./components/pages/MainPage";
import DiaryPage from "./components/pages/DiaryPage"
import { Route, Routes } from 'react-router-dom';
import CommunityPage from "./components/pages/CommunityPage";
import LoginPage from "./components/pages/LoginPage";
import MyPage from "./components/pages/MyPage";
import MusicBehaviorPage from "./components/pages/MusicBehaviorPage";
import RestaurantPage from "./components/pages/RestaurantPage";

function App() {
  return (
    <div>
        <Routes>
            <Route exact path={"/"} element={<MainPage />} />
            <Route exact path={"/diary"} element={<DiaryPage />} />
            <Route exact path={"/music"} element={<MusicBehaviorPage />} />
            <Route exact path={"/restaurant"} element={<RestaurantPage />} />
            <Route exact path={"/community"} element={<CommunityPage />} />
            <Route exact path={"/login"} element={<LoginPage />} />
            <Route exact path={"/mypage"} element={<MyPage />} />
        </Routes>
    </div>
  );
}

export default App;
