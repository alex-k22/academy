import Article from "../Article/Artcle";
import css from "./CardSet.module.scss";


const ArticlesSet = ( {news} ) => {
return (
    <ul className={css.set}>
        {news.map((news) => {
            return <Article news={news} key={news.url} />
        })}
    </ul>
)
}

export default ArticlesSet;