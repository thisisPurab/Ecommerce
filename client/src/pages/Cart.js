import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { getAuth } from "firebase/auth";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const { cart, clearCart, totalCost, shippingFees } =
        useContext(CartContext);
    // console.log(cart);
    // console.log(totalCost);

    const Auth = getAuth();
    const user = Auth.currentUser.uid;
    // console.log(user);

    const timeStamp = Date.now();
    // console.log(timeStamp);

    const data_key_id = user + timeStamp;

    // Create a new Date object
    var currentDate = new Date();

    // Get the current date components
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    var day = currentDate.getDate();

    var formattedDate =
        year +
        "-" +
        (month < 10 ? "0" + month : month) +
        "-" +
        (day < 10 ? "0" + day : day);
    console.log(formattedDate);

    const makePayment = async () => {
        const stripe = await loadStripe(
            "pk_test_51P1Tp0SFod5TIEmUcw1VSsrr5v7Asy4FBWjAaG1ZzupQnGVDhoyqQtBWPXWNC20BcCJXUiz7eKGi4wAQFwP1bBcn00vitO7g05"
        );

        const body = cart;
        // console.log(...cart);

        const headers = {
            "Content-Type": "application/json",
        };

        const response = await fetch(
            "http://localhost:8000/api/create-checkout-session",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        );

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.log((await result).error);
        }
    };

    const orderConfirmation = async () => {
        try {
            // Alert message before the loop

            makePayment();

            alert("Order Comfirmed !");

            // Loop through each object and add it to Firestore
            for (const element of cart) {
                await setDoc(doc(db, "Order_History", data_key_id), {
                    ...element,
                    user,
                    formattedDate,
                });
            }

            // Call a function after the loop completes
            clearCart();
        } catch (error) {
            console.error("Error adding objects to Firestore:", error);
            alert(
                "Error adding objects to Firestore. Please check the console for details."
            );
        }
    };

    if (cart.length === 0) {
        // console.log("0");
        return (
            <>
                <div
                    className="flex pb-20 flex-col gap-5 justify-center items-center"
                    style={{ height: "90vh" }}
                >
                    <h1 className="text-7xl font-extrabold">Whoops...</h1>
                    <h2 className="text-5xl font-semibold">
                        Feels Kinda Empty Here
                    </h2>
                    <NavLink to="/products">
                        <button className="bg-transparent px-4 py-2 text-black rounded-full border-2 border-black ">
                            Continue Shopping ?
                        </button>
                    </NavLink>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="h-screen w-[70%] mx-[15%] mt-10 mb-5">
                    <div className="flex justify-around mb-2">
                        <p className="w-1/5">Item</p>
                        <p className="w-1/5">Price</p>
                        <p className="w-1/5">Quantity</p>
                        <p className="w-1/5">SubTotal</p>
                        <p className="w-1/5">Remove</p>
                    </div>
                    <hr />
                    <div>
                        {cart.map((element) => {
                            return (
                                <CartItem
                                    key={element.id}
                                    {...element}
                                ></CartItem>
                            );
                        })}
                    </div>
                    <div className="w-full flex justify-between my-3">
                        <NavLink to="/products">
                            <button className="bg-transparent px-4 py-2 text-black rounded-full border-2 border-black ">
                                Continue Shopping
                            </button>
                        </NavLink>
                        <button
                            className="bg-transparent px-4 py-2 text-black rounded-full border-2 border-black "
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                    <div className="w-full h-max my-20 flex flex-col items-end">
                        <div className="w-max h-full p-8 flex flex-col justify-center gap-5 bg-blue-100 px-4  rounded-3xl">
                            <div className="flex">
                                <div className="w-40">
                                    <p>Subtotal:</p>
                                </div>
                                <div className="w-40">
                                    <p>
                                        <FormatPrice
                                            price={totalCost}
                                        ></FormatPrice>
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-40">
                                    <p>Shipping Charges:</p>
                                </div>
                                <div className="w-40">
                                    <p>
                                        <FormatPrice
                                            price={shippingFees}
                                        ></FormatPrice>
                                    </p>
                                </div>
                            </div>
                            <hr className="" />
                            <div className="flex">
                                <div className="w-40">
                                    <p className="font-semibold">
                                        Total Amount:
                                    </p>
                                </div>
                                <div className="w-40">
                                    <p className="font-semibold">
                                        <FormatPrice
                                            price={shippingFees + totalCost}
                                        ></FormatPrice>
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button
                                    className="mx-1 px-4 py-1 bg-transparent text-black border-2 border-black rounded-3xl "
                                    onClick={orderConfirmation}
                                >
                                    Confirm Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Cart;
