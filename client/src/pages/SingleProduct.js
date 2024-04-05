import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/ProductContext";
import PageNavigation from "../components/PageNavigation";
import MyImages from "../components/MyImages";
import FormatPrice from "../helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import Stars from "../components/Stars";
import AddtoCart from "../components/AddtoCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
    const { singleProduct, isSingleLoading, getSingleProduct } =
        useContext(AppContext);

    // console.log(singleProduct);

    const { id } = useParams();

    var s = id;
    while (s.charAt(0) === ":") {
        s = s.substring(1);
    }

    // console.log(s);

    const {
        id: alias,
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image,
        colors,
    } = singleProduct;
    // console.log(colors);

    // console.log(image);

    useEffect(() => {
        getSingleProduct(`${API}?id=${s}`);
    }, []);

    if (isSingleLoading) {
        return (
            <>
                <div>
                    <p>Loading...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <div>
                <PageNavigation title={name}></PageNavigation>
                <div className="grid grid-cols-2 h-full w-[80%] mx-[10%] my-10">
                    <div>
                        <MyImages images={image}></MyImages>
                    </div>
                    <div className="flex flex-col gap-3 mx-5">
                        <h2 className="text-4xl">{name}</h2>
                        <Stars
                            stars={stars}
                            reviews={reviews}
                        ></Stars>
                        <p>
                            MRP:
                            <del>
                                <FormatPrice
                                    price={price + 250000}
                                ></FormatPrice>
                            </del>
                        </p>
                        <p className="text-blue-900">
                            Deal Of The Day:
                            <FormatPrice price={price}></FormatPrice>
                        </p>
                        <p>{description}</p>
                        <div className="w-full my-2 flex justify-around">
                            <div className="flex flex-col items-center">
                                <TbTruckDelivery className="text-4xl"></TbTruckDelivery>
                                <p className="font-medium">Free Delivery</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <TbTruckDelivery className="text-4xl"></TbTruckDelivery>
                                <p className="font-medium">Free Delivery</p>
                            </div>{" "}
                            <div className="flex flex-col items-center">
                                <TbTruckDelivery className="text-4xl"></TbTruckDelivery>
                                <p className="font-medium">Free Delivery</p>
                            </div>{" "}
                            <div className="flex flex-col items-center">
                                <TbTruckDelivery className="text-4xl"></TbTruckDelivery>
                                <p className="font-medium">Free Delivery</p>
                            </div>{" "}
                        </div>
                        <hr />
                        <p>Availabile:{stock}</p>
                        <p>Brand: {company}</p>
                        <hr className="border-t border-black" />
                        {stock > 0 && (
                            <AddtoCart products={singleProduct}></AddtoCart>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
