import React from "react";
import FilterSection from "./components/FilterSection";
import SortSection from "./components/SortSection";
import ProductView from "./components/ProductView";

const Products = () => {
    return (
        <>
            <div
                className="grid grid-cols-2 w-[80%] mx-[10%]"
                style={{ gridTemplateColumns: "0.2fr 1fr" }}
            >
                <div>
                    <FilterSection></FilterSection>
                </div>
                <div>
                    <div className="gap-3">
                        <SortSection></SortSection>
                        <ProductView></ProductView>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
