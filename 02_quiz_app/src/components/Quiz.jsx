import { useEffect, useRef, useState } from "react";
import { quizData } from "../../quizData";

const Quiz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSelected, setIsSelected] = useState(null);
    const [score, setScore] = useState(0);
    const timeoutRef = useRef(null);

    // Handle Option To Check Correct Answer
    const handleOptionClick = (option) => {
        const answer = quizData[currentIndex]?.answer;
        if (answer === option) {
            setIsSelected(true);
            setScore((pre) => pre + 1);
        } else {
            setIsSelected(false);
        }
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((pre) => pre + 1);
            setIsSelected(null);
        }, 1000);
    };

    // Cleanup on unmount to avoid potential memory leaks
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Reset Game
    const resetGame = () => {
        setCurrentIndex(0);
        setIsSelected(null);
        setScore(0);
    };

    return (
        <>
            <div className="w-3/5 bg-white rounded-lg p-12">
                <div className="mx-auto px-12">
                    <h1 className="font-semibold text-3xl text-center">Quiz App</h1>
                    <hr className="border-black my-3" />
                    {currentIndex < quizData.length ? (
                        <>
                            <div className="flex flex-col">
                                <h2 className="text-wrap my-4 text-[23px] font-medium">
                                    {currentIndex + 1}. {quizData[currentIndex]?.question}
                                </h2>
                                <ul className="flex flex-col gap-3">
                                    {quizData[currentIndex].options.map((option, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleOptionClick(option)}
                                            className={`border-2 px-2 py-3 rounded-lg cursor-pointer ${
                                                isSelected !== null &&
                                                (option === quizData[currentIndex]?.answer
                                                    ? "border-green-700"
                                                    : "border-red-700")
                                            }`}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8">
                                <p>
                                    {currentIndex + 1} Of {quizData.length} Questions
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="mx-auto">
                            <h1 className="font-semibold text-3xl text-center">
                                Your Scored {score} Of {quizData.length}!
                            </h1>
                            <div className="flex flex-col justify-center items-center my-4">
                                <button
                                    onClick={resetGame}
                                    className="w-52 py-2 px-4 bg-purple-600 rounded-lg text-white text-2xl"
                                >
                                    Reset Game
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Quiz;
