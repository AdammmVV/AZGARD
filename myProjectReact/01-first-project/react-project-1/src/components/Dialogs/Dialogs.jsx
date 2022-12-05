import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/messages/${props.id}`
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: '1', name: 'Valery'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Vladimir'},
        {id: '4', name: 'Alena'},
    ];

    let messagesData = [
        {id: '1', message: 'How are you!'},
        {id: '2', message: 'How is you it-incubator!'},
        {id: '3', message: 'Hello!'},
        {id: '4', message: 'Are you from?!'},
    ];

    let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = messagesData.map(m => <Messages message={m.message}/>)

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