import Container from "components/Shared/Container";
import PreviousMatch from "../components/PreviousMatch/PreviousMatch";
import css from "./HomePage.module.scss";
// import { useEffect, useState } from "react";
// import StandingTable from "../components/StandingTable/StandingTable";

const HomePage = () => {
  
  return (
    <section className="section">
      <Container>
        <div className={css.mainImage}>
            <h1>АФК (ДЮФК "Юніон")</h1>
        </div>
        {/* <StandingTable /> */}
        <PreviousMatch />
        
      </Container>
    </section>
  );
};

export default HomePage;
