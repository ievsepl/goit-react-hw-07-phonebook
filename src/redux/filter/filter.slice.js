import { createSlice } from '@reduxjs/toolkit';
import { filterInitState } from './filter.init-state';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    filterContactAction(state, action) {
      console.log(state.filter);
      state.filter = action.payload;
    },
  },
});
console.log(filterSlice.actions);
export const filterReducer = filterSlice.reducer;
export const { filterContactAction } = filterSlice.actions;
