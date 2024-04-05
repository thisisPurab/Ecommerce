import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="flex flex-col justify-center my-28 items-center">
                <div>
                    <h1 className="text-6xl font-bold my-5">
                        404-Page Not Found
                    </h1>
                    <h1 className="text-6xl font-bold my-5">
                        UH OH! You're Lost.
                    </h1>
                    <p className="my-5">
                        The page you are looking for does not exist. But you can
                        click the button below to get to the Homepage.
                    </p>
                    <Link to="/">
                        <button className="border-black border-solid border-2  px-4 py-2 rounded-3xl w-32">
                            HomePage
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Error;
