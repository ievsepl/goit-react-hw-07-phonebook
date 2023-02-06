import { configureStore } from '@reduxjs/toolkit';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsInitState } from './contacts/contacts.init-state';
import { filterInitState } from 'redux/filter/filter.init-state';
import { contactReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';
// import axios from 'axios';

const initState = {
  contacts: contactsInitState,
  filter: filterInitState,
};

export const store = configureStore({
  preloadedState: initState,
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
  devTools: true,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
