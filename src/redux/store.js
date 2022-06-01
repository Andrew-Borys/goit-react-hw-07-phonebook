import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../services/ContactsApi';
import { filterSlice } from '../redux/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
