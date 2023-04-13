import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Features from "../../components/Features";
import Featurette from "../../components/Featurette";
import Footer from "../../components/Footer";
import Metatypes from "../../components/Metatypes"
import React from "react";
import {IProps} from "../Checkout/page";

export default function Home(props: IProps) {

    return (
        <div>
            <Meta {...props} />
            <Header />
            <Carousel />
            <Features />
            <Featurette />
            <Footer />
        </div>
    )
}