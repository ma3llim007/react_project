import React from "react";

const HeaderCard = ({ card }) => {
    return (
        <>
            <div className="w-full flex justify-center items-center text-start gap-5 border rounded hover:bg-gray-700 cursor-pointer ease-in-out duration-75">
                <div className="w-2/5">
                    <img src={card?.image} alt={card?.name} className="w-full h-16 rounded object-cover" loading="lazy" />
                </div>
                <div className="w-3/5">
                    <h5 className="mb-2 text-base font-semibold dark:text-white hover:text-primary">{card?.name}</h5>
                    <p className="text-base">Price: <strong>{Number(card?.price).toFixed(2)} x {card?.qty}</strong></p>
                </div>
            </div>
        </>
    );
};

export default HeaderCard;
