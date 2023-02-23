import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, TitleTwo } from './App.styled';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleTwo>Contacts</TitleTwo>
      <Filter />
      <ContactList />
    </Container>
  );
}
