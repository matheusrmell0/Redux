import createAsyncSlice from '../store/helper/createAsyncSlice';
import { PHOTOS_API } from '../store/api/api';

const cache = createAsyncSlice({
  name: 'cache',
  initialState: {
    cache: 5000,
  },
  fetchConfig: () => {
    const { url, options } = PHOTOS_API(10);
    return { url, options };
  },
});

export const getOverFiveKg = (state) => {
  const { data } = state.cache;
  const overFiveKg = data?.filter(({ peso }) => peso >= 5);
  const transformPound = overFiveKg?.map((photo) => ({
    ...photo,
    peso: Math.floor(photo.peso * 2.2),
  }));
  return transformPound;
};

export const photosCache = cache.asyncAction;
export default cache.reducer;
