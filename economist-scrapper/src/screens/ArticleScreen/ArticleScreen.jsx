import React, { useEffect, useState } from 'react'
import ArticlesSrv from '../../services/ArticlesSrv';

export default function ArticlesScreen(props) {

  const [article, setArticle] = useState([])

  const getArticles = async () => {
    const {data: {article}} = await ArticlesSrv.getArticle();
    console.log(`article`, article);
    setArticle(article);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?._id) {
      props.history.push('/login');
    } else {
      getArticles();
    }
  }, [props.history]);

  return (
    <div>
      {!article.length && (
        <div>Loading articles...</div>
      )}
      {article.length && (
        <ul>
          {article.map((article, i) => (
            <li key={i}>
              <a target="_blank" rel="noreferrer" href={article.link}>{article.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
