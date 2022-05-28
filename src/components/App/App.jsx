import Title from '../Title';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
import { Wrapper, Section } from './App.styled';
import { useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/ContactSlice';
import { useFilterContacts } from 'hooks/useFilterContacts';
// import { useFilterContacts } from '../../hooks/useFilterContacts';
import Message from '../Message';

export function App() {
  const filter = useFilterContacts();
  const queryName = useSelector(getFilterContacts);

  return (
    <Wrapper>
      <Section>
        <Title text={'Phonebook'} />
        <ContactForm />
      </Section>
      <Section>
        <Title text={'Contacts'} />
        <Filter />
        {filter.length === 0 ? (
          <Message
            text={`Oooops, the contact list is empty ¯_(ツ) _/¯ or contact: "${queryName}" not found...`}
          />
        ) : (
          <ContactList />
        )}
      </Section>
    </Wrapper>
  );
}
