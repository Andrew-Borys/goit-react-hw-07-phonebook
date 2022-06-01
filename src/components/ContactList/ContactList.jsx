import ContactItem from '../ContactItem';
import { List } from './ContactList.styled';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useGetContactsQuery } from 'services/ContactsApi';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilterValue);

  const onFindContact = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = onFindContact();

  return (
    <>
      {isLoading ? (
        Loading.dots('Loading contacts list...')
      ) : (
        <List>
          {!isLoading && Loading.remove()}
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
