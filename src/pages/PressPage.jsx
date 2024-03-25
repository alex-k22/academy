import Container from "../components/Shared/Container";
import ArticlesSet from "../components/CardSet/CardSet";
import articles from "../assets/press.json";

const PressPage = () => {
    return (
        <section className="section">
          <Container>
            <div>
                <ArticlesSet articles={articles} />
            </div>
          </Container>
        </section>
      );
}

export default PressPage;