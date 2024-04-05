const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, selected, amount, products } = action.payload;
            // console.log(id, selected, amount, products);

            let existingProduct = state.cart.find(
                (element) => element.id === id + selected
            );

            if (existingProduct) {
                let updatedProducts = state.cart.map((element) => {
                    if (element.id === id + selected) {
                        let newAmount = element.amount + amount;

                        if (newAmount >= element.max) {
                            newAmount = element.max;
                        }

                        return {
                            ...element,
                            amount: newAmount,
                        };
                    } else {
                        return { ...element };
                    }
                });
                return {
                    ...state,
                    cart: updatedProducts,
                };
            } else {
                let cartProduct = {
                    id: id + selected,
                    name: products.name,
                    selected,
                    amount,
                    image: products.image[0].url,
                    price: products.price,
                    max: products.stock,
                };

                return {
                    ...state,
                    cart: [...state.cart, cartProduct],
                };
            }

        case "REMOVE_PRODUCT":
            let updatedCart = state.cart.filter(
                (element) => element.id !== action.payload
            );

            return {
                ...state,
                cart: updatedCart,
            };

        case "CLEAR_CART":
            // console.log("runbrorun");
            return {
                ...state,
                cart: [],
            };

        case "SET_DECREASE":
            // console.log("runrun");
            let updatedProducts = state.cart.map((element) => {
                if (element.id === action.payload) {
                    let decreasedAmount = element.amount - 1;

                    if (decreasedAmount <= 1) {
                        decreasedAmount = 1;
                    }

                    return {
                        ...element,
                        amount: decreasedAmount,
                    };
                } else {
                    return element;
                }
            });

            return {
                ...state,
                cart: updatedProducts,
            };

        case "SET_INCREASE":
            let updatedProduct = state.cart.map((element) => {
                if (element.id === action.payload) {
                    let increasedAmount = element.amount + 1;

                    if (increasedAmount >= element.max) {
                        increasedAmount = element.max;
                    }

                    return {
                        ...element,
                        amount: increasedAmount,
                    };
                } else {
                    return element;
                }
            });

            return {
                ...state,
                cart: updatedProduct,
            };

        case "CART_ICON_NUMBER_UPDATE":
            let updatedIconValue = state.cart.reduce((accumulator, element) => {
                let { amount } = element;
                accumulator += amount;
                return accumulator;
            }, 0);

            return {
                ...state,
                totatItems: updatedIconValue,
            };

        case "TOTA_COST_WITHOUT_SHIPPING":
            let updatedCostWithoutShipping = state.cart.reduce(
                (accumulator, element) => {
                    let { price, amount } = element;
                    accumulator = accumulator + amount * price;
                    // console.log(accumulator);
                    return accumulator;
                },
                0
            );
            // console.log(updatedCostWithoutShipping);

            return {
                ...state,
                totalCost: updatedCostWithoutShipping,
            };

        default:
            return {
                ...state,
            };
    }
};

export default CartReducer;
