import Header from "../components/Header";
import Meta from "../components/Meta"
import Pricings from "../components/Pricings"
import Footer from "../components/Footer"
import React from "react";

export default function Home() {

    return (
        <div>
            <Meta title='Webification' />
            <Header />
            <Pricings />
            <Footer />
        </div>
    )
}