import './App.css';
import MainPage from "./components/pages/MainPage";
import DiaryPage from "./components/pages/DiaryPage"
import { Route, Routes, Navigate } from 'react-router-dom';
import CommunityPage from "./components/pages/CommunityPage";
import LoginPage from "./components/pages/LoginPage";
import MyPage from "./components/pages/MyPage";
import MusicBehaviorPage from "./components/pages/MusicBehaviorPage";
import RestaurantPage from "./components/pages/RestaurantPage";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loginInformation, loginState } from "./store/LoginInfo";
import axios from "axios";

function App() {
    const [loginInfo, setLoginInfo] = useRecoilState(loginInformation);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

    const requestLoginInfo = async () => {
        await axios.get(`http://${process.env.REACT_APP_REQUEST_URL}:8080/user/${localStorage.getItem("usernum")}`,
            {headers: {
                    ['x-user-num']: localStorage.getItem("usernum"),
                    ['Authorization']: JSON.parse(localStorage.getItem("jwt"))
                }
            })
            .then((res) => {
                setLoginInfo(res.data);
                setLoginInfo((prev) => {
                    console.log(prev)
                    return prev;
                })
                setIsLoggedIn(true);
            })
            .catch((err) => {
                console.log(err)
                setLoginInfo({});
                setIsLoggedIn(false);
                localStorage.clear();
            })
    }

    useEffect(() => {
        requestLoginInfo();
        setLoginInfo((prev) => {
            console.log(prev)
            return prev;
        })
    }, []);


    return (
        <div>
            <Routes>
                <Route exact path={"/"} element=<MainPage />  />
                <Route exact path={"/diary"} element={isLoggedIn ? <DiaryPage /> : <Navigate replace to={"/login"} />} />
                <Route exact path={"/music"} element={isLoggedIn ? <MusicBehaviorPage /> : <Navigate replace to={"/login"} />} />
                <Route exact path={"/restaurant"} element={isLoggedIn ? <RestaurantPage /> : <Navigate replace to={"/login"} />} />
                <Route exact path={"/community"} element={isLoggedIn ? <CommunityPage /> : <Navigate replace to={"/login"} />} />
                <Route exact path={"/login"} element={isLoggedIn ? <Navigate replace to={"/"} /> : <LoginPage />} />
                <Route exact path={"/mypage"} element={isLoggedIn ? <MyPage /> : <Navigate replace to={"/login"} />} />
            </Routes>
        </div>
    );
}

export default App;
