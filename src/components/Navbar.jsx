import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"images/logo.png"} alt={"Topper"} width={110}/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/Indumentaria"}>Indumentaria</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/Accesorios"}>Accesorios</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/Calzado"}>Calzado</NavLink>
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