import { createSlice } from '@reduxjs/toolkit';
import { USER_GET, TOKEN_POST } from '../api/api';

export const slice = createSlice({
  name: 'login',
  initialState: {
    token: {
      loading: false,
      data: null,
      error: null,
    },
    user: {
      loading: false,
      data: null,
      error: null,
    },
  },
  reducers: {
    fetchTokenStart(state) {
      state.token.loading = true;
      state.token.error = null;
    },
    fetchTokenSuccess(state, action) {
      state.token.loading = false;
      state.token.error = null;
      state.token.data = action.payload;
    },
    fetchTokenError(state, action) {
      state.token.loading = false;
      state.token.error = action.payload;
      state.token.data = null;
    },
    fetchUserStart(state) {
      state.user.loading = true;
      state.user.error = null;
    },
    fetchUserSuccess(state, action) {
      state.user.loading = false;
      state.user.error = null;
      state.user.data = action.payload;
    },
    fetchUserError(state, action) {
      state.user.loading = false;
      state.user.error = action.payload;
      state.user.data = null;
    },
  },
});

export const {
  fetchTokenStart,
  fetchTokenSuccess,
  fetchTokenError,
  fetchUserStart,
  fetchUserSuccess,
  fetchUserError,
} = slice.actions;

export const fetchToken = (user) => async (dispatch) => {
  const { url, options } = TOKEN_POST(user);
  try {
    dispatch(fetchTokenStart());
    const response = await fetch(url, options);
    const data = await response.json();
    return dispatch(fetchTokenSuccess(data));
  } catch (error) {
    return dispatch(fetchTokenError(error.message));
  }
};

export const fetchUser = (token) => async (dispatch) => {
  const { url, options } = USER_GET(token);
  try {
    dispatch(fetchUserStart());
    const response = await fetch(url, options);
    const data = await response.json();
    return dispatch(fetchUserSuccess(data));
  } catch (error) {
    return dispatch(fetchUserError(error.message));
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) {
      await dispatch(fetchUser(payload.token));
    }
  } catch (error) {
    alert(error.message);
  }
};

export default slice.reducer;
