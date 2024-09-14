import { useContext } from "react";
import styled, { css } from "styled-components";
import { StateContext } from "../../context/StateProvider";

const Tags = () => {
    const TagElement = ["Work", "Short Break", "Long Break"];
    const { activeTag, setActiveTag } = useContext(StateContext);

    const handleTagClick = (activeNum) => {
        setActiveTag(activeNum);
    };

    return (
        <>
            <TagContainer>
                {TagElement.map((tag, index) => {
                    return (
                        <Tag onClick={() => handleTagClick(index)} active={activeTag === index} key={index}>
                            {tag}
                        </Tag>
                    );
                })}
            </TagContainer>
        </>
    );
};

export default Tags;

const TagContainer = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    height: 5rem;
    width: 40rem;
    margin: 0 auto;
    border-radius: 5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
`;
const Tag = styled.button`
    all: unset;
    flex: 1;
    border-radius: 5rem;
    height: 4rem;
    cursor: pointer;
    font-weight: bolder;

    ${({ active }) =>
        active &&
        css`
            background: ${(props) => props.theme.colors.primary};
        `}
`;
