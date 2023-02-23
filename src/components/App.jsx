import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import storage from './helpers/storage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, TitleTwo } from './App.styled';

const friends = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
 

  const [contacts, setContacts] = useState(storage.load('contacts', '') ?? friends);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.save('contacts', contacts);
  }, [contacts]);

  const handleFormSubmit = data => {
    const newContact = {
      id: nanoid(4),
      ...data,
    };

    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, {...newContact}]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContactsList = getVisibleContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleFormSubmit} />

      <TitleTwo>Contacts</TitleTwo>
      <Filter value={filter} onChange={changeFilter} />

      {contacts.length > 0 ? (
        <ContactList
          contacts={visibleContactsList}
          onDeleteContact={deleteContact}
        />
      ) : null}
    </Container>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

