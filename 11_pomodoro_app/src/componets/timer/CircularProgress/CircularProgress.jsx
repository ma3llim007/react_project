import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Clock from "../Clock/Clock";
import { StateContext } from "../../../context/StateProvider";

const CircularProgress = () => {
    const { progress, setProgress, initTime,time } = useContext(StateContext);
    
    useEffect(() => {
        setProgress(time / (initTime / 100));
    }, [setProgress,time]);
    
    return (
        <>
            <OuterCircle progress={progress}>
                <InnerCircle>
                    <Clock />
                </InnerCircle>
            </OuterCircle>
        </>
    );
};

export default CircularProgress;

const OuterCircle = styled.div`
    width: 35rem;
    height: 35rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: conic-gradient(${(props) => props.theme.colors.primary} ${({ progress }) => progress}%, transparent ${({ progress }) => progress}%);
`;
const InnerCircle = styled.div`
    width: 33.5rem;
    height: 33.5rem;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 50%;
    display: grid;
    place-items: center;
`;
