import Container from "../Shared/Container";
import css from "../Footer/Footer.module.scss";
import dufldoLogo from "../../assets/img/logo/dufldo-logo.jpeg";
import uafLogo from "../../assets/img/logo/uaf-logo.png";
import youtubeLogo from "../../assets/img/logo/youtube-logo.png";

const Footer = () => {
  return (
    <>
      <footer className={css.pageFooter}>
        <Container>
          <div className={css.wrapper}>
            <div>
              <p>(c) Футбольний клуб АФК (ДЮФК Юніон), 2025</p>
              <a href="mailto:dufkunion2012@gmail.com" className={css.link}>dufkunion2012@gmail.com</a>
            </div>
            
            <div>
                <h3 className={css.footerLinksHeader}>Корисні посилання:</h3>
              <ul>
              <li>
                  <a href="https://www.youtube.com/@afkunion" className={css.link} target="blank">
                    <img
                      src={youtubeLogo}
                      alt="Лого Youtube"
                      className={css.logo}
                    ></img>
                    Youtube АФК (ДЮФК Юніон)
                  </a>
                </li>
                <li>
                  <a href="https://dufldo.com.ua/" className={css.link} target="blank">
                    <img
                      src={dufldoLogo}
                      alt="Лого ДЮФЛДО"
                      className={css.logo}
                    ></img>
                    Дитячо-юнацька футбольна ліга Дніпропетровської області
                  </a>
                </li>
                <li>
                  <a href="https://start.uaf.ua/" className={css.link} target="blank">
                    <img
                      src={uafLogo}
                      alt="Лого УАФ"
                      className={css.logo}
                    ></img>
                    Українська асоціація футболу
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
