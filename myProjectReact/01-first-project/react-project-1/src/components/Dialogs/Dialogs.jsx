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

    let dialogData = [
        {name: 'Valery', id: '1'},
        {name: 'Andrey', id: '2'},
        {name: 'Vladimir', id: '3'},
        {name: 'Alena', id: '4'},
    ]

    let messageData = [
        {message: 'How are you!', id: '1'},
        {message: 'How is you it-incubator!', id: '2'},
        {message: 'Hello!', id: '3'},
        {message: 'Are you from?!', id: '4'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                Users:
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
            </div>
            <div className={s.messages}>
                Messages:
                <Messages message={messageData[0].message}/>
                <Messages message={messageData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs