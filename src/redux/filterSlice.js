import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const filterSlice = createSlice({
  // Имя слайса
  name: 'filter',
  // Начальное состояние редюсера слайса
  initialState,
  // Объект редюсеров
  reducers: {
    addFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

// Генераторы экшенов
export const { addFilter } = filterSlice.actions;
// Редюсер слайса
export const filterReducer = filterSlice.reducer;
