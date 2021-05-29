import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ArticlesSrv from '../../services/ArticlesSrv';
import './ArticleScreen.css';

export default function ArticleScreen(props) {

  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    const {link, slug} = props.location.state;
    const {data: {article}} = await ArticlesSrv.getArticle({link, slug});
    console.log(`article`, article);
    setArticle(article);
    setLoading(false);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?._id) {
      props.history.push('/login');
    } else {
      getArticles();
    }
  }, [props]);

  return (
    <div>
      {loading ? (<LoadingBox></LoadingBox>) : !article ? (
        <div>Loading article...</div>
      ) : (
        <>
          <Link to="/articles">
            <div className="fm-abs fm-ml-2 ">
              <button className="btn btn-info">
                <i className="fa fa-arrow-left fm-mr-1"></i>
                <span>Go Back</span>
              </button>
            </div>
          </Link>
          <div className="article-container fm-m-auto fm-pb-2">
            <h1 className="article-title">{article.title}</h1>
            <img className="fm-my-3 fm-maw100" src={article.img} alt="" />
            <p>{article.body}</p>
          </div>
        </>
      )}
    </div>
  )
}
