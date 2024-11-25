import {
  // FaTiktok,
  // FaInstagram,
  FaYoutube,
  // FaTelegramPlane,
} from "react-icons/fa";
import css from "./Socials.module.scss";

const Socials = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.subHeader}>Ми в соціальних мережах:</h2>
      <ul className={css.list}>
        <li>
          <a
            href="https://www.youtube.com/@%D0%94%D0%B5%D0%BD%D0%B8%D1%81%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%8C-%D0%B12%D0%B7"
            target="blank"
            aria-label="Go to AFK youtube channel"
            className={css.link}
          >
            <FaYoutube className={css.icon} />
          </a>
        </li>
        {/* <li>
          <a
            href="https://www.youtube.com/@rpm.production"
            target="blank"
            aria-label="Go to our youtube channel"
            className={css.link}
          >
            <FaYoutube className={css.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rpm.production.ua/"
            target="blank"
            aria-label="Go to our instagram"
            className={css.link}
          >
            <FaInstagram className={css.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.telegram.me/+380677566849"
            target="blank"
            aria-label="Go to our instagram"
            className={css.link}
          >
            <FaTelegramPlane className={css.icon} />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Socials;
