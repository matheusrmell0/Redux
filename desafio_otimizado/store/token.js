// Helper
import getLocalStorage from './helper/getLocalStorage.js';

// Api
import { TOKEN_GET } from './helper/api.js';

// Contantes
const TOKEN_FETCH_STARTED = 'token/FETCH_STARTED';
const TOKEN_FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const TOKEN_FETCH_ERROR = 'token/FETCH_ERROR';

// Action creators
const token_fetch_started = () => ({ type: TOKEN_FETCH_STARTED });
const token_fetch_success = (token) => ({
  type: TOKEN_FETCH_SUCCESS,
  payload: token,
  localStorage: 'data',
});
const token_fetch_error = (error) => ({
  type: TOKEN_FETCH_ERROR,
  payload: error,
});

// Fetch Token
export const tokenFetch = (user) => async (dispatch) => {
  const { api_post_url, api_post_options } = TOKEN_GET(user);
  try {
    dispatch(token_fetch_started());
    const response = await fetch(api_post_url, api_post_options);
    const { token } = await response.json();
    dispatch(token_fetch_success(token));
  } catch (error) {
    dispatch(token_fetch_error(error.message));
  }
};

// Inital State
const initialState = {
  loading: false,
  data: getLocalStorage('data', null),
  erro: null,
};

// Reducer
const token = immer.produce((state, action) => {
  switch (action.type) {
    case TOKEN_FETCH_STARTED:
      return { ...state, loading: true };
      break;
    case TOKEN_FETCH_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
        localStorage: action.payload,
      };
      break;
    case TOKEN_FETCH_ERROR:
      return { loading: false, error: action.payload, data: null };
      break;
  }
}, initialState);

export default token;
