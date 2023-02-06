import { useSelector, useDispatch } from 'react-redux';
import { filterContactAction } from 'redux/filter/filter.slice';

// import Box from '../Box/Box';
import { PropTypes } from 'prop-types';

const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  // console.log(filter);

  const onFilterForm = e => {
    dispatch(filterContactAction(e.currentTarget.value));
  };

  //
  //
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
          onChange={onFilterForm}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};
