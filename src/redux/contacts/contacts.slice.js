import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactsInitState } from './contacts.init-state';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContactAction(state, action) {
      // console.log(state);

      state.contacts.push(action.payload);
    },
    delContactAction(state, action) {
      // console.log(state);

      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContactAction, delContactAction } = contactSlice.actions;

// export const contactReducer = contactSlice.reducer;
const persistConfig = {
  key: 'storeContacts',
  storage,
  // whitelist: ["contacts"],
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
