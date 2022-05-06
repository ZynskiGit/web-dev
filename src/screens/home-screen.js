import React from "react";
import SearchArt from "./search-art";
import Navigation from "../components/navigation";
const HomeScreen = () => {
    return(
        <div>
        <div className="row mt-1">
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <a className="nav-link active" aria-current="home" href="">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="signin">Signin</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="Signup">SignUp</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="profile" >Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="art" tabIndex="-1">Search</a>
            </li>
        </ul>
        </div>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <Navigation active="home"/>
            </div>
            <div className="col-10 col-md-8 col-lg-5 col-xl-4"
                 style={{"position": "relative"}}>
                <SearchArt/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            </div>
        </div>
        </div>
    );
};

/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    <WhoToFollowList/>
</div>
Third Column
 */
export default HomeScreen;