import React from "react";
import Card from "../../src/components/Card";

const ListView = ({ products }) => {
    return (
        <>
            <div className="my-16">
                <div className="grid grid-cols-1 gap-5">
                    {products.map((product) => {
                        return (
                            <Card
                                key={product.id}
                                {...product}
                            ></Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ListView;
