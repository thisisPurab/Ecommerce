import React, { useContext } from "react";
import { FilterContext } from "../../src/context/FilterContext";
import GridView from "../../src/components/GridView";
import ListView from "../../src/components/ListView";

const ProductView = () => {
    const { filter_products, isGridView } = useContext(FilterContext);
    // console.log(filter_products);

    if (isGridView) {
        return <GridView products={filter_products}></GridView>;
    } else {
        return <ListView products={filter_products}></ListView>;
    }
};

export default ProductView;
