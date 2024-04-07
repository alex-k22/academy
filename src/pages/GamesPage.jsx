import Container from "components/Shared/Container";
import MatchCard from "../components/MatchCard/MatchCard";
import results from "../assets/results.json";

const GamesPage = () => {

  const sortedResults = [...results].sort((a, b) =>  new Date(b.date) - new Date(a.date));

    return (
        <section className="section">
          <Container>
            <div>
                <ul>
                  {sortedResults.map((results) => {
                      return <MatchCard results={results} key={results.date}/>
                    })
                  }
                </ul>
            </div>
          </Container>
        </section>
      );
}

export default GamesPage;

