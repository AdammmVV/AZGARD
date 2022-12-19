import '../../App.css';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import Friends from "./Friends/Friends";

const Nav = (props) => {
    let friends = props.friends.map(f => <Friends name={f.name} src={f.src}/>)
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages"
                         className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news"
                         className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music"
                         className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}>Music</NavLink>
            </div>
            <div className={s.setting}>
                <NavLink to="/settings"
                         className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}>Settings</NavLink>
            </div>
            <div className={s.friendsOnline}>
                Friends:
                <div className={s.friends}>
                    {friends}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
