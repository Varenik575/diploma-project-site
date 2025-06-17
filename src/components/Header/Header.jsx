import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.navList}>
          <li>
            <div>
              <span>Logo placeholder</span>
            </div>
          </li>
          <li>
            <a href="url">Головна</a>
          </li>
          <li>
            <a href="url">Виготовлення устаткування</a>
          </li>
          <li>
            <a href="url">Виготовлення блістерного пакування</a>
          </li>
          <li>
            <label htmlFor="paclage-select">Каталог</label>
            <select name="" id="package-select">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </li>
          <li>
            <a href="url">Замовлення</a>
          </li>
          <li>
            <div>
              <label htmlFor="lang-select">select language</label>
              <select name="" id="lang-select">
                <option value=""></option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
