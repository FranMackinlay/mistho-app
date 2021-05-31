import axios from 'axios';

const API_URL = '/api';

const UsersSrv = {
  userSignIn: async ({ name, email, password }) => {
    const res = await axios({
      method: 'post',
      url: `${API_URL}/users/signin`,
      data: {
        name,
        email,
        password,
      }
    });
    return res;
  },
}

export default UsersSrv;
