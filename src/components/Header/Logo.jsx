// import SiteLogo from "../../assets/afk-logo.svg?react";
import ReactLogo from '../../assets/afk-logo.png';
import css from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={css.link}>
      {/* <SiteLogo className={css.logoImg} /> */}
      <img src={ReactLogo} alt="React Logo" className={css.logoImg}/>

    </Link>
    
  );
};

export default Logo;
