import s from "./Header.module.css";
import NavList from "../NavList/NavList";

function Header({items}) {
  return (
    <header className={s.header}>
<NavList items={items}/>
    </header>
  );
}

export default Header;
