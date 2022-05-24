import Header from "../components/Header";
import Meta from "../components/Meta"
import Checkouts from "../components/Checkouts";
import Footer from "../components/Footer"
import React from "react";

export default function Home() {

    return (
        <div>
            <Meta title='Webification' />
            <Header />
            <Checkouts />
            <Footer />
        </div>
    )
}