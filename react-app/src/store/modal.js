import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modal',
  initialState: true,
  reducers: {
    abrir: () => true,
    fechar: () => false,
  },
});

export const { abrir, fechar } = slice.actions;
export default slice.reducer;
