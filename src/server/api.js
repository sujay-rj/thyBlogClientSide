import axios from 'axios';


const API_URL = 'https://thyblogbackend.onrender.com';
// const API_URL = 'http://localhost:8000';




export const userSignup = async(data) => {
    try {
        return await axios.post(`${API_URL}/signup`, data);
    } catch (error) {
        console.log('Errro while calling the signup user api', error);
        return 400;
    }
}

export const userLogin = async(data) => {
    try {
        return await axios.post(`${API_URL}/login`, data);
    } catch (error) {
        console.log(`Credentials doesn't match ! Please fill correct details`);
        return 400;
    }
}

export const uploadFile = async(data) => {
    try {
        return await axios.post(`${API_URL}/file/upload`, data);
    } catch (error) {
        console.log('File Not Uploaded...');
    }
}


export const postSave = async(data) => {
    try {
        return await axios.post(`${API_URL}/create`, data);
    } catch (error) {
        console.log('Post not saved. Something went wrong !');
    }
}

export const getAllPosts = async(data) => {
    try {
        return await axios.get(`${API_URL}/posts`, data);
    } catch (error) {
        console.log(`Unable to fetch data`, error);
    }
}

export const getPostById = async(data) => {
    try {
        return await axios.get(`${API_URL}/post/${data}`);
    } catch (error) {
        console.log(`Unable to fetch the Blog details`, error);
    }
}

export const updatePost = async(data) => {
    try {
        return await axios.put(`${API_URL}/update/${data._id}`, data);

    } catch (error) {
        console.log(`Something went wrong! Can not update the post.`, error);
    }
}

export const deletePost = async(id) => {
    try {
        return await axios.delete(`${API_URL}/delete/${id}`);
    } catch (error) {
        console.log('Something went wrong! Can not delete the post', error);
    }
}

export const newComment = async(data) => {
    try {
        return await axios.post(`${API_URL}/comment/new`, data);
    } catch (error) {
        console.log('Something went wrong! try again...');
    }
}

export const getAllComments = async(id) => {
    try {
        return await axios.get(`${API_URL}/comments/${id}`);
    } catch (error) {
        console.log('Something went wrong! try again...');

    }
}

export const deleteComment = async(id) => {
    try {
        return await axios.delete(`${API_URL}/comment/delete/${id}`)
    } catch (error) {
        console.log('Something went wrong! try again...');
    }
}