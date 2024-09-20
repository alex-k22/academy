import css from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.link}>
            Головна
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/team" className={css.link}>
            Команда
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/news" className={css.link}>
            Новини
          </NavLink>
        </li>
        <li>
          <NavLink to="/games" className={css.link}>
            Матчі
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/gallery" className={css.link}>
            Галерея
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/video" className={css.link}>
            Відео
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/contacts" className={css.link}>
            Контакти
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
