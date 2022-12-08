import s from './Frienda.module.css';
import React from "react";

const Friends = (props) => {

    return (
        <div className={s.friend}>
                <div>
                    <img src={props.src} alt={props.name}/>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
        </div>
    )
}


export default Friends;
