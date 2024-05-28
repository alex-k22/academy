import Container from "components/Shared/Container";
import css from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className="section">
      <Container>
        <div className={css.mainImage}>
            АФК
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
