import { Outlet } from "react-router-dom";
// import css from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollTop from "../ScrollTop/ScrollTop";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTop/>
    </>
  );
};

export default Layout;
