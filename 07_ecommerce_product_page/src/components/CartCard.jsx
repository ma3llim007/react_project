import React, { useContext, useMemo } from "react";
import { TableCell, TableRow } from "./ui/table";
import Rating from "./Rating";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AiFillDelete } from "react-icons/ai";
import Context from "@/context/context";
import { toast } from "react-toastify";

const CartCard = ({ card }) => {
    const { state, dispatch } = useContext(Context);

    const options = useMemo(() => [...Array(card?.inStock).keys()].map((x) => x + 1), [card?.inStock]);

    // Remove Product To Cart Handler
    const handleRemoveCart = (id) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: id,
        });
        toast.error("Product Item Successfully Remove Form Cart!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    // Update Cart Qty
    const handleQtyChange = (id, qty) => {
        dispatch({
            type: "QTY_CHANGE",
            payload: {
                id,
                qty,
            },
        });
        toast.info("Product Item Qty Update Successfully!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <TableRow className="border-b cursor-pointer hover:bg-gray-700 hover:text-white">
            <TableCell className="w-[200px] font-medium px-6 py-3">
                <img className="w-full rounded-sm object-cover h-16" src={card?.image} alt={card?.name} />
            </TableCell>
            <TableCell className="font-bold px-6 py-3">{card?.name}</TableCell>
            <TableCell className="font-medium px-6 py-3">{card?.price}</TableCell>
            <TableCell className="font-medium justify-center px-6 py-3">
                <div className="flex justify-center">
                    <Rating rating={card?.rating} />
                </div>
            </TableCell>
            {/* <TableCell className="font-medium px-6 py-3">{card?.qty}</TableCell> */}
            <TableCell className="font-medium px-6 py-3">
                <Select onValueChange={(e) => handleQtyChange(card?.id, e)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={card?.qty} />
                    </SelectTrigger>
                    <SelectContent>
                        {options?.length > 0 &&
                            options.map((option) => (
                                <SelectItem value={option} key={option}>
                                    {option}
                                </SelectItem>
                            ))}
                    </SelectContent>
                </Select>
            </TableCell>
            <TableCell className="font-medium px-6 py-3">{Number(card?.qty * card?.price).toFixed(2)}</TableCell>
            <TableCell className="font-medium px-6 py-3" onClick={() => handleRemoveCart(card?.id)}>
                <AiFillDelete className="text-xl text-red-500" />
            </TableCell>
        </TableRow>
    );
};
export default CartCard;
