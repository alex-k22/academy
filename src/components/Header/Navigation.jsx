import css from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
   return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.link}>
            Домашня
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" className={css.link}>
            Команда
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={css.link}>
            Галерея
          </NavLink>
        </li>
        <li>
          <NavLink to="/media" className={css.link}>
            Медіа
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={css.link}>
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
