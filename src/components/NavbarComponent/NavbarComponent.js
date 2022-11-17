import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { SignOut } from "../../services/AuthService";

const Navbar = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    async function signOut() {
        try {
            await SignOut()
            navigate('/')
            logout()
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return(
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
    )
}

export default Navbar