import createAsyncSlice from '../helper/createAsyncSlice';
import { TOKEN_POST, USER_GET } from '../api/api';
import { combineReducers } from '@reduxjs/toolkit';
import getLocalStorage from '../helper/getLocalStorage';

const token = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: getLocalStorage('token', null),
    },
  },
  reducers: {
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: 'token',
              value: payload.token,
            },
          },
        };
      },
    },
  },
  fetchConfig: (payload) => {
    const { url, options } = TOKEN_POST(payload);
    return { url, options };
  },
});

const user = createAsyncSlice({
  name: 'user',
  fetchConfig: (token) => {
    const { url, options } = USER_GET(token);
    return { url, options };
  },
});

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;
const reducer = combineReducers({ token: token.reducer, user: user.reducer });
export default reducer;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch {}
};

export const autoLogin = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.login.token.data;
  if (token) {
    await dispatch(fetchUser(token));
  }
};
