import Header from "../components/Header";
import Meta from "../components/Meta"
import Hero from "../components/Hero"
import Signup from "../components/Signup"
import Footer from "../components/Footer"
import Features from "../components/Features"
import Metatypes from "../components/Metatypes";
import React from "react";

export interface IProps{
    title: string,
    keywords: string,
    button1: string,
    button2: string,
    description: string,
}
export default function Home(props: Metatypes) {

  return (
    <div>
        <Meta {...props} />
        <Header />
        <Hero {...props}/>
        <Signup />
        <Features />
        <Footer />
    </div>
  )
}


