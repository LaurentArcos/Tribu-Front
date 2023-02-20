import axios from 'axios';
import {
  FETCH_INTERESTS,
  setInterestsList,
} from '../actions/interests';

const interestsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INTERESTS:
      axios
        .get('https://www.demo-tribu.tech/api/posts')
        .then((response) => {
          store.dispatch(setInterestsList(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      next(action);
  }
};

export default interestsMiddleware;
