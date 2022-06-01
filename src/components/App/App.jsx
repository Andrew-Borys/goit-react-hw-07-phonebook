import Title from '../Title';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter';
import { Wrapper, Section } from './App.styled';

export function App() {
  return (
    <Wrapper>
      <Section>
        <Title text={'Phonebook'} />
        <ContactForm />
      </Section>
      <Section>
        <Title text={'Contacts'} />
        <Filter />
        <ContactList />
      </Section>
    </Wrapper>
  );
}
