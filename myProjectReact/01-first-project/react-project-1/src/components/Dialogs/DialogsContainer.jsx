import React from "react";
import {addMessageActionCreate, updateTextareaMessageActionCreate} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(addMessageActionCreate());
                }

                let onClickTextareaMessage = (text) => {
                    store.dispatch(updateTextareaMessageActionCreate(text))
                }

                return <Dialogs sendMessage={sendMessage}
                                updateNewTextareaMessage={onClickTextareaMessage}
                                dialogs={state.dialogsPage.dialogsData}
                                messages={state.dialogsPage.messagesData}
                                value={state.dialogsPage.updateMessage}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer
