const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_POST = 'UPDATE-TEXTAREA-POST';


const contentReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:

            let addPostData = {
                id: '3',
                message: state.updatePost,
                likesCount: '0'
            }

            state.postsData.push(addPostData);
            state.updatePost = '';
            return state;
        case UPDATE_TEXTAREA_POST:
            state.updatePost = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreat = (text) => ({
    type: ADD_POST, newText: text,
})

export const updateTextareaPostActionCreat = (text) => ({
    type: UPDATE_TEXTAREA_POST, newText: text,
})

export default contentReducer;