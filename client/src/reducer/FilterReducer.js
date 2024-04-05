const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let prices = action.payload.map((element) => element.price);

            let maxPrice = Math.max(...prices);

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice: maxPrice,
                    price: maxPrice,
                },
            };
        case "SET_GRIDVIEW":
            return {
                ...state,
                isGridView: true,
            };
        case "SET_LISTVIEW":
            return {
                ...state,
                isGridView: false,
            };
        case "SORTING_CONDITION":
            let selectedCondition = document.getElementById("sort");
            let sortingConditionSelected =
                selectedCondition.options[selectedCondition.selectedIndex]
                    .value;
            // console.log(sortingConditionSelected);
            return {
                ...state,
                sortingCondition: sortingConditionSelected,
            };
        case "SORTED_DATA":
            let newSortedData;
            let tempSortData = [...action.payload];
            // console.log("run");
            const sortingProducts = (a, b) => {
                if (state.sortingCondition === "lowest") {
                    return a.price - b.price;
                }

                if (state.sortingCondition === "highest") {
                    return b.price - a.price;
                }

                if (state.sortingCondition === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (state.sortingCondition === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            };

            newSortedData = tempSortData.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortedData,
            };

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case "FILTERED_DATA":
            // let { all_products } = state;
            let tempFilterData = [...action.payload];

            const { text, category, company, colors, price } = state.filters;
            // console.log(category);
            // console.log(text);
            // console.log(company);
            if (text) {
                tempFilterData = tempFilterData.filter((element) => {
                    // console.log(element.name.toLowerCase().includes(text));

                    return element.name.toLowerCase().includes(text);
                });
            }

            if (category !== "All") {
                tempFilterData = tempFilterData.filter((element) => {
                    return element.category === category;
                });
            }

            if (company !== "All") {
                tempFilterData = tempFilterData.filter((element) => {
                    return element.company === company;
                });
            }

            if (colors !== "All") {
                tempFilterData = tempFilterData.filter((curElem) =>
                    curElem.colors.includes(colors)
                );
            }

            if (price) {
                tempFilterData = tempFilterData.filter((element) => {
                    return element.price <= price;
                });
            }

            // console.log(tempFilterData);
            return {
                ...state,
                filter_products: tempFilterData,
            };

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "All",
                    company: "All",
                    colors: "All",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: 0,
                },
            };

        default:
            return state;
    }
};

export default FilterReducer;
