import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useMemo } from 'react';
import { PropTypes } from 'prop-types';

// import { delContactAction } from 'redux/contacts/contacts.slice';

import Box from '../Box/Box';
import {
  getContactState,
  getIsLoadingState,
  getErrorState,
} from 'redux/contacts/contacts.selectors';
import { getFilterState } from 'redux/filter/filter.selectors';
import { delContact, fetchContacts } from 'redux/operations';

const ContactItem = () => {
  const contacts = useSelector(getContactState);
  const isLoading = useSelector(getIsLoadingState);
  const error = useSelector(getErrorState);
  const filter = useSelector(getFilterState);
  const dispatch = useDispatch();
  console.log(isLoading, contacts);

  const filteredNamesMethod = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const deleteContact = contactId => {
  //   dispatch(delContactAction(contactId));
  // };
  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  // const filteredNames = filteredNamesMethod;
  const filteredNames = filteredNamesMethod.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}

      {filteredNames.map(({ id, name, number }) => {
        return (
          <Box border="1px solid red" as="li" key={id}>
            {name} - {number}
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </Box>
        );
      })}
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  // deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
