import React from "react";
import Product from "../../src/components/Product";

const GridView = ({ products }) => {
    return (
        <>
            <div className="my-16">
                <div className="grid grid-cols-3 gap-5">
                    {products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                {...product}
                            ></Product>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default GridView;
