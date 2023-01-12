import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src={"images/logo.png"} alt={"Topper"} width={110}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link" href="/Mochilas">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/Trajes-de-baño">Indumentaria</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/Camperas">Accesorios</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/Zapatillas">Calzado</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget/>        
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar;