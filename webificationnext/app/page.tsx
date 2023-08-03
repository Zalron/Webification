import Header from "../components/Header";
import Hero from "../components/Hero"
import Signup from "../components/Signup"
import Footer from "../components/Footer"
import Features from "../components/Features"
import React from "react";

export interface IProps{
    title: string,
    keywords: string,
    button1: string,
    button2: string,
    description: string,
}
export default function Home() {

  return (
    <div>
        <Header />
        <Hero />
        <Signup />
        <Features />
        <Footer />
    </div>
  )
}


