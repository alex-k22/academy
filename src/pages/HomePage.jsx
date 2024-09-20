import Container from "components/Shared/Container";
import css from "./HomePage.module.scss";
import StandingTable from "../components/StandingTable/StandingTable";

const HomePage = () => {
  return (
    <section className="section">
      <Container>
        <div className={css.mainImage}>
            АФК
        </div>
        {/* <StandingTable /> */}
      </Container>
    </section>
  );
};

export default HomePage;
