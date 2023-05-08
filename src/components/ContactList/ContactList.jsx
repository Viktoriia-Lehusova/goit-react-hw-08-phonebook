import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectFilterValue,
} from '../../redux/contacts/selector';
import { StyledItem, BtnDelete, StyledList } from './ContactList.styled';

export const ContactList = () => {
  const filterValue = useSelector(selectFilterValue);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filteredItems = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : contacts;

  const onDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <div>
      <StyledList>
        {filteredItems.map(contact => (
          <StyledItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <BtnDelete
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </BtnDelete>
          </StyledItem>
        ))}
      </StyledList>
    </div>
  );
};

ContactList.propTypes = {
  contatcs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
