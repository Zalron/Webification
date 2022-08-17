import React from "react";
import Axios from "axios"

const Features = ( features ) => {
    const featuresprops = features.data;
    return(
        <ul>
            {featuresprops && featuresprops.map((featuresprop) => (
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
                        <div>
                            <h2>{featuresprop.Title}</h2>
                            <p>{featuresprop.Description}</p>
                            <a href="#" className="btn btn-primary">
                                Find out more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            ))};
        </ul>
    )
}

export default Features

export const getServerSideProps = async () => {
    const res = await Axios.get('http://localhost:8000/Features')
    const features = await res.json()
    return {
        props: {data:
            features,
        },
    }
}
