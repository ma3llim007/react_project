import styled from "styled-components";

const BackDrop = () => {
    return <Overlay />;
};

export default BackDrop;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
`;
