import React, { useContext } from "react";
import { AppContext } from "../context/ProductContext";
import Product from "./Product";

const FeaturedProducts = () => {
    const { isLoading, featureProducts } = useContext(AppContext);
    // console.log(featureProducts);
    if (isLoading) {
        return (
            <>
                <div>
                    <p>Loading...</p>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="w-screen my-10 bg-blue-50 py-12">
                <div className="w-[80%] mx-[10%]">
                    <p className="text-sm font-light">Check Now</p>
                    <h2 className="text-5xl font-semibold">
                        Featured Products
                    </h2>
                </div>
                <div className="w-[80%] mx-[10%] my-10 grid grid-cols-3 gap-8 rounded-3xl">
                    {featureProducts.map((ele) => {
                        return (
                            <Product
                                key={ele.id}
                                {...ele}
                            ></Product>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default FeaturedProducts;
