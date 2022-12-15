const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXTAREA_MESSAGE = 'UPDATE-TEXTAREA-MESSAGE';

const DialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            let addMessageData = {
                id: '5',
                message: state.updateMessage,
            }

            state.messagesData.push(addMessageData);
            state.updateMessage = '';
            return state;
        case UPDATE_TEXTAREA_MESSAGE:
            state.updateMessage = action.newText;
            return state;
        default:
            return state
    }
}

export const addMessageActionCreate = (text) => ({
    type: ADD_MESSAGE, newText: text,
});

export const updateTextareaMessageActionCreate = (text) => ({
    type: UPDATE_TEXTAREA_MESSAGE, newText: text,
})

export default DialogReducer;