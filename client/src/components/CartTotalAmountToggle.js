import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartTotalAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <div className="">
            <div className="flex items-center">
                <button
                    className="border-2 border-r-0 rounded-l-full border-black p-2"
                    onClick={() => setDecrease()}
                >
                    <FaMinus />
                </button>
                <div className="border-2 border-r-0 border-l-0  border-black p-1 px-6">
                    {amount}
                </div>
                <button
                    className="border-2 border-l-0 rounded-r-full border-black p-2"
                    onClick={() => setIncrease()}
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default CartTotalAmountToggle;
