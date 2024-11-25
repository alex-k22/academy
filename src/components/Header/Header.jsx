import { useState, useEffect} from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Container from "../Shared/Container";
import Socials from "../Socials/Socials";
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

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.classList.add("is-open");
    }
    if (!mobileMenuVisible) {
      document.body.classList.remove("is-open");
    }
  }, [mobileMenuVisible]);

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
                {width < 1440 && <Socials />}
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
