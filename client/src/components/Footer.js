import React from "react";
import { PiCopyright } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
const Footer = () => {
    return (
        <>
            <div className="w-screen bg-blue-300 p-5">
                <div className="grid grid-cols-4 gap-3 w-[80%] mx-[10%] my-5 border-b-2 border-black">
                    <div className="bg-gray-200 p-4 bg-inherit">
                        <p className="text-lg">KlickKart Official</p>
                        <p className="text-sm pt-3">
                            Lorem ipsum dolor sit amet <br /> consectetur
                            adipisicing elit. Voluptate ratione dolorum quae
                            maiores dolor
                        </p>
                    </div>
                    <div className="bg-gray-200 p-4 bg-inherit">
                        <p className="text-lg">
                            Subscirbe to get important updates
                        </p>
                        <div className="mt-2">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                autoComplete="off"
                                className="shadow appearance-none border rounded-full w-5/6 my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Email"
                            />
                        </div>
                        <button className="bg-transparent px-4 py-2 mt-1 text-black rounded-full border-2 border-black ">
                            Subscribe
                        </button>
                    </div>
                    <div className="bg-gray-200 p-4 bg-inherit">
                        <p className="text-lg">Follow Us</p>
                        <div className="flex gap-5 mt-6">
                            <FaLinkedin className="text-2xl"></FaLinkedin>
                            <FaGithub className="text-2xl"></FaGithub>
                            <FaInstagram className="text-2xl"></FaInstagram>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-4 bg-inherit">
                        <p className="text-lg">Contact Us</p>
                        <div className="flex gap-5 mt-6">
                            <MdOutlineEmail className="text-2xl font-bold"></MdOutlineEmail>
                            <p className="underline">
                                purabrtamboli97@gmail.com
                            </p>
                        </div>{" "}
                        <div className="flex gap-5 mt-6">
                            <IoIosCall className="text-2xl font-bold"></IoIosCall>
                            <p className="">+91 83******67</p>
                        </div>
                    </div>
                </div>

                <div className="w-[80%] mx-[10%] flex justify-around">
                    <div className="flex gap-3 items-centre justify-center">
                        <PiCopyright className="text-2xl"></PiCopyright>
                        <p>KlcikKart Official .</p>
                        <p>All Rights Reserved .</p>
                    </div>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & COMDITIONS</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
