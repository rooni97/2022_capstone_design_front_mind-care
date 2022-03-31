import React, {useEffect, useState} from 'react';
import getLocation from "./GetLocation";
import {CircularProgress} from "@mui/material";

function Map(props) {
    const { kakao } = window;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(loading)
    })

    useEffect(() => {
        let lat, lon;
        setLoading(true);
        getLocation().then(res => {
            const { kakao } = window;
            lat = res.coords.latitude;
            lon = res.coords.longitude;
            const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
            const options = { //지도를 생성할 때 필요한 기본 옵션
                center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
            };
            const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
            setLoading(false);
        })
    }, []);


    return (
        <div style={{width: '60vw', height: '60vh', backgroundColor: 'white'}}>
            <div id={"map"} style={{width: '100%', height: '100%'}}>
                <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><CircularProgress/></div>
            </div>
        </div>
    );
}

export default Map;