import Meta from "../components/Meta";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import Featurette from "../components/Featurette";
import Footer from "../components/Footer";
import React from "react";

export default function Home() {

    return (
        <div>
            <Meta title='Webification' />
            <Header />
            <Carousel />
            <Features />
            <Featurette />
            <Footer />
        </div>
    )
}