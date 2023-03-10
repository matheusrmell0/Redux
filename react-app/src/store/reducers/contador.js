import { createSlice } from '@reduxjs/toolkit';

// const slice = createSlice({
//   name: 'contador',
//   initialState: {
//     total: 0,
//   },
//   reducers: {
//     incrementar(state) {
//       state.total++;
//     },
//     reduzir(state) {
//       state.total--;
//     },
//   },
// });

// const slice = createSlice({
//   name: 'contador',
//   initialState: {
//     total: 0,
//   },
//   reducers: {
//     incrementar(state) {
//       return { total: state.total + 1}
//     },
//     reduzir(state) {
//       state.total--;
//     },
//   },
// });

const slice = createSlice({
  name: 'contador',
  initialState: 0,
  reducers: {
    incrementar: (state) => state + 1,
    reduzir: (state) => state - 1,
  },
});

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;
