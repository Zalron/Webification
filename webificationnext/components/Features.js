import React from "react";
import axios from "axios";
const Features = (props) => {
    return(
        <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Features</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col d-flex align-items-start">
                    <div
                        className="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <svg className="bi" width="1em" height="1em">
                            <use href="#toggles2"/>
                        </svg>
                    </div>
                    {props.Features.map((Features, index) => {
                        return(
                            <div key={index}>
                                <h2>{Features.title}</h2>
                                <p>{Features.description}</p>
                                <a href="/" className="btn btn-primary">
                                    Find out more
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    // Fetch data from external API
    const res = await fetch('https://localhost:3000/Features')
    const data = await res.json()

    // Pass data to the page via props
    return {
        props: {
            Features: data.Features
        }
    }
}

export default Features
