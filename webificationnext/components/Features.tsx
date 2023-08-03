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
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        <svg className="bi"><use href="#chevron-right"/></svg>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"><use href="#people-circle"/></svg>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        <svg className="bi"><use href="#chevron-right"/></svg>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"><use href="#toggles2"/></svg>
                        <symbol id="toggles2" viewBox="0 0 16 16">
                            <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
                            <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
                            <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
                        </symbol>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" >
                        Call to action
                        <svg><use href="#chevron-right"/></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
