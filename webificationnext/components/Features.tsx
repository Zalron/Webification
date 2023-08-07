import React from "react";
export default async function Features() {
    return(
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Columns with icons</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"><use href="#collection"/></svg>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">State of the Art Databases</h3>
                    <p>Powered by WT our relational databases track everything that you do and try to automate redundant and repetitive tasks.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        <svg className="bi"><use href="#chevron-right"/></svg>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"><use href="#people-circle"/></svg>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Powered by Wishful Thinking or WT for short</h3>
                    <p>A programming language that is designed for Web 3.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        <svg className="bi"><use href="#chevron-right"/></svg>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"><use href="#toggles2"/></svg>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Just Us Bro, NFT or (TUBNFT)</h3>
                    <p>Just Us Bro NFT or (TUBNFT for short) is our propratary NFT that you can upload your personal information on the blockchain and you can trade it with fellow Webification users.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        <svg className="bi"><use href="#chevron-right"/></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
