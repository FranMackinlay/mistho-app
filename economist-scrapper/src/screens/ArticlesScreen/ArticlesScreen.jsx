import React, { useEffect, useState } from 'react'
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ArticlesSrv from '../../services/ArticlesSrv';

export default function ArticlesScreen(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    const {data: {articles}} = await ArticlesSrv.getArticles();
    console.log(`articles`, articles);
    setArticles(articles);
    setLoading(false);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      {loading ? (<LoadingBox></LoadingBox>) : (
        <ul>
          {articles.map((article, i) => (
            <li key={i}>
              <a target="_blank" rel="noreferrer" href={article.link}>{article.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
