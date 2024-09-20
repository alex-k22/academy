import Container from "../components/Shared/Container";
import ArticlesSet from "../components/CardSet/CardSet";
import Loader from "../components/Loader/Loader"
// import news from "../assets/data/press.json";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { getData } from "../API/fetch";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [allNews, setAllNews] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const news = await getData("news");

        if (news.length === 0) {
          Notify.failure("Sorry, but nothing found");
          setStatus("rejected");
        }
        if (news.length > 0) {
          setStatus("resolved");
        }

        setAllNews(news);
      } catch (error) {
        console.log(error);
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };
    fetchData();
  }, []);

  const sortedNews = [...allNews].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="section">
      <Container>
        {allNews && (
          <div>
            <ArticlesSet news={sortedNews} />
          </div>
        )}
        {status === "pending" && <Loader />}
      </Container>
    </section>
  );
};

export default NewsPage;
