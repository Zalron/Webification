import Header from "../../components/Header";
import Meta from "../../components/Meta"
import Checkouts from "../../components/Checkouts";
import Footer from "../../components/Footer"
import React from "react";

export interface IProps{
    title: string,
    keywords: string,
    button1: string,
    button2: string,
    description: string,
}
export default function Home(props: IProps) {

    return (
        <div>
            <Meta {...props} />
            <Header />
            <Checkouts />
            <Footer />
        </div>
    )
}