import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";


function NavItem ({text, url}) {



    return (
        <li className={s.navItem}>
            <NavLink to={url}>{text}</NavLink>
        </li>
    )
}

export default NavItem;