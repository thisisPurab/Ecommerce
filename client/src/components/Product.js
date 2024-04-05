import React from "react";
import { NavLink } from "react-router-dom";
import SingleProduct from "../SingleProduct";
import FormatPrice from "../helpers/FormatPrice";

function Product(ele) {
    return (
        <>
            <NavLink
                to={`/singleproduct/:${ele.id}`}
                element={<SingleProduct />}
            >
                <div className="h-full bg-blue-100 rounded-3xl hover:scale-110 hover:opacity-95 hover:ease-in duration-200 ">
                    <div>
                        <img
                            src={ele.image}
                            alt="random images"
                            className="rounded-3xl"
                        />
                        <div className="p-5 flex justify-between">
                            <p>{ele.name}</p>
                            <p>
                                {<FormatPrice price={ele.price}></FormatPrice>}
                            </p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
}

export default Product;
