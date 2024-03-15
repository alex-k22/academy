import Article from "../Article/Artcle";
import css from "./CardSet.module.scss";


const ArticlesSet = ( {articles} ) => {
return (
    <ul className={css.set}>
        {articles.map((articles) => {
            return <Article articles={articles} key={articles.url} />
        })}
    </ul>
)
}

export default ArticlesSet;