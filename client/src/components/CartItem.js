import React, { useContext } from "react";
import FormatPrice from "../../src/helpers/FormatPrice";
import { MdDelete } from "react-icons/md";
import CartTotalAmountToggle from "./CartTotalAmountToggle";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, name, image, selected, price, amount }) => {
    const { removeProduct, setDecrease, setIncrease } = useContext(CartContext);

    // const [amount, setAmount] = useState(1);

    // const setDecrease = () => {
    //     // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    // };

    // const setIncrease = () => {
    //     // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    // };

    return (
        <>
            <div className="w-full my-5">
                <div className="flex justify-around items-center mb-2">
                    <div className="flex gap-3 w-1/5">
                        <div>
                            <img
                                src={image}
                                alt={name}
                                style={{ height: "50px" }}
                            />
                        </div>
                        <div>
                            <p>{name}</p>
                            <div className="flex justify-start items-center gap-1">
                                <p>Color:</p>
                                <div
                                    className="h-4 w-4 rounded-full border-2 border-slate-400"
                                    style={{ backgroundColor: selected }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <p>
                            <FormatPrice price={price}></FormatPrice>
                        </p>
                    </div>
                    <div className="w-1/5">
                        <CartTotalAmountToggle
                            amount={amount}
                            setDecrease={() => setDecrease(id)}
                            setIncrease={() => setIncrease(id)}
                        />
                    </div>
                    <div className="w-1/5">
                        <p>
                            <FormatPrice price={price * amount}></FormatPrice>
                        </p>
                    </div>
                    <div className="w-1/5">
                        <MdDelete
                            className="text-3xl cursor-pointer"
                            onClick={() => removeProduct(id)}
                        />
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
};

export default CartItem;
