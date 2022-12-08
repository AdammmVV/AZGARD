import s from './../Nav.module.css';
import React from "react";

const Friends = (props) => {

    return (
        <div className={s.friends}>
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
