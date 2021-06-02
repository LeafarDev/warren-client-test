import axios from 'axios';

const getToken = () => {
  let token = null;

  if (localStorage.getItem('persist:bankofmars')) {
    // @ts-ignore
    const { auth } = JSON.parse(localStorage.getItem('persist:bankofmars'));
    token = JSON.parse(auth).token;
  }
  return token || 'OAuthAccessToken';
};

export default axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: getToken()
  }
});
