import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';
import { fetchContacts, addContact, delContact } from '../operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    // fetchContactAction(state) {
    //   state.contacts.isLoading = true;
    // },
    // addContactAction(state, action) {
    //   state.contacts.items.push(action.payload);
    // },
    // delContactAction(state, action) {
    //   state.contacts.items = state.contacts.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
  },
  extraReducers: {
    // FETCH CONTACT
    //
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //
    // ADD CONTACT
    //
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //
    // DELETE CONTACT
    //
    [delContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [delContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
      // const index = state.contacts.items.findIndex(
      //   contact => contact.id === action.payload.id
      // );
      // state.contacts.items.splice(index, 1);
    },
    [delContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

// export const { addContactAction, delContactAction } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;

// ========================================================
// =============запис в локал сторежд======================
// ========================================================
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// const persistConfig = {
//   key: 'storeContacts',
//   storage,
//   // whitelist: ["contacts"],
// };

// export const contactReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );
//
//
// ==============================================
// REZERV
// =======================================
// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitState,
//   reducers: {
//     addContactAction(state, action) {
//       state.contacts.items.push(action.payload);
//     },
//     delContactAction(state, action) {
//       state.contacts.items = state.contacts.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });
