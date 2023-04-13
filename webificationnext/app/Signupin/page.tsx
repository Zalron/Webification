import Header from "../../components/Header";
import Meta from "../../components/Meta"
import Signin from "../../components/Signin";
import Footer from "../../components/Footer"
import metatypes from "../../components/Metatypes";

export default function Home(props: metatypes) {

    return (
        <div>
            <Meta {...props}/>
            <Header />
            <Signin />
            <Footer />
        </div>
    )
}