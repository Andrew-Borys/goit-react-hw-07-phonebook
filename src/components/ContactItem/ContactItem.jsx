import PropTypes from 'prop-types';
import { ListItem, DeleteButton } from './ContactItem.styled';
import { FiDelete } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { deleteItem } from 'redux/ContactSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {contact.name}: {contact.number}
      <IconContext.Provider value={{ color: 'red', size: '18px' }}>
        <DeleteButton
          type="button"
          onClick={() => dispatch(deleteItem(contact.id))}
        >
          <FiDelete />
        </DeleteButton>
      </IconContext.Provider>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactItem;
