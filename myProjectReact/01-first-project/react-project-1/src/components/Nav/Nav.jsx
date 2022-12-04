import '../../App.css';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
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
        </nav>
    );
}

export default Nav;
