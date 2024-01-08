import { Outlet } from "react-router-dom";
import Logo from "../Header/Logo";
import Navigation from "../Header/Navigation";
import css from "./Layout.module.scss";
import Container from "components/Shared/Container";

const Layout = () => {
  return (
    <>
      <header className={css.pageHeader}>
        <Container>
        <div className={css.wrapper}>
          <Logo />
          <Navigation className={css.mainNav}/>
        </div>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
