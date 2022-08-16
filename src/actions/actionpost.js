import * as api from '../actions/api'





export const createPost = (posts) => async (dispatch) => {
    try {

        const { data } = await api.createPost(posts);


        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};



export const feedPost = () => async (dispatch) => {
    try {

        const { data } = await api.feedPost();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};





export const getPost = (data) => async (dispatch) => {
    try {

        const { data } = await api.getPost();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const likeCount = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeCount(id);

        dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};



export const updatePost = (id, posts) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, posts);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
