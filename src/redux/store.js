import { configureStore } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts/contacts.init-state';
import { filterInitState } from 'redux/filter/filter.init-state';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';

const initState = {
  contacts: contactsInitState,
  filter: filterInitState,
};
// console.log(initState.filter);
// console.log(initState.contacts);

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

export const persistor = persistStore(store);
