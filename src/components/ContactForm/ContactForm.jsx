import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormLabel, FormInput, Button } from './ContactForm.styled';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'services/ContactsApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

export default function ContactForm() {
  const nameInputId = nanoid();
  const telInputId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Report.warning(
        'Ooops',
        `The contact: <${name}> exist in list!`,
        'Try again',
        () => {
          reset();
        }
      );
      return;
    } else {
      addContact({ name, number });
      Notify.success('Contact added!');
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmitForm} style={{ display: 'inline-grid' }}>
      <FormLabel htmlFor={nameInputId}>
        Enter name
        <FormInput
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor={telInputId}>
        Tel number
        <FormInput
          id={telInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Button type="submit" disabled={isLoading}>
        Add contact
      </Button>
    </form>
  );
}
