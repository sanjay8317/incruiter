'use client';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';

const middleware = [logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export default store;