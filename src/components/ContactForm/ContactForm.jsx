import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { nanoid } from 'nanoid';

import Box from '../Box/Box';
import { LabelNameStyle } from './ContactForm.styled';
import { LabelStyle } from './ContactForm.styled';
import { BtnAddContactStyle } from './ContactForm.styled';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addContactAction } from 'redux/contacts/contacts.slice';
import { selectContactState } from 'redux/contacts/contacts.selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContactState);
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();
    if (contacts.every(contact => contact.name !== name)) {
      const data = { name, number };

      // data.id = nanoid();
      // console.log(data);
      // dispatch(addContactAction(data));

      dispatch(addContact(data));

      reset();
    } else {
      toast.warn(`${name} is already in your contacts`);
    }
  };
  //
  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   if (name === 'name') {
  //     setName(value);
  //   }
  //   if (name === 'number') {
  //     setNumber(value);
  //   }
  // };

  const onChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const onChangeNumber = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="end"
      as="form"
      onSubmit={onSubmitForm}
    >
      <LabelStyle>
        <LabelNameStyle> Name :</LabelNameStyle>

        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeName}
        />
      </LabelStyle>
      <LabelStyle>
        <LabelNameStyle>Number :</LabelNameStyle>

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeNumber}
        />
      </LabelStyle>

      <BtnAddContactStyle type="submit">Add contact</BtnAddContactStyle>
      <ToastContainer autoClose={2000} />
    </Box>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
