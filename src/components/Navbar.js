import React from 'react'
import { useState } from 'react';
import {
    Link
} from "react-router-dom";

const getDataLS = () => {
    let data = localStorage.getItem('Employee');
    if (data) {
        var parsedData = JSON.parse(data);
        return parsedData;
    }
    else {
        return [];
    }
}



export default function Navbar(props) {
    const [Employee, useEmployee] = useState(getDataLS());

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to="/Login" className="btn btn-sm btn-primary mx-2">Login</Link>
                            <Link to="/SignUp" className="btn btn-sm btn-primary">SignUp</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
