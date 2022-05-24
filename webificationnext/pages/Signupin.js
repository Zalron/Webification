import Header from "../components/Header";
import Meta from "../components/Meta"
import Signin from "../components/Signin";
import Footer from "../components/Footer"

export default function Home() {

    return (
        <div>
            <Meta title='Webification' />
            <Header />
            <Signin />
            <Footer />
        </div>
    )
}