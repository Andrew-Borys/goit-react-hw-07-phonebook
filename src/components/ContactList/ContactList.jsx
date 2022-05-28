// import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List } from './ContactList.styled';
import { useFilterContacts } from 'hooks/useFilterContacts';

const ContactList = () => {
  const contacts = useFilterContacts();
  return (
    <>
      <List>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};

export default ContactList;
