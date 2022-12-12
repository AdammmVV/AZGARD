let store = {
    _state: {
        contentPage: {
            postsData: [
                {id: '1', message: "Hi, how are you?", likesCount: '20'},
                {id: '2', message: "It's my first post", likesCount: '15'},
            ],
            updatePost: 'Hello',
        },
        dialogsPage: {
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
        },
        nav: {
            friends: [
                {
                    id: '1',
                    name: 'Andrey',
                    src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/ZJ2iKLQ6LWWRJZoqcEsf44oePArQ4k6bUSc6Ql5eFxz1Heexr3VsMikhcMdysgPx1uKbpFxMBLe071U7thLUGGx7.jpg?size=100x100&quality=96&crop=0,282,1782,1782&ava=1'
                },
                {
                    id: '2',
                    name: 'Alena',
                    src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/wsIVlSdYe8mi2bCtsNarhECW7zuealPWeS627vT3hWPvLS0oeVVu8dK4vV1GKDW03oHkfVMI1Rz4xG5TzKqA8XxN.jpg?size=100x100&quality=95&crop=219,454,515,515&ava=1'
                },
                {
                    id: '3',
                    name: 'Vaclav',
                    src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/if1/Un8rIhfW4J5M0JwJkwRprBGCEdqkAd0okZSgf75XCF7Axzjh7iB1FzjJyY_7KOulc-aJOLsP.jpg?size=100x100&quality=96&crop=9,14,932,932&ava=1'
                },
            ],
        }

    },
    _reRenderAppTree() {
        console.log('state')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._reRenderAppTree = observer;
    },

    // addPost() {
    //     let addPostData = {
    //         id: '3',
    //         message: this._state.contentPage.updatePost,
    //         likesCount: '0'
    //     }
    //
    //     this._state.contentPage.postsData.push(addPostData);
    //     this._state.contentPage.updatePost = '';
    //     this._reRenderAppTree(this._state);
    // },
    // updateTextareaPost(text) {
    //     this._state.contentPage.updatePost = text;
    //     this._reRenderAppTree(this._state);
    // },
    // addMessage() {
    //     let addMessageData = {
    //         id: '5',
    //         message: this._state.dialogsPage.updateMessage,
    //     }
    //     this._state.dialogsPage.messagesData.push(addMessageData);
    //     this._state.dialogsPage.updateMessage = '';
    //     this._reRenderAppTree(this._state);
    // },
    // updateTextareaMessage(text) {
    //     this._state.dialogsPage.updateMessage = text;
    //     this._reRenderAppTree(this._state);
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let addPostData = {
                id: '3',
                message: this._state.contentPage.updatePost,
                likesCount: '0'
            }

            this._state.contentPage.postsData.push(addPostData);
            this._state.contentPage.updatePost = '';
            this._reRenderAppTree(this._state);
        } else if (action.type === 'UPDATE-TEXTAREA-POST') {
            this._state.contentPage.updatePost = action.newText;
            this._reRenderAppTree(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let addMessageData = {
                id: '5',
                message: this._state.dialogsPage.updateMessage,
            }

            this._state.dialogsPage.messagesData.push(addMessageData);
            this._state.dialogsPage.updateMessage = '';
            this._reRenderAppTree(this._state);
        } else if (action.type === 'UPDATE-TEXTAREA-MESSAGE') {
            this._state.dialogsPage.updateMessage = action.newText;
            this._reRenderAppTree(this._state);
        }
    }

};

export default store;

window.store = store