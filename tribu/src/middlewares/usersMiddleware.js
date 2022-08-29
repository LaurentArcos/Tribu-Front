import axios from 'axios';
import {
  FETCH_USER,
  setUser,
} from '../actions/user';

const usersMiddleware = (store) => (next) => (action) => {
  const { token } = store.getState().user;

  switch (action.type) {
    case FETCH_USER:
      axios.defaults.headers.common.Authorization = `bearer ${token}`;
      axios
        .get('https://pierre-henri-kocan-server.eddi.cloud/projet-reseau-social-back/public/api/users/')
        .then((response) => {
          console.log(response.data);
          store.dispatch(setUser(
            response.data.id,
            response.data.email,
            response.data.firstname,
            response.data.lastname,
            response.data.city.id,
            response.data.city.name,
            response.data.post,
            response.data.prensentation,
            response.data.image,
          ));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};
export default usersMiddleware;
