import React from "react";
import "./navigation.css";
import {useLocation, Link} from "react-router-dom";

function Navigation() {
    const {pathname} = useLocation();
    // console.log(location.pathname);
    const links = [
        {label: 'Home', icon: 'fa-square-t', path: ''},
        {label: 'Home', icon: 'fa-home', path: 'home'},
        {label: 'search', icon: 'fa-hashtag', path: 'art'},
        {label: 'Profile', icon: 'fa-user', path: 'profile'},
        {label: 'Login', icon: 'fa-user', path: 'signin'},
        {label: 'Signup', icon: 'fa-user', path: 'signup'},
    ]
    return(
        <div className="ttr-navigation">
            <ul className="list-group">
                {
                    links.map((link, ndx) => {
                        return(
                            <li key={ndx} className={`list-group-item border-0 ttr-font-size-150pc text-nowrap
         ${pathname.indexOf(link.   path) >= 0 ? 'fw-bold':''}`}>
                                <Link to={`/${link.path}`} id={link.label}
                                      className="text-decoration-none text-black">
                                    <i className={`fa ${link.icon} text-center`}></i>
                                    <span className="ttr-label">{link.label}</span>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Navigation;