import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../common/Box';
import { Label, LabelTitle, Input } from './Filter.styled';

const Filter = ({ filter, handleChenge }) => (
  <Box mb={4}>
    <Label>
      <LabelTitle>Find contacts by name</LabelTitle>
      <Input
        type="text"
        value={filter}
        onChange={handleChenge}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </Label>
  </Box>
);

Filter.propTypes = {
  filter: PropTypes.string,
  handleChenge: PropTypes.func,
};
export default Filter;
