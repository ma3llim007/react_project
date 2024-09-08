import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick }) => {
    const stars = Array.from({ length: 5 }, (_, i) => i);

    return (
        <div className="flex my-2">
            {stars.map((starIndex) => (
                <span
                    key={starIndex}
                    onClick={() => {
                        onClick(starIndex);
                    }}
                >
                    {rating > starIndex ? <AiFillStar className="text-yellow-600 text-base" /> : <AiOutlineStar className="text-yellow-600 text-base" />}
                </span>
            ))}
        </div>
    );
};

export default Rating;
