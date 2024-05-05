import SiteLogo from '../../assets/afk-logo-2024-60х60.png';
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
