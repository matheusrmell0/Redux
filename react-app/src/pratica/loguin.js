import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {
    fetchTokenStarted(state) {
      state.loading = true;
    },
    fetchTokenSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchTokenError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchTokenStarted, fetchTokenSuccess, fetchTokenError } =
  slice.actions;

export const tokenFetch = (user) => async (dispatch) => {
  try {
    dispatch(fetchTokenStarted());
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );
    const data = await response.json();
    return dispatch(fetchTokenSuccess(data));
  } catch (error) {
    return dispatch(fetchTokenError(error.message));
  }
};

export default slice.reducer;
