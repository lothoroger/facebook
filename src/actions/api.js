import axios from 'axios'

const url = "http://localhost:5000/fb"

export const likeCount = (id => axios.patch(`${url}/${id}/`))
export const feedPost = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = ((id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost))
export const getPost = () => axios.get(url)
