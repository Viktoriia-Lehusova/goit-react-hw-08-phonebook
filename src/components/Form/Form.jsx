import { useState } from 'react';
import shortid from 'shortid';

import { StyledForm, StyledLabel, StyledInput, BtnAdd } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import * as selectors from '../../redux/contacts/selector';
import { nanoid } from 'nanoid';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

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
  const formSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    ).length
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={formSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id={nameInputId}
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={numberInputId}
        />
      </StyledLabel>

      <BtnAdd type="submit">Add contact</BtnAdd>
    </StyledForm>
  );
};

export default Form;
