import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/messages/${props.id}`
    return (
        <div className={s.dialog}>
            <div>
                <img src={props.src} alt={props.name} />
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem