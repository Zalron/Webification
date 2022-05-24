import 'bootstrap/dist/css/bootstrap.css'

const Hero = ({title, keywords, button1, button2, description}) => {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">{title}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{description}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">{button1}</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">{button2}</button>
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

Hero.defaultProps = {
    title: 'Webification Hero',
    keywords: 'web development, programming',
    button1: 'button1',
    button2: 'button2',
    description: 'Paving the way for a new chapter one the Web',
}

export default Hero