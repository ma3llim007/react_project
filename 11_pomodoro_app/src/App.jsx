import styled from "styled-components";
import Tags from "./componets/Tags/Tags";
import Timer from "./componets/timer/Timer";
import Model from "./componets/Model/Model";
import { FaCog } from "react-icons/fa";
import { useContext } from "react";
import { StateContext } from "./context/StateProvider";

const App = () => {
    const { handleModel } = useContext(StateContext);
    return (
        <>
            <Model />
            <Title>Pomodoro</Title>
            <Tags />
            <Timer />
            <CogIcon onClick={handleModel}>
                <FaCog />
            </CogIcon>
        </>
    );
};
export default App;

const Title = styled.h1`
    font-size: 6rem;
    padding: 2rem 0;
    text-align: center;
`;

const CogIcon = styled.div`
    display: flex;
    justify-content: center;
    font-size: 4rem;
    cursor: pointer;
`;
