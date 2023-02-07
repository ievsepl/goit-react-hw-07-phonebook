// import { PropTypes } from "prop-types";
import { ListStyle } from './ContactList.styled';
// import Box from '../Box/Box';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  return (
    <ListStyle>
      <ContactItem />
    </ListStyle>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   // deleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
