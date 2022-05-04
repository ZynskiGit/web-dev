import axios from "axios";
const ART_API = 'http://localhost:4000/objects'

const api = axios.create({
    withCredentials: true
})

export const postComment = async (userId, objectnumber, comment) => {
    const response = await api.post(`${ART_API}/${objectnumber}/comments/${userId}`, comment)
    return response.data
    // return comment
}

export const findCommentsByObjectNumber = async (objectnumber) => {
    const response = await api.get(`${ART_API}/${objectnumber}/comments`)
    return response.data
}

export const findCommentsByUserId = async (userId) => {
    const response = await api.get(`http://localhost:4000/users/${userId}/comments`)
    return response.data
}