import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getItems } from 'redux/ContactSlice';
import { FormLabel, FormInput, Button } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const nameInputId = useId();
  const telInputId = useId();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getItems);

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

  // const handleSubmitForm = event => {
  //   event.preventDefault();
  //   const contact = {
  //     name,
  //     number,
  //   };
  //   onSubmit(contact);
  //   reset();
  // };

  const handleSubmitForm = event => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      reset();
      alert(`${name} is already in contacts list`);
      return;
    } else {
      dispatch(addItem({ name, number }));
    }

    reset();
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
      <Button type="submit">Add contact</Button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

// nameInputId = nanoid();
// telInputId = nanoid();

// handleNameChange = event => {
//   const { name, value } = event.currentTarget;
//   this.setState({ [name]: value });
// };

// handleSubmitForm = event => {
//   event.preventDefault();

//   const contact = {
//     name: this.state.name,
//     number: this.state.number,
//   };

//   // console.log(contact);

//   this.props.onSubmit(contact);
//   this.reset();
// };

// reset = () => {
//   this.setState({
//     name: '',
//     number: '',
//   });
// };

//   render() {
//     return (
// <form
//   onSubmit={this.handleSubmitForm}
//   style={{
//     margin: 'auto',
//     border: '1px solid black',
//     padding: '20px',
//   }}
// >
//   <label htmlFor={this.nameInputId} style={{ marginRight: '40px' }}>
//     Enter name
//     <input
//       id={this.nameInputId}
//       type="text"
//       name="name"
//       value={this.state.name}
//       onChange={this.handleNameChange}
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//   </label>
//   <label htmlFor={this.telInputId}>
//     Tel number
//     <input
//       id={this.telInputId}
//       type="tel"
//       name="number"
//       value={this.state.number}
//       onChange={this.handleNameChange}
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     />
//   </label>
//   <button type="submit">Add contact</button>
// </form>
//     );
//   }
// }

// export default ContactForm;
