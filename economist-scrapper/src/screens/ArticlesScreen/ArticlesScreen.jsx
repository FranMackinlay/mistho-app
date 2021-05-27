import React, { useEffect, useState } from 'react'
import ArticlesSrv from '../../services/ArticlesSrv';

export default function ArticlesScreen(props) {

  const [articles, setArticles] = useState([])

  const getArticles = async () => {
    const articles = await ArticlesSrv.getArticles();
    console.log(`articles`, articles);
    setArticles(articles);
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
      Articles
    </div>
  )
}
