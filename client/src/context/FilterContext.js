import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from "../../src/reducer/FilterReducer";

export const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    isGridView: true,
    sortingCondition: "lowest ",
    filters: {
        text: "",
        category: "All",
        company: "All",
        colors: "All",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useContext(AppContext);
    // console.log(products);

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW", payload: products });
    };

    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW", payload: products });
    };

    const getFilteredProducts = () => {
        return dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    };

    const sorting = () => {
        dispatch({ type: "SORTING_CONDITION", payload: products });
        // console.log(state.sortingCondition);
    };

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log(name, value);
        return dispatch({
            type: "UPDATE_FILTER_VALUE",
            payload: { name, value },
        });
    };

    const clearFilters = () => {
        // console.log("runrunrun3");
        return dispatch({ type: "CLEAR_FILTERS" });
    };

    useEffect(() => {
        dispatch({ type: "SORTED_DATA", payload: products });
        // console.log("run1");
    }, [products, state.sortingCondition]);

    useEffect(() => {
        dispatch({ type: "FILTERED_DATA", payload: products });
        // console.log("runrun2");
    }, [products, state.filters]);

    useEffect(() => {
        getFilteredProducts();
    }, [products]);

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                sorting,
                updateFilterValue,
                clearFilters,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
