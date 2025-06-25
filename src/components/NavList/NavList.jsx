import s from "./Navlist.module.css";
import NavItem from "../NavItem/NavItem";

function NavList({ items }) {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <div>
            <span>Місце під лого</span>
          </div>
        </li>
        {items.map((item) => {
          return <NavItem text={item.text} url={item.url} key={item.id}/>;
        })}
      </ul>
    </nav>
  );
}

export default NavList;
