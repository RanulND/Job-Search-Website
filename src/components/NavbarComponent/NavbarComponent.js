import React from "react";
import { Auth } from "aws-amplify";

const Navbar = () => {

    async function signOut() {
        try {
            await Auth.signOut();
            window.location.href = "/"
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return(
        // <div className="navbar">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                        <div>
                            <button className=" btn btn-primary" onClick={ _ => signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </nav>
        // </div>
    )
}

export default Navbar