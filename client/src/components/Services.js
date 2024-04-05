import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
    return (
        <>
            <div className="flex h-[300px] max-w-[80%] mx-[10%] justify-evenly bg-blue-50 rounded-3xl">
                <div className="w-1/3 flex flex-col justify-center items-center h-full">
                    <TbTruckDelivery className="text-5xl"></TbTruckDelivery>
                    <h1>Super Fast and Free Delivary</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-1/3 gap-10">
                    <div className="flex justify-center items-center my-5">
                        <MdSecurity className="text-5xl"></MdSecurity>
                        <h1>No Contact Delivery</h1>
                    </div>
                    <div className="flex justify-center items-center my-5">
                        <GiReceiveMoney className="text-5xl"></GiReceiveMoney>
                        <h1>Money-Back Guarantee</h1>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center">
                    <RiSecurePaymentLine className="text-5xl"></RiSecurePaymentLine>
                    <h1>Super Secure Payment System</h1>
                </div>
            </div>
        </>
    );
};

export default Services;
