import Container from "components/Shared/Container";
import MatchCard from "../components/MatchCard/MatchCard";
import Loader from "../components/Loader/Loader";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { getData } from "../API/fetch";
import { useEffect, useState } from "react";

const GamesPage = () => {
  const [allResults, setAllResults] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const results = await getData("results");

        if (results.length === 0) {
          Notify.failure("Sorry, but nothing found");
          setStatus("rejected");
        }
        if (results.length > 0) {
          setStatus("resolved");
        }

        setAllResults(results);
      } catch (error) {
        console.log(error);
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };
    fetchData();
  }, []);

  const sortedResults = [...allResults].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="section">
      <Container>
        {allResults && (
          <div>
            <ul>
              {sortedResults.map((results) => {
                return <MatchCard results={results} key={results.date} />;
              })}
            </ul>
          </div>
        )}
        {status === "pending" && <Loader />}
      </Container>
    </section>
  );
};

export default GamesPage;
