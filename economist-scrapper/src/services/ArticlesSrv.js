import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const ArticlesSrv = {
  getArticles: async () => {
    const res = await axios({
      method: 'get',
      url: `${API_URL}/articles`,
    });
    return res;
  },
  getArticle: async ({ link, slug }) => {
    const res = await axios({
      method: 'get',
      url: `${API_URL}/articles/${slug}`,
      params: {
        link,
      },
    });
    return res;
  },

}

export default ArticlesSrv;
