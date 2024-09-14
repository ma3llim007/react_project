import React, { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [workTime, setWorkTime] = useState(25 * 60);
    const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
    const [longBreakTime, setLongBreakTime] = useState(30 * 60);
    const [initTime, setInitTime] = useState(0);
    const [activeTag, setActiveTag] = useState(0);
    const [progress, setProgress] = useState(100);
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleModel = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        switch (activeTag) {
            case 0:
                setTime(workTime);
                setInitTime(workTime);
                break;
            case 1:
                setTime(shortBreakTime);
                setInitTime(shortBreakTime);
                break;
            case 2:
                setTime(longBreakTime);
                setInitTime(longBreakTime);
                break;
            default:
                break;
        }
    }, [activeTag, workTime, shortBreakTime, longBreakTime]);

    return (
        <StateContext.Provider
            value={{
                activeTag,
                setActiveTag,
                progress,
                setProgress,
                time,
                setTime,
                isActive,
                setIsActive,
                initTime,
                setInitTime,
                isOpen,
                handleModel,
                workTime,
                setWorkTime,
                shortBreakTime,
                setShortBreakTime,
                longBreakTime,
                setLongBreakTime,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;
