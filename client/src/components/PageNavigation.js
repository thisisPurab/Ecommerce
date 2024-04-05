import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
    return (
        <>
            <div className="flex text-xl bg-[#f3f5f4]">
                <NavLink
                    to="/"
                    className="text-cyan-500"
                >
                    Home
                </NavLink>
                <p>/{title}</p>
            </div>
        </>
    );
};

export default PageNavigation;
