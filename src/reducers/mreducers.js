export default (mreducers = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'LIKE':
            return mreducers.map(post =>
                post._id === action.payload._id ? action.payload : post
            );
        default:
            return mreducers;
    }
};


