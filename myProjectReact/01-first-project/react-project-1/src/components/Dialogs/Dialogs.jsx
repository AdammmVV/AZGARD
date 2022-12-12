import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)
    let messages = props.dialogsPage.messagesData.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
    }
    let onChangeTextareaMessage = () => {
        let text = newMessageElement.current.value;
        props.updateTextareaMessage(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                Users:
                {dialogs}
            </div>
            <div className={s.messages}>
                Messages:
                <div className={s.messageRow}>
                    {messages}
                </div>
                <div>
                    <div>
                        <textarea onChange={onChangeTextareaMessage}
                                  ref={newMessageElement}
                                  value={props.dialogsPage.updateMessage} />
                    </div>
                    <div>
                        <button onClick={addMessage}>AddMessage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs