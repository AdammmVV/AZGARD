import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)
    let messages = props.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.sendMessage();
    }

    let onChangeTextareaMessage = () => {
        let text = newMessageElement.current.value;
        props.updateNewTextareaMessage(text)
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
                                  value={props.value} />
                    </div>
                    <div>
                        <button onClick={addMessage}>SendMessage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs