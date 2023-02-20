import axios from 'axios';
import {
  FETCH_CITIES,
  setCitiesList,
} from '../actions/cities';

const citiesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CITIES:
      axios
        .get('https://www.demo-tribu.tech/api/cities')
        .then((response) => {
          store.dispatch(setCitiesList(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};
export default citiesMiddleware;
