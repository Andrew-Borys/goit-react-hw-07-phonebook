import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { FormLabel, FormInput } from '../ContactForm/ContactForm.styled';

const Filter = () => {
  const filterInputId = useId();
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FormLabel htmlFor={filterInputId}>
      Find contacts by name
      <FormInput
        id={filterInputId}
        type="text"
        name="filter"
        onChange={onChange}
        placeholder="Find contact..."
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FormLabel>
  );
};

export default Filter;
