import { useState} from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Container from "../Shared/Container";
import css from "./Header.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = () => {
  const [mobileMenuVisible, setMobilMenuVisible] = useState(false);
  const { width } = useWindowDimensions();
  const { visible } = css;

  const handleMobileToggle = () => {
    setMobilMenuVisible(!mobileMenuVisible);
  };

  const handleNavClick = (event) => {
    if (event.target.tagName === "A") {
      handleMobileToggle();
    }
  };

  return (
    <>
      <header className={css.pageHeader}>
        <Container>
          <div className={css.wrapper}>
            <Logo />
            {width > 1440 && <Navigation />}

            {width < 1440 && (
              <div
                className={`${css.burgerBox} ${
                  mobileMenuVisible ? visible : ""
                }`}
                onClick={handleMobileToggle}
              >
                <div className={css.burgerInner}></div>
              </div>
            )}
            {width < 1440 && (
              <div
                className={`${css.mobile} ${mobileMenuVisible ? visible : ""}`}
                onClick={handleNavClick}
              >
                {width < 1440 && <Navigation />}
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
