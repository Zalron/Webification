import React from "react";
import axios from "axios";
export default async function Features(props) {
    const features = await getFeatures()

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
                        {features?.map((features) => {
                            return <FeaturesGrid key={features.id} features={features}/>
                        })}
                </div>
            </div>
        </div>
    )
}
function FeaturesGrid({features}:any){
    const {id, title, description} = features || {};

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="/" className="btn btn-primary">
                Find out more
            </a>
        </div>
    )
}

async function getFeatures() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('features');
    const res = await fetch('http://127.0.0.1:8090/api/collections/features/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}
