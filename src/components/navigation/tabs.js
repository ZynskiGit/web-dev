
import React from "react";
import "./navigation.css";
import {useLocation, Link} from "react-router-dom";

function Navigation() {
    const {pathname} = useLocation();
    return (<ul className="nav nav-pills nav-fill">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Much longer nav link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
    </ul>
);
};

export default Navigation;