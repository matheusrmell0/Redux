// Constants
const INCREMENTAR = 'contador/INCREMENTAR';
const REDUZIR = 'contador/REDUZIR';

// Action creators
export const incrementar = (payload) => ({ type: INCREMENTAR, payload });
export const reduzir = () => ({ type: REDUZIR });

// Initial state
const initialState = 0;

// Reducer
const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR:
      return state + action.payload;
      break;
    case REDUZIR:
      return state - action.payload;
      break;
  }
}, initialState);

export default reducer;
