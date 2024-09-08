import React, { useContext, useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Context from "@/context/context";
import CartCard from "./CartCard";
import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CartTable = () => {
    const {
        state: { cart },
        dispatch,
    } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(cart.reduce((total, item) => total + item.price * item.qty, 0));
    }, [cart]);

    return (
        <>
            <div className="relative overflow-x-auto rounded-xl">
                <h1 className="text-4xl text-center font-bold underline mb-4">CartIs Empty</h1>
                <Table className="w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
                    <TableHeader className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <TableRow>
                            <TableHead className="px-6 py-3 w-[100px] text-center">Image</TableHead>
                            <TableHead className="px-6 py-3 text-center">Name</TableHead>
                            <TableHead className="px-6 py-3 text-center">Product Price</TableHead>
                            <TableHead className="px-6 py-3 text-center">Rating</TableHead>
                            <TableHead className="px-6 py-3 text-center">Qty</TableHead>
                            <TableHead className="px-6 py-3 text-center">
                                Total Price <strong>(Price x Qty)</strong>
                            </TableHead>
                            <TableHead className="px-6 py-3 text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cart.map((ca) => (
                            <CartCard key={ca?.id} card={ca} />
                        ))}
                    </TableBody>
                </Table>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5">
                <Card className="py-5 px-3">
                    <CardContent>
                        <h1 className="text-2xl font-bold uppercase my-2">Sub-Total ({cart.length}) Items</h1>
                        <h2 className="text-xl font-bold uppercase my-2">Total: {totalPrice.toFixed(2)}</h2>
                        <Button variant="primary" size="full">
                            Proceed To Checkout
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default CartTable;
