import React from "react";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import TrustedBy from "./components/TrustedBy";
import FeaturedProducts from "./components/FeaturedProducts";

const Home = () => {
    return (
        <>
            <Herosection HeaderText={"KlickKart Store"}></Herosection>
            <FeaturedProducts></FeaturedProducts>
            <Services></Services>
            <TrustedBy></TrustedBy>
        </>
    );
};

export default Home;
