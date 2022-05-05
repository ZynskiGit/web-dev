import React, {useEffect, useRef, useState} from 'react'
import Pre from "../utils/pre";
import {useParams} from "react-router-dom";
import axios from "axios";
import SecureContent from "../components/secure-content";
import {findCommentsByObjectNumber, postComment} from "../services/art-service";
import {useProfile} from "../contexts/profile-context";


const api = axios.create({
    withCredentials: true
});

const DetailsArt = () => {
    const {profile} = useProfile()
    const [comments, setComments] = useState([])
    const [artDetails, setArtDetails] = useState({})
    const [ourArtDetails, setOurArtDetails] = useState({})
    const ART_URL ='https://api.harvardartmuseums.org/object?apikey=682a9ad5-4db7-4dd6-ae10-2fbbdf8d04f1&objectnumber=';
    const {objectnumber} = useParams();
    const fetchArtByObjectNumberFromMuseum = async () => {
        const response = await axios (`${ART_URL}=${objectnumber}`)
        setArtDetails(response.data.records[0])
    }
    const fetchArtByObjectNumberFromOurApi = async () => {
        // TODO: this is a NONO ... this should be in a movies-service.js
        const response = await axios(`http://localhost:4000/api/objects/${objectnumber}`)
        setOurArtDetails(response.data)
    }

    const findCommentsForThisArt = async () => {
        const comments = await findCommentsByObjectNumber(objectnumber)
        setComments(comments)
    }
    useEffect( () => {
        fetchArtByObjectNumberFromMuseum()
        fetchArtByObjectNumberFromOurApi()
        findCommentsForThisArt()}, [])

    const handleLikes = async () => {
        console.log(artDetails)
        const art = {
            title: artDetails.title,
            primaryimageurl: artDetails.primaryimageurl,
            objectnumber: artDetails.objectnumber
        }
        const response = await axios.post("http://localhost:4000/api/likes", art)
        setOurArtDetails(response.data)
    }

    const handleDisLikes = async () => {
        console.log(artDetails)
        const art = {
            title: artDetails.title,
            primaryimageurl: artDetails.primaryimageurl,
            objectnumber: artDetails.objectnumber
        }
        const response = await axios.post("http://localhost:4000/api/dislikes", art)
        setOurArtDetails(response.data)
    }

    const commentRef = useRef()

    const handleComment = async () => {
        const actualComment = await postComment(profile._id, artDetails.objectnumber, {
            comment: commentRef.current.value,
            commenter: profile._id,
            commenterEmail: profile.email
        })
        // console.log(actualComment)
        setComments([...comments, actualComment])
    }

    return(
    <div>
        <h1>{artDetails.title}</h1>
        <p>
            <img src={artDetails.primaryimageurl}
                 className="me-2 float-start"
                 width={200}/>
        </p>
        <h5>Century</h5>
        {artDetails.century}
        <h5>Classification</h5>
        {artDetails.classification}
        <h5>Medium</h5>
        {artDetails.medium}
        <h5>Culture</h5>
        {artDetails.culture}
        <h5>Department</h5>
        {artDetails.department}
        <p>

        </p>

        <SecureContent>
            Welcome: {profile && profile.email}
            {profile && profile._id}
            {artDetails.objectnumber}
            <div>
                <button onClick={handleLikes}>
                    Like ({ourArtDetails && ourArtDetails.likes}) !!!!!
                </button>
                <button onClick={handleDisLikes}>Dislike ({ourArtDetails && ourArtDetails.dislikes})</button>
                <h2>Leave a comment</h2>
                <textarea ref={commentRef} className="form-control" placeholder="What do you think about this piece?"></textarea>
                <button onClick={handleComment}
                        className="btn btn-primary">
                    Post
                </button>
            </div>
        </SecureContent>

        <ul className="list-group">
            {
                comments.map((comment, index) =>
                    <li className="list-group-item" key={index}>
                        {comment && comment.commenterEmail}
                        <hr/>
                        {comment && comment.comment}
                    </li>
                )
            }
        </ul>

        <ul>
            <li>Alex dispised this movie</li>
            <li>Jose liked this movie</li>
        </ul>
        <Pre obj={artDetails}/>
        <Pre obj={objectnumber}/>
    </div>
    );

};
export default DetailsArt;