import React from "react";
import { NavLink } from "react-router-dom";
import SingleProduct from "../SingleProduct";
import FormatPrice from "../helpers/FormatPrice";

const Card = (ele) => {
    return (
        <>
            <div className="w-11/12 bg-blue-100 rounded-3xl ">
                <div className="flex">
                    <img
                        src={ele.image}
                        alt="random images"
                        className="rounded-3xl h-[300px] hover:scale-105 hover:opacity-90 hover:ease-in duration-200 "
                    />
                    <div className="p-5">
                        <p className="text-3xl my-2">{ele.name}</p>
                        <p className="mb-3">
                            {<FormatPrice price={ele.price}></FormatPrice>}
                        </p>
                        <p className="text-sm mb-3 font-light">
                            {ele.description.slice(0, 249)}...
                        </p>
                        <NavLink
                            to={`/singleproduct/:${ele.id}`}
                            element={<SingleProduct />}
                        >
                            <button className="mt-10 border-2 border-black rounded-full py-2 px-4">
                                Read More
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
