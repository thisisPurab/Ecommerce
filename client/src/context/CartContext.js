import { createContext, useEffect, useReducer } from "react";
import reducer from "../../src/reducer/CartReducer";

export const CartContext = createContext();

const getLocalStorageData = () => {
    let localStorageData = localStorage.getItem("storeCartData");
    if (localStorageData == []) {
        return [];
    } else {
        return JSON.parse(localStorageData);
    }
};

const initialState = {
    // cart: [],
    cart: getLocalStorageData(),
    totatItems: "",
    totalCost: "",
    shippingFees: 50000,
};

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addItemToCart = (id, selected, amount, products) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, selected, amount, products },
        });
    };

    const removeProduct = (id) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: id });
    };

    const clearCart = () => {
        // console.log("runrunrunrun4");
        dispatch({ type: "CLEAR_CART" });
    };

    const setDecrease = (id) => {
        // console.log("run");
        dispatch({ type: "SET_DECREASE", payload: id });
        // console.log("hello");
    };

    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id });
    };

    useEffect(() => {
        dispatch({ type: "CART_ICON_NUMBER_UPDATE" });
        dispatch({ type: "TOTA_COST_WITHOUT_SHIPPING" });
        // console.log("run");
        localStorage.setItem("storeCartData", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                ...state,
                addItemToCart,
                removeProduct,
                clearCart,
                setDecrease,
                setIncrease,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
