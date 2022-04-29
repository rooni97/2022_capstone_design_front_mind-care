import React, { useState, useEffect } from 'react';
import Navigation from "../organisms/Navigation";
import styled from "styled-components";
import CustomCalendar from '../atoms/CustomCalendar';
import axios from 'axios';

function MyPage(props) {

    // const [userData, setUserData] = useState();

    // const getData = async () => {
    //     try {
    //         setUserData(null);
    //         const res = await axios.get('URL', {
    //             parameter: {
    //                 date: '달력 클릭한 해당 날짜??'
    //             }
    //         });
    //         setUserData(res.data);
    //     } catch (e) {
    //         console.log('Error');
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    // if (!userData) return null;

    return (
        <div id="0">
            <Navigation />
            <PageContainer>
                <div style={{ marginLeft: 80 }}>
                    <h1 style={{ color: 'white', fontSize: 50 }}>마이 페이지</h1>
                    <h2 style={{ color: '#AE946A' }}>한달간의 감정, 음악 통계를 확인해보세요</h2>
                </div>

                <div style={{ marginLeft: 80, display: 'flex', flexDirection: 'column' }}>
                    <CustomCalendar />



                    {/* <div> 날짜별 유저 정보 한줄로 출력
                        {userData.map(user => (
                            <div key={user.date} style={{ margin: '10px' }}>
                                {user.id} {user.title}
                            </div>
                        ))}
                    </div> */}



                </div>
            </PageContainer>
        </div>
    );
}

export default MyPage;

const PageContainer = styled.div`
  width: 100%;
  height: 3000px;
  padding-top: 120px;
  background-color: black;
  .slick {
    margin: auto;
    width: 95%;
    height: 90vh;
  }
`