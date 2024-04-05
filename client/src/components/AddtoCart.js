import React, { useContext, useState } from "react";
import CartTotalAmountToggle from "./CartTotalAmountToggle";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const AddtoCart = ({ products }) => {
    const { addItemToCart } = useContext(CartContext);

    const [selected, setSelected] = useState(products.colors[0]); // Default to the first color

    const handleClick = (color) => {
        setSelected(color);
    };

    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    const { id, colors, stock } = products;

    return (
        <>
            <div className="flex items-center">
                Color:
                {colors.map((color, index) => {
                    return (
                        <button
                            key={index}
                            className="h-5 w-5 border-2 border-slate-400 ml-3 rounded-full"
                            style={{
                                backgroundColor: color,
                                border:
                                    selected === color
                                        ? "2px solid black"
                                        : "2px solid transparent",
                                opacity: selected === color ? "0.7" : "100",
                            }}
                            onClick={() => handleClick(color)}
                        ></button>
                    );
                })}
            </div>
            <CartTotalAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />
            <NavLink
                to="/cart"
                onClick={() => addItemToCart(id, selected, amount, products)}
            >
                <button className="border-2 border-black rounded-full px-5 py-1">
                    Add To Cart
                </button>
            </NavLink>
        </>
    );
};

export default AddtoCart;
