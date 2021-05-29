import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ArticlesSrv from '../../services/ArticlesSrv';
import './ArticlesScreen.css';

export default function ArticlesScreen(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async user => {
    const {data: {articles}} = await ArticlesSrv.getArticles(user.token);
    setArticles(articles);
    setLoading(false);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return props.history.push('/login');
    } else {
      return getArticles(user);
    }
  }, [props]);

  return (
    <div>
      {loading ? (<LoadingBox></LoadingBox>) : articles.length ? (
        <ul className="list-unstyled articles-list fm-df fm-flww fm-jucb fm-px-3">
          {articles.map((article, i) => (
            <li className="article-card card fm-mr-3 fm-mb-3" key={i}>
              <Link to={{pathname: `/article/${article.slug}`, state: article}} params={article.link}>
                <div className="article text-center">
                  <img src={article.img} alt="" className="article-img fm-maw100" />
                  <h3 className="fm-m-0 text-center fm-bold fm-p-2 fm-h50 fm-df fm-aliic">{article.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>No articles were found, please try again later!</div>
      )}
    </div>
  )
}
