import React from 'react';
import PropTypes from 'prop-types';

import { Title, Item, Text, Number, Button } from './Contacts.styled';

const Contacts = ({ contacts, onDeteteContact }) => (
  <ul>
    <Title>Contacts</Title>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Text>
          {name}:<Number>{number}</Number>
        </Text>
        <Button onClick={() => onDeteteContact(id)}>Delete</Button>
      </Item>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeteteContact: PropTypes.func,
};

export default Contacts;
