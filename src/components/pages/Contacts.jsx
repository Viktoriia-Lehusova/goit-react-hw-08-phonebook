import { useDispatch, useSelector } from 'react-redux';
// import { Container } from './contacts.styled';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selector';
import Form from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
// import { Box, Typography } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <p>Add new contact</p>
        <Form />
        <p>Contacts</p>
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>No any contacts in phonebook</p>
        )}

        {isLoading && !error && <p>Request in progress...</p>}
      </div>
    </div>
  );
};
export default Contacts;
