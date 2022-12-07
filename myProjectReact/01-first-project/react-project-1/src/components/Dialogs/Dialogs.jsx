import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)
    let messages = props.dialogsPage.messagesData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                Users:
                { dialogs }
            </div>
            <div className={s.messages}>
                Messages:
                { messages }
            </div>
        </div>
    )
}

export default Dialogs