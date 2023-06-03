import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'filters',
  storage,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    value: '',
    visibleTweets: 3,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export const filtersReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);
