import React, { useState } from 'react';
import Calendar from 'react-calendar'
import './CustomCalendar.css';
import moment from 'moment';
import styled from "styled-components";

function CustomCalendar() {
    const [clickVal, setClickVal] = useState(new Date());
  
    return (
      <Wrapping>
        <Calendar onChange={setClickVal} value={clickVal} />
            <CalendarValue>
                <h2>{moment(clickVal).format("YYYY년 MM월 DD일")} </h2>
            </CalendarValue> 
      </Wrapping>
    );
}

export default CustomCalendar;

const Wrapping = styled.div`
    display: flex;
    margin-top: 50px;

    @media screen and (max-width: 830px) {
        flex-direction: column;
    }
`

const CalendarValue = styled.div`
    box-sizing: border-box;
    color: white;
    margin-left: 5%;
    
    @media screen and (max-width: 830px) {
        margin-left: 0%;
    }
`