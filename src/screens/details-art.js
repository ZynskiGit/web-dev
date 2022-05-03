import React, {useEffect, useState} from 'react'
import Pre from "../utils/pre";
import {useParams} from "react-router-dom";
import axios from "axios";

const DetailsArt = () => {
    const [exhibitDetails, setExhibitDetails] = useState({})
    const ART_URL ='https://api.harvardartmuseums.org/object?apikey=682a9ad5-4db7-4dd6-ae10-2fbbdf8d04f1&objectnumber=';
    const {artID} = useParams();
    const fetchExhibitByArtID = async () => {
        const response = await axios (`${ART_URL}=${artID}`)
        setExhibitDetails(response.data.records[0])
    }
    useEffect( () => {
    fetchExhibitByArtID()}, [])
    return(
    <div>
        <h1>{exhibitDetails.title}</h1>
        <p>
            <img src={exhibitDetails.primaryimageurl}
                 className="me-2 float-start"
                 width={200}/>
        </p>
        <h5>Century</h5>
        {exhibitDetails.century}
        <h5>Classification</h5>
        {exhibitDetails.classification}
        <h5>Medium</h5>
        {exhibitDetails.medium}
        <h5>Culture</h5>
        {exhibitDetails.culture}
        <h5>Department</h5>
        {exhibitDetails.department}

        <p></p>
        <button>Like</button>
        <button>Dislike</button>
        <h2>Leave a comment</h2>
        <textarea placeholder="Leave your thoughts here!"></textarea>
        <button className="rounded-pill ">Post</button>

        <ul>
            <li>Alex dispised this movie</li>
            <li>Jose liked this movie</li>
        </ul>
        <Pre obj={exhibitDetails}/>
        <Pre obj={artID}/>
    </div>
    );

};
export default DetailsArt;