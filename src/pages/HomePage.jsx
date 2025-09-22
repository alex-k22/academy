import Container from "components/Shared/Container";
import PreviousMatch from "../components/PreviousMatch/PreviousMatch";
import Info from "../components/Info/Info";
import css from "./HomePage.module.scss";
// import { useEffect, useState } from "react";
import ChampResults from "../components/ChampResults/ChampResults";
// import MatchSchedule from "../components/MatchSchedule/MatchSchedule";

const HomePage = () => {
  
  return (
    <section className="section">
      <Container>
        <div className={css.mainImage}>
            <h1>АФК (ДЮФК Юніон)</h1>
        </div>
        {/* <Info /> */}
        <PreviousMatch />
        {/* <MatchSchedule /> */}
        {/* <ChampResults tournament={"region"} stages={2} cutoffDate="2025-05-12"/> */}
        {/* <ChampResults tournament={"dnipro"}/> */}
      </Container>
    </section>
  );
};

export default HomePage;
