import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Shared/Container';

const NewsDetailPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    fetch(`https://afkdata.pp.ua/news/${id}`)
      .then(res => res.json())
      .then(data => setNewsItem(data));
  }, [id]);

  if (!newsItem) return <div>Завантаження...</div>;

  return (
        <section className="section">
          <Container>
    <div className="news-detail">
      <h1>{newsItem.title}</h1>
      <img src={newsItem.image} alt={newsItem.title} />
      <div className="news-content" 
           dangerouslySetInnerHTML={{ __html: newsItem.description }} />
      <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
        Джерело - {newsItem.url}
      </a>
    </div>
          </Container>
        </section>
  );
};

export default NewsDetailPage;