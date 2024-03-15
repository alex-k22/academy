import Logo from "./Logo";
import Navigation from "./Navigation";
import Container from "../Shared/Container";
import css from "./Header.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const { width } = useWindowDimensions();
  return (
    <>
      <header className={css.pageHeader}>
        <Container>
          <div className={css.wrapper}>
            <Logo />
            {width > 1440 && <Navigation />}
            {width < 1440 && <RxHamburgerMenu className={css.burgerIcon}/>}        
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;