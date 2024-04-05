import React from "react";
import Hero from "../../src/Assets/herosection.jpg";
import { NavLink } from "react-router-dom";

const Herosection = ({ HeaderText }) => {
    return (
        <div className="max-w-[80%] mx-[10%] flex justify-center items-center my-14">
            <div className="px-5 min-w-[550px]">
                <p className="text-md py-2 font-light">Welcome to</p>
                <h1 className="text-5xl font-black py-2">{HeaderText}</h1>
                <p className="text-md font-light py-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Adipisci ratione ipsam cupiditate obcaecati asperiores{" "}
                    <br />
                    similique necessitatibus accusamus fugit nisi excepturi{" "}
                    <br />
                    cumque iure, distinctio saepe repudiandae assumenda. <br />{" "}
                    Non exercitationem consequuntur laborum!
                </p>
                <div className="flex py-4 gap-7">
                    <NavLink to="/products">
                        <button className="bg-transparent px-4 py-2 text-black rounded-full border-2 border-black ">
                            Shop Now
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="px-5 py-5">
                <img
                    src={Hero}
                    alt="Shoe"
                    style={{ height: "400px" }}
                />
            </div>
        </div>
    );
};

export default Herosection;
