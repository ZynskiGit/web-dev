import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Pre from "../utils/pre";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";

const SearchArt = () => {
    const [exhibitions, setExhibitions] = useState([]);
    const {searchString} = useParams();
    const navigate = useNavigate();
    const lcoation = useLocation();
    const titleRef = useRef();
    <li>
        <Pre obj={searchString} />
    </li>
    const ART_URL = 'https://api.harvardartmuseums.org/object?apikey=682a9ad5-4db7-4dd6-ae10-2fbbdf8d04f1&q='
    //const API_KEY = '682a9ad5-4db7-4dd6-ae10-2fbbdf8d04f1';
    const searchObjectsByTitle = async () => {
        alert(titleRef.current.value);
        const response = await axios.get(`${ART_URL}=${titleRef.current.value}`)
        setExhibitions(response.data.records)
        navigate(`/art/${titleRef.current.value}`)
    }
    useEffect( () => {
        if (searchString) {
            titleRef.current.value = searchString;
            searchObjectsByTitle()
        }
    }, [])
    return (
        <div>
            <h1>Search Harvard Museum</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={searchObjectsByTitle}
                        className="btn btn-primary float-end">
                        Search
                    </button>
                    <input ref={titleRef} className="form-control w-75"/>
                </li>
                {
                    exhibitions.map(exhibit =>
                    <li className="list-group-item" key={exhibit.objectnumber}>
                        <Link to={`/art/details/${exhibit.objectnumber}`}>
                        <img src={exhibit.primaryimageurl} height={50} className="me-2"/>

                {exhibit.title}
                        </Link></li>)
                }
            </ul>
            <Pre obj={exhibitions}/>
        </div>
    )
}
export default SearchArt;