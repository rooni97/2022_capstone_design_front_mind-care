import React, { useState } from 'react'

function GetUserTime() {
    const [timer, setTimer] = useState('');

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        setTimer(`${hours}:${minutes}`)
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }

    startTimer()

    return (
        timer
    )
}

export default GetUserTime;