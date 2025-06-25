import s from "./NavItem.module.css";


function NavItem ({text, url}) {



    return (
        <li className={s.navItem}>
            <a href={url}>{text}</a>
        </li>
    )
}

export default NavItem;