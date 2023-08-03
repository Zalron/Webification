import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Features from "../../components/Features";
import Featurette from "../../components/Featurette";
import Footer from "../../components/Footer";
import Metatypes from "../../components/Metatypes"
import React from "react";

export default function FeaturesPage() {

    return (
        <div>
            <Header />
            <Carousel />
            <Features />
            <Featurette />
            <Footer />
        </div>
    )
}