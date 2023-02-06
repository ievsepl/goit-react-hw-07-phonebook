import { useSelector, useDispatch } from 'react-redux';
import React, { useMemo } from 'react';
import { delContactAction } from 'redux/contacts/contacts.slice';

import Box from '../Box/Box';
import { PropTypes } from 'prop-types';

const ContactItem = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  // console.log(filter, contacts);

  const filteredNamesMethod = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const deleteContact = contactId => {
    dispatch(delContactAction(contactId));
  };

  const filteredNames = filteredNamesMethod;
  return (
    <>
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
