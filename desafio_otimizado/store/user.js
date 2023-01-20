// Api
import { USER_GET } from "./helper/api.js";

// Contantes
const USER_FETCH_STARTED = 'user/FETCH_STARTED';
const USER_FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const USER_FETCH_ERROR = 'user/FETCH_ERROR';

// Action creators
const user_fetch_started = () => ({ type: USER_FETCH_STARTED });
const user_fetch_success = (user) => ({
  type: USER_FETCH_SUCCESS,
  payload: user,
});
const user_fetch_error = (error) => ({
  type: USER_FETCH_ERROR,
  payload: error,
});

// Fetch Token
export const userFetch = (token) => async (dispatch) => {
  const {api_get_url, api_get_options} = USER_GET(token)
  try {
    dispatch(user_fetch_started())
    const response = await fetch(api_get_url, api_get_options)
    const data = await response.json()
    dispatch(user_fetch_success(data))
  } catch (error) {
    dispatch(user_fetch_error(error.message))
  }
};

// Inital State
const initialState = {
  loading: false,
  data: null,
  erro: null,
};

// Reducer
const user = immer.produce((state, action) => {
  switch (action.type) {
    case USER_FETCH_STARTED:
      return { ...state, loading: true };
      break;
    case USER_FETCH_SUCCESS:
      return { loading: false, error: null, data: action.payload};
      break;
    case USER_FETCH_ERROR:
      return { loading: false, error: action.payload, data: null };
      break;
  }
}, initialState);

export default user