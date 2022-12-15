const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXTAREA_MESSAGE = 'UPDATE-TEXTAREA-MESSAGE';

let initial = {
    dialogsData: [
        {
            id: '1',
            name: 'Valery',
            src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/if1/GnIkxNS5nUi_X6dRglq1iSgKKDBpaBqJ-_cCR2Q24UkyEjmdSO8hBfoRb8o0rBq3IH8KJUAA.jpg?size=50x50&quality=96&crop=143,0,568,568&ava=1'
        },
        {
            id: '2',
            name: 'Andrey',
            src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/ZJ2iKLQ6LWWRJZoqcEsf44oePArQ4k6bUSc6Ql5eFxz1Heexr3VsMikhcMdysgPx1uKbpFxMBLe071U7thLUGGx7.jpg?size=100x100&quality=96&crop=0,282,1782,1782&ava=1'
        },
        {
            id: '3',
            name: 'Vladimir',
            src: 'https://sun1.velcom-by-minsk.userapi.com/s/v1/if1/ZR6X3zKLjLGoMUuzbjSpOdk00QQln_ubEwmruhcr7WDGdtwKAm56j6L1rfGORJa3pxkxBfyl.jpg?size=100x100&quality=96&crop=2,63,409,409&ava=1'
        },
        {
            id: '4',
            name: 'Alena',
            src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/wsIVlSdYe8mi2bCtsNarhECW7zuealPWeS627vT3hWPvLS0oeVVu8dK4vV1GKDW03oHkfVMI1Rz4xG5TzKqA8XxN.jpg?size=100x100&quality=95&crop=219,454,515,515&ava=1'
        },
    ],
    messagesData: [
        {id: '1', message: 'How are you!'},
        {id: '2', message: 'How is you it-incubator!'},
        {id: '3', message: 'Hello!'},
        {id: '4', message: 'Are you from?!'},
    ],
    updateMessage: 'Hello',
};

const DialogReducer = (state = initial, action) => {
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