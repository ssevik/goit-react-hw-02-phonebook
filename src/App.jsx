import React, { Component } from 'react';
import FormBox from './components/FormBox/FormBox';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import { Box } from './components/common/Box';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = data => {
    const normalizData = data.name.toLowerCase();
    const iterateName = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizData)
    );
    if (iterateName === undefined) {
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
    } else {
      return alert(`${iterateName.name} is already in contacts`);
    }
  };

  chengeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizFilter = filter.toLowerCase();
    const filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizFilter)
    );

    return (
      <Box
        as="main"
        pt={7}
        pb={7}
        mr="auto"
        ml="auto"
        width="800px"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <FormBox onSubmit={this.formSubmit} />
        <Filter filter={filter} handleChenge={this.chengeFilter} />
        <Contacts
          contacts={filteredList}
          onDeteteContact={this.deleteContact}
        />
      </Box>
    );
  }
}

export default App;
