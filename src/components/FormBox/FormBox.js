import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Box } from '../common/Box';
import {
  Title,
  Form,
  Label,
  LabelTitle,
  Input,
  Button,
} from './FormBox.styled';

class FormBox extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });

    this.reset(e);
  };

  reset = e => {
    this.setState({ name: '', number: '' });
    e.currentTarget.reset();
  };

  render() {
    return (
      <Box
        as="section"
        border="normal"
        borderColor="primary"
        borderRadius="normal"
        p={5}
        mb={5}
        color="text"
      >
        <Title>Phonebook</Title>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            <LabelTitle>Name</LabelTitle>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.inputChange}
            />
          </Label>

          <Label>
            <LabelTitle>Number</LabelTitle>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </Box>
    );
  }
}

export default FormBox;
