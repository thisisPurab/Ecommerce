import FormatPrice from "../../src/helpers/FormatPrice";

const CartItem = ({
    id,
    formattedDate,
    name,
    image,
    selected,
    price,
    amount,
}) => {
    return (
        <>
            <div className="w-full my-5">
                <div className="flex justify-around items-center mb-2">
                    <div className="w-1/5">{formattedDate}</div>
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
                    <div className="w-1/5">{amount}</div>
                    <div className="w-1/5">
                        <p>
                            <FormatPrice price={price * amount}></FormatPrice>
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
};

export default CartItem;
