import React from "react";
import {addMessageActionCreate, updateTextareaMessageActionCreate} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let sendMessage = () => {
        props.dispatch(addMessageActionCreate());
    }

    let onClickTextareaMessage = (text) => {
        props.dispatch(updateTextareaMessageActionCreate(text))
    }
    return <Dialogs sendMessage={sendMessage}
                    updateNewTextareaMessage={onClickTextareaMessage}
                    dialiogs={state.dialogsPage.dialogsData}
                    messages={state.dialogsPage.messagesData}
                    value={state.dialogsPage.updateMessage}/>
}

export default DialogsContainer