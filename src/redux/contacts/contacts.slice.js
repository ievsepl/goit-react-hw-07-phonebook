import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactsInitState } from './contacts.init-state';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    filterContactAction(state, action) {
      state.filter = action.payload;
    },
    addContactAction(state, action) {
      state.contacts.push(action.payload);
    },
    delContactAction(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const { filterContactAction, addContactAction, delContactAction } =
  contactSlice.actions;

const persistConfig = {
  key: 'storeContacts',
  storage,
  whitelist: ['contacts'],
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
