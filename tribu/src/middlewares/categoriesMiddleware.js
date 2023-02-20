import axios from 'axios';
import {
  FETCH_CATEGORIES,
  setCategoriesList,
} from '../actions/categories';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios
        .get('https://www.demo-tribu.tech/api/categories')
        .then((response) => {
          store.dispatch(setCategoriesList(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};
export default categoriesMiddleware;
