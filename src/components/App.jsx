// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   getErrorState,
//   getIsLoadingState,
// } from 'redux/contacts/contacts.selectors';
// import { fetchContacts } from 'redux/operations';
import Box from './Box/Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoadingState);
  // const error = useSelector(getErrorState);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

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
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />
    </Box>
  );
};

// App.propTypes = {
//   data: PropTypes.objectOf({
//     name: PropTypes.string,
//   }),
// };
