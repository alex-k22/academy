// pages/InternalNewsPage.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../API/fetch";
import { MdCalendarToday } from "react-icons/md";
import FormatDate from "../helpers/FormatDate";
import Loader from "../components/Loader/Loader";
import css from "./InternalNewsPage.module.scss";

const InternalNewsPage = () => {
  const { newsId } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const allNews = await getData("news");
        const foundNews = allNews.find(item => item.id === newsId);
        setNewsItem(foundNews);
      } catch (error) {
        console.error("Помилка завантаження новини:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsId]);

  if (loading) return <Loader />;
  
  if (!newsItem) {
    return (
      <div className={css.error}>
        <h1>Новину не знайдено</h1>
        <p>Спробуйте повернутися на головну сторінку</p>
      </div>
    );
  }

  return (
    <div className={css.container}>
      <article className={css.article}>
        <header className={css.header}>
          <h1 className={css.title}>{newsItem.title}</h1>
          <p className={css.date}>
            <MdCalendarToday /> {FormatDate(new Date(newsItem.date))}
          </p>
        </header>
        
        {newsItem.image && (
          <div className={css.imageContainer}>
            <img 
              src={newsItem.image} 
              alt={newsItem.title}
              className={css.image}
            />
          </div>
        )}
        
        {newsItem.description && (
          <div 
            className={css.content}
            dangerouslySetInnerHTML={{ __html: newsItem.description }}
          />
        )}
      </article>
    </div>
  );
};

export default InternalNewsPage;