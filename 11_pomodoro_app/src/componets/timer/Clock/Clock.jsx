import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { StateContext } from "../../../context/StateProvider";

const Clock = () => {
    const { time, setTime, isActive, setIsActive, initTime } = useContext(StateContext);

    useEffect(() => {
        if (isActive && time > 0) {
            const interVal = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);

            return () => clearInterval(interVal);
        }
    }, [time, isActive]);

    const toggleClock = () => {
        setIsActive(!isActive);
    };
    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const second = time % 60;
        return `${min < 10 ? "0" + min : min} : ${second < 10 ? "0" + second : second}`;
    };
    const handleReset = () => {
        setTime(initTime);
        setIsActive(false);
    };
    return (
        <ClockContainer>
            <TimerText>{getTime(time)}</TimerText>
            <StartPauseButton onClick={toggleClock}>{isActive ? "Pause" : "Start"}</StartPauseButton>
            {time === 0 && <ResetButton onClick={handleReset}>Reset</ResetButton>}
        </ClockContainer>
    );
};

export default Clock;

const ClockContainer = styled.div`
    display: grid;
    place-items: center;
`;
const TimerText = styled.h3`
    font-size: 10rem;
`;

const StartPauseButton = styled.button`
    all: unset;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    cursor: pointer;
`;
const ResetButton = styled(StartPauseButton)`
    color: red;
`;
