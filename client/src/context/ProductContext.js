import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../../src/reducer/ProductRecucer";

export const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isloading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "TRY_LOADING" });
        try {
            const result = await axios.get(url);
            const products = await result.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    const getSingleProduct = async (url) => {
        dispatch({ type: "SINGLE_LOADING" });
        try {
            const singleResult = await axios.get(url);
            const singleProduct = await singleResult.data;
            dispatch({ type: "SET_SINGLE_DATA", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SINGLE_ERROR" });
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};
