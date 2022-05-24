import Header from "../components/Header";
import Meta from "../components/Meta"
import Hero from "../components/Hero"
import Signup from "../components/Signup"
import Footer from "../components/Footer"
import Features from "../components/Features";
import React from "react";

export default function Home() {

  return (
    <div>
        <Meta title='Webification' />
        <Header />
        <Hero title="Welcome to Webification" description="We are here to transform the web and make it real for everyone" button1="Get Started" button2="API"/>
        <Signup />
        <Features />
        <Footer />
    </div>
  )
}
