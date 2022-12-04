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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                Users:
                <DialogItem name='Valery' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Vladimir' id='3'/>
                <DialogItem name='Nikita' id='4'/>
            </div>
            <div className={s.messages}>
                Messages:
                <Messages message='How are you!'/>
                <Messages message='How is you it-incubator!'/>
                <Messages message='Hello!'/>
                <Messages message='Are you from?!'/>
            </div>
        </div>
    )
}

export default Dialogs