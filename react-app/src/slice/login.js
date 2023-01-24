// API
import { TOKEN_POST, USER_GET } from '../store/api';

// Toolkit Redux
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'login',
  initialState: {
    user: { loading: false, error: null, data: null },
    token: {
      loading: false,
      error: null,
      data: null,
    },
  },
  reducers: {
    startedTokenFetch(state) {
      state.token.loading = true;
      state.token.error = null;
    },
    successTokenFetch(state, action) {
      state.token.loading = false;
      state.token.error = null;
      state.token.data = action.payload;
    },
    errorTokenFetch(state, action) {
      state.token.loading = false;
      state.token.data = null;
      state.token.error = action.payload;
    },
    startedUserFetch(state) {
      state.user.loading = true;
      state.user.error = null;
    },
    successUserFetch(state, action) {
      state.user.loading = false;
      state.user.error = null;
      state.user.data = action.payload;
    },
    errorUserFetch(state, action) {
      state.user.loading = false;
      state.user.data = null;
      state.user.error = action.payload;
    },
  },
});

// Actions
export const {
  startedTokenFetch,
  successTokenFetch,
  errorTokenFetch,
  startedUserFetch,
  successUserFetch,
  errorUserFetch,
} = slice.actions;

// Fetch function
export const tokenFetch = (user) => async (dispatch) => {
  const { url, options } = TOKEN_POST(user);
  try {
    dispatch(startedTokenFetch());
    const response = await fetch(url, options);
    const data = await response.json();
    return dispatch(successTokenFetch(data));
  } catch (error) {
    return dispatch(errorTokenFetch(error.message));
  }
};

export const userFetch = (token) => async (dispatch) => {
  const { url, options } = USER_GET(token);
  try {
    dispatch(startedUserFetch());
    const response = await fetch(url, options);
    const data = await response.json();
    return dispatch(successUserFetch(data));
  } catch (error) {
    return dispatch(errorUserFetch(error.message));
  }
};

export const userLogin = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(tokenFetch(user));
    if (payload.token !== undefined) {
      await dispatch(userFetch(payload.token));
    }
  } catch {}
};

export default slice.reducer;
