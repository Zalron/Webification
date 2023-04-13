import Header from "../../components/Header";
import Meta from "../../components/Meta"
import Pricings from "../../components/Pricings"
import Footer from "../../components/Footer"
import Metatypes from "../../components/Metatypes"
import React from "react";
import {IProps} from "../Checkout/page";

export default function Home(props: IProps) {

    return (
        <div>
            <Meta {...props} />
            <Header />
            <Pricings />
            <Footer />
        </div>
    )
}