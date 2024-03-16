import { Outlet } from "react-router-dom";
// import css from "./Layout.module.scss";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
