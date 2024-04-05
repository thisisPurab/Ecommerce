import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../src/Assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export const Nav = () => {
    const { totatItems } = useContext(CartContext);

    const { currentUser } = useContext(AuthContext);

    // console.log(currentUser);

    return (
        <div className="bg-[#f3f5f4]">
            <nav className="lg:h-[5%] p-3 flex justify-between items-center">
                <img
                    src={Logo}
                    alt="logo"
                    className="h-[60px]"
                />
                <ul className="navbar-list gap-7 hidden lg:flex">
                    <NavLink
                        to="/"
                        className="navbar-link home-link"
                    >
                        Home
                    </NavLink>{" "}
                    <NavLink
                        to="/products"
                        className="navbar-link product-link"
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="navbar-link contact-link"
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="navbar-link about-link"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className="navbar-link cart-link relative"
                    >
                        <FiShoppingCart className="relative text-2xl" />
                        <div className="h-5 w-5 flex justify-center items-center absolute text-white text-sm bg-black rounded-full top-[-20%] left-[70%]">
                            {totatItems}
                        </div>
                    </NavLink>
                </ul>
                {currentUser ? (
                    <>
                        <NavLink to="/profile">
                            <div className="hidden lg:block h-10 w-10 rounded-full bg-black mr-10"></div>
                        </NavLink>
                    </>
                ) : (
                    <div className="hidden lg:block">
                        <NavLink to="/login">
                            <button className="mx-1 px-4 py-1 bg-transparent text-black border-2 border-black rounded-3xl w-24">
                                Login
                            </button>
                        </NavLink>
                        <NavLink to="/signup">
                            <button className="mx-1 px-4 py-1 bg-transparent text-black border-2 border-black rounded-3xl w-24">
                                Sign Up
                            </button>
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    );
};
