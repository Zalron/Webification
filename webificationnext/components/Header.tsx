import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                    </svg>
                    <span className="fs-4">Webification</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="Features" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="Pricing" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="Blog" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="Checkout" className="nav-link">Checkout</a></li>
                    <li className="nav-item"><a href="Signupin" className="nav-link">Signup/Signin</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header