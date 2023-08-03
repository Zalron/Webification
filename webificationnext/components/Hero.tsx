import 'bootstrap/dist/css/bootstrap.css'
import Meta from "./Meta";

const Hero = () => {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">Welcome to Webification</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">We are here to transform the web and make it real for everyone</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Get Started</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">API</button>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="container px-5">
                    <img src="../public/favicon.ico" className="img-fluid border rounded-3 shadow-lg mb-4"
                         alt="Example image" width="700" height="500" loading="lazy"></img>
                </div>
            </div>
        </div>
    )
}

export interface IProps{
    title: string,
    keywords: string,
    button1: string,
    button2: string,
    description: string,
}


export default Hero