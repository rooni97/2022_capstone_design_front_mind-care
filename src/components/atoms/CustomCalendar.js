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
    margin-top: 100px;
`

const CalendarValue = styled.div`
    margin: 0px 0px 0px 15%;
    box-sizing: border-box;
    color: white;
`