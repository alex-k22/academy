import SiteLogo from '../../assets/afk-logo-60x60.png';
import css from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={css.link}>
      <img src={SiteLogo} alt="AFK Logo" className={css.logoImg}/>
    </Link>
  );
};

export default Logo;
