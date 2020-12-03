import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'homepage',
  initialState: {
    isLoading: false,
  },
  reducers: {},
});

const { actions, reducer } = configSlice;

// eslint-disable-next-line
export const {} = actions;

export default reducer;
