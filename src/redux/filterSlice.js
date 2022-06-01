import { createSlice } from '@reduxjs/toolkit';

const queryFilter = '';

export const filterSlice = createSlice({
  name: 'inputFilter',
  initialState: queryFilter,

  reducers: {
    changeFilter(_state, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const getFilterValue = state => state.filter;
