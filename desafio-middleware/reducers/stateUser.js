// Constantes
export const user_FETCH_STARTED = 'user/FETCH_STARTED'
export const user_FETCH_SUCCESS = 'user/FETCH_SUCCESS'
export const user_FETCH_ERROR = 'user/FETCH_ERROR'

// Action creators
export const user_started = () => ({type: user_FETCH_STARTED})
export const user_success = (user) => ({type: user_FETCH_SUCCESS, payload: user, localStorage: 'user'})
export const user_error = (error) => ({type: user_FETCH_ERROR, payload: error})

// Inital State
const initialState = {
  loading: false,
  user: null,
  error: null,
};

// Reducer
export const userReducer = immer.produce((state, action) => {
  switch (action.type) {
    case user_FETCH_STARTED:
      return { erro: null, loading: true, user: null };
      break;
    case user_FETCH_SUCCESS:
      return { loading: false, error: null, user: action.payload};
      break;
    case user_FETCH_ERROR:
      return { error: action.payload, loading: false, user: null };
      break;
  }
}, initialState);
