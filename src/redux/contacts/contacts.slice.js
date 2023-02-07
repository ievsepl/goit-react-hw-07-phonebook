import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';
import { fetchContacts, addContact, delContact } from '../operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
// console.log([fetchContacts.pending]);

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
  // extraReducers: {
  //   //===========================================
  //   // FETCH CONTACT
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.rejected]: handleRejected,

  //   [fetchContacts.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = action.payload;
  //   },
  //   //===========================================
  //   // ADD CONTACT
  //   [addContact.pending]: handlePending,
  //   [addContact.rejected]: handleRejected,

  //   [addContact.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items.push(action.payload);
  //   },
  //   //============================================
  //   // DELETE CONTACT
  //   [delContact.pending]: handlePending,
  //   [delContact.rejected]: handleRejected,

  //   [delContact.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = state.contacts.items.filter(
  //       contact => contact.id !== action.payload.id
  //     );
  //     // const index = state.contacts.items.findIndex(
  //     //   contact => contact.id === action.payload.id
  //     // );
  //     // state.contacts.items.splice(index, 1);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      });
    builder
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      });
    builder
      .addCase(delContact.pending, handlePending)
      .addCase(delContact.rejected, handleRejected)
      .addCase(delContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      });
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
