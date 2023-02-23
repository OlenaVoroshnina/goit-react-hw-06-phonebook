import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { Label, Input } from '../ContactForm/ContactForm.styled';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        id="filter"
        type="text"
        onChange={event => dispatch(addFilter(event.target.value))}
      />
    </>
  );
};

export default Filter;
