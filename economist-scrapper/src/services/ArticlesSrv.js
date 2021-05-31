import axios from 'axios';

const API_URL = '/api';

const ArticlesSrv = {
  getArticles: async token => {
    const res = await axios({
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${API_URL}/articles`,
    });
    return res;
  },
  getArticle: async ({ link, slug }, token) => {
    const res = await axios({
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${API_URL}/articles/${slug}`,
      params: {
        link,
      },
    });
    return res;
  },

}

export default ArticlesSrv;
