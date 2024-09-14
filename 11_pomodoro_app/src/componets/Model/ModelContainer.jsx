import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../context/StateProvider";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { Field, Form, Formik } from "formik";

const ModelContainer = () => {
    const { handleModel, workTime, setWorkTime, shortBreakTime, setShortBreakTime, longBreakTime, setLongBreakTime } = useContext(StateContext);

    return (
        <Container>
            <ModelContent initial={{ y: "-100vh", scale: 0 }} animate={{ y: 0, scale: 1 }} exit={{ y: "-100vh", scale: 0 }}>
                <ModelHeader>
                    <ModelTitle>Setting</ModelTitle>
                    <ModelCloseButton onClick={handleModel}>
                        <FaWindowClose />
                    </ModelCloseButton>
                </ModelHeader>
                <ModelBody>
                    <Formik
                        initialValues={{
                            work: workTime / 60,
                            short: shortBreakTime / 60,
                            long: longBreakTime / 60,
                        }}
                        onSubmit={(values) => {
                            setWorkTime(values.work * 60);
                            setShortBreakTime(values.short * 60);
                            setLongBreakTime(values.long * 60);
                            handleModel();
                        }}
                    >
                        <Form>
                            <InputWrapper>
                                <FormControl>
                                    <label htmlFor="work">Work</label>
                                    <Field name="work" min="1" max="60"></Field>
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="short">Short Break </label>
                                    <Field name="short" min="1" max="60"></Field>
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="long">Long Break</label>
                                    <Field name="long" min="1" max="60"></Field>
                                </FormControl>
                            </InputWrapper>
                            <ButtonWrapper>
                                <ApplyButton type="submit">Submit</ApplyButton>
                            </ButtonWrapper>
                        </Form>
                    </Formik>
                </ModelBody>
            </ModelContent>
        </Container>
    );
};

export default ModelContainer;

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    z-index: 150;
`;
const ModelContent = styled(motion.div)`
    width: 60rem;
    height: 40rem;
    background-color: white;

    @media (max-width: 660px) {
        width: 80%;
    }
`;
const ModelHeader = styled.div`
    color: black;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
`;
const ModelTitle = styled.h3`
    font-size: 3rem;
`;
const ModelCloseButton = styled.button`
    all: unset;
    font-size: 3rem;
`;
const ModelBody = styled.div``;

const InputWrapper = styled.div`
    display: flex;
    padding: 1rem;
    gap: 2rem;
`;
const FormControl = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    color: black;
    gap: 0.7rem;
    label {
        font-size: 2rem;
    }
    input {
        font-size: 2rem;
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid black;
        background: #ead8fc;
        width: 100%;
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const ApplyButton = styled.button`
    all: unset;
    padding: 1rem 4rem;
    font-size: 2rem;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem;
    cursor: pointer;
`;
