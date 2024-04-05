const ProductRecucer = (state, action) => {
    if (action.type === "TRY_LOADING") {
        return {
            ...state,
            isLoading: true,
        };
    }
    if (action.type === "SET_API_DATA") {
        const featureData = action.payload.filter((element) => {
            return element.featured === true;
        });
        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureData,
        };
    }
    if (action.type === "API_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true,
        };
    }
    if (action.type === "SINGLE_LOADING") {
        return {
            ...state,
            isSingleLoading: true,
        };
    }
    if (action.type === "SET_SINGLE_DATA") {
        return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload,
        };
    }
    if (action.type === "SINGLE_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true,
        };
    }

    return state;
};

export default ProductRecucer;
