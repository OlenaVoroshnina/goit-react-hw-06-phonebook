import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { getFilteredContacts } from 'redux/selectors';
import { List } from 'components/ContactItem/ContactItem.styled';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  return (
    <List>
      {contacts.map(contact => {
        return <ContactItem data={contact} key={contact.id} />;
      })}
    </List>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.object,
    })
  ),
};
