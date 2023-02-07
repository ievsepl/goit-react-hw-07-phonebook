import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { ItemStyle, ContactStyle } from './ContactItem.styled';

// import { delContactAction } from 'redux/contacts/contacts.slice';

import Box from '../Box/Box';
import {
  selectContactState,
  selectIsLoadingState,
  selectErrorState,
} from 'redux/contacts/contacts.selectors';
import { selectFilterState } from 'redux/filter/filter.selectors';
import { delContact, fetchContacts } from 'redux/operations';

const ContactItem = () => {
  const contacts = useSelector(selectContactState);
  const isLoading = useSelector(selectIsLoadingState);
  const error = useSelector(selectErrorState);
  const filter = useSelector(selectFilterState);
  const dispatch = useDispatch();

  // console.log(isLoading, contacts);

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
          <ItemStyle key={id}>
            <ContactStyle>
              <Box marginRight="10px" as="span">
                {name}
              </Box>
              <span>{number}</span>
            </ContactStyle>

            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </ItemStyle>
        );
      })}
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
