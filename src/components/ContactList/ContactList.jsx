// import { PropTypes } from "prop-types";

// import Box from '../Box/Box';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  return (
    <ul>
      <ContactItem />
    </ul>
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
