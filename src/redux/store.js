import { configureStore } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts/contacts.init-state';

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

const initState = {
  contacts: contactsInitState,
};

export const store = configureStore({
  preloadedState: initState,
  reducer: { contacts: contactReducer },
  devTools: true,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
