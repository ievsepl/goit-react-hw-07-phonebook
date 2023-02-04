import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import Box from './Box/Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  filterContactAction,
  addContactAction,
  delContactAction,
} from 'redux/contacts/contacts.slice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onSubmitForm = data => {
    data.id = nanoid();
    dispatch(addContactAction(data));
  };

  const onFilterForm = e => {
    dispatch(filterContactAction(e.currentTarget.value));
  };

  const visibleNamesMethod = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const deleteContact = contactId => {
    dispatch(delContactAction(contactId));
  };

  const visibleNames = visibleNamesMethod;

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      fontSize="px"
      color="#010101"
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitForm} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilter={onFilterForm} />
      <ContactList contacts={visibleNames} deleteContact={deleteContact} />
    </Box>
  );
};

App.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
  }),
};
