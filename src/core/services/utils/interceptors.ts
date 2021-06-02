import api from './http';
import { store } from '../../store/configureStore';
import { logout } from '../../actionCreators/authActionCreators';

const onExpireToken = () => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response ? error.response.status : error.status;
      const errorMessage = error.message || '';
      const unauthorizedPattern = /status code 401/i;

      if ((status === 401 || errorMessage.match(unauthorizedPattern)) &&
        error.response.data.message !== 'Username or password incorrect') {
        store.dispatch(logout());
        return Promise.reject();
      }

      return Promise.reject(error);
    }
  );
};

export default {
  onExpireToken
};
