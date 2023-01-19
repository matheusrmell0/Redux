
// Constantes
export const FETCH_STARTED = 'token/FETCH_STARTED';
export const FETCH_SUCCESS = 'token/FETCH_SUCCESS';
export const FETCH_ERROR = 'token/FETCH_ERROR';

// Action creators
export const fetch_started = () => ({ type: FETCH_STARTED });
export const fetch_success = (data) => ({ type: FETCH_SUCCESS, payload: data, localStorage: 'data' });
export const fetch_error = (error) => ({ type: FETCH_ERROR, payload: error });

// Initial state
function parse(key, initial){
  try {
    JSON.parse(window.localStorage.getItem(key))
  }catch (error) {
    alert(error.message)
    return initial
  }
}

export const fetchState = {
  loading: false,
  data: parse('data', null) || null,
  error: null,
};

// Reducer
export const fetchReducer = immer.produce((state, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { erro: null, loading: true, data: null };
      break;
    case FETCH_SUCCESS:
      return { loading: false, error: null, data: action.payload};
      break;
    case FETCH_ERROR:
      return { error: action.payload, loading: false, data: null };
      break;
  }
}, fetchState);
