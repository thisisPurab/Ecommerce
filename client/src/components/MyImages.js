import React, { useState } from "react";

const MyImages = ({ images = [{ url: "" }] }) => {
    const [mainImage, setmainImage] = useState(images[0].url);

    const handleClick = (index) => {
        setmainImage(images[index].url);
    };

    return (
        <>
            <div className="grid grid-cols-3 h-full">
                <div className="grid grid-rows-4 gap-4 p-2">
                    {images.map((image, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.filename}
                                    key={index}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="col-span-2 flex justify-center items-center p-3">
                    <img
                        src={mainImage}
                        alt={mainImage.filename}
                    />
                </div>
                <div></div>
            </div>
        </>
    );
};

export default MyImages;
