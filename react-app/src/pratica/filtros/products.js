import createAsyncSlice from '../../store/helper/createAsyncSlice';
import data from './data';

export const selectUniqueColors = ({ products }) =>
  Array.from(new Set(products.data.map(({ color }) => color)));

const slice = createAsyncSlice({
  name: 'products',
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        max: 0,
        min: 0,
      },
    },
  },
  reducers: {
    filterData(state, action) {
      state.filters[action.payload.name] = action.payload.value;
    },
  },
});

export const { filterData } = slice.actions;

export default slice.reducer;
