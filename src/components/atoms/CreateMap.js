import React, {useEffect} from 'react';
import getLocation from "./GetLocation";
import {CircularProgress} from "@mui/material";
import { Link } from 'react-router-dom';

const { kakao } = window

function CreateMap(props) {
    useEffect(() => {
        getLocation()
            .then(res => {
            const lat = res.coords.latitude;
            const lon = res.coords.longitude;
                var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
                const container = document.getElementById('myMap')
                const options = {
                    center: new kakao.maps.LatLng(lat, lon),
                    level: 3,
                }
                const map = new kakao.maps.Map(container, options)

                const ps = new kakao.maps.services.Places()

                const psOptions = {
                    location: new kakao.maps.LatLng(lat, lon),
                    radius: 500,
                }

                ps.keywordSearch(props.food, placesSearchCB, psOptions)

                function placesSearchCB(data, status, pagination) {
                    if (status === kakao.maps.services.Status.OK) {
                        let bounds = new kakao.maps.LatLngBounds()

                        for (let i = 0; i < data.length; i++) {
                            displayMarker(data[i])
                            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                        }

                        map.setBounds(bounds)
                    }
                }

                function displayMarker(place) {
                    let marker = new kakao.maps.Marker({
                        map: map,
                        position: new kakao.maps.LatLng(place.y, place.x),
                    })

                    // 마커에 클릭이벤트를 등록합니다
                    kakao.maps.event.addListener(marker, 'mouseover', function () {
                        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
                        infowindow.open(map, marker)
                    })
                    kakao.maps.event.addListener(marker, 'click', function () {
                        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                        console.log(place.place_url);
                        window.open(place.place_url, '_blank');
                    })
                }

            })

    }, [props.food])


    return (
        <div
            id="myMap"
            style={{
                width: '70vw',
                height: '70vh',
            }}>
            <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress />
            </div>
        </div>
    )
}

export default CreateMap;