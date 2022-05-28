import { useSelector } from 'react-redux';
import { getItems, getFilterContacts } from 'redux/ContactSlice';

export const useFilterContacts = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilterContacts);
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(normalizedFilter)
  );
};
