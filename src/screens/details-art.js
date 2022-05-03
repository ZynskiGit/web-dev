import React, {useEffect, useState} from 'react'
import Pre from "../utils/pre";
import {useParams} from "react-router-dom";
import axios from "axios";

const DetailsArt = () => {
    const [exhibitDetails, setExhibitDetails] = useState({})
    const ART_URL ='https://api.harvardartmuseums.org/exhibition?apikey=682a9ad5-4db7-4dd6-ae10-2fbbdf8d04f1&q=';
    const {artID} = useParams();
    const fetchExhibitByArtID = async () => {
        const response = await axios (`${ART_URL}=${artID}`)
        setExhibitDetails(response.data.records)
    }
    useEffect( () => {
    fetchExhibitByArtID()}, [])
    return(
    <div>
        <h1>Details{exhibitDetails.name}</h1>
        <p>
            {exhibitDetails.begindate}
            {exhibitDetails.images}
        </p>
        <Pre obj={exhibitDetails}/>
        <Pre obj={artID}/>
    </div>
    );

};
export default DetailsArt;