import PropTypes from 'prop-types';
import { ListItem, DeleteButton } from './ContactItem.styled';
import { FiDelete } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useDeleteContactMutation } from 'services/ContactsApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactItem = ({ contact }) => {
  const [deleteContact, { isSuccess }] = useDeleteContactMutation();
  return (
    <ListItem>
      {contact.name}: {contact.number}
      <IconContext.Provider value={{ color: 'red', size: '18px' }}>
        <DeleteButton type="button" onClick={() => deleteContact(contact.id)}>
          {isSuccess && Notify.info('Contact deleted!')}
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
