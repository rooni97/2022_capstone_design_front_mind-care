import React from "react";
import Clock from 'react-live-clock';

function GetKorTime() {
    return (
        <Clock format={'A hh:mm'} 
        ticking={true} />
    )
}

export default GetKorTime;