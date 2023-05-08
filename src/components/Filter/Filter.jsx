import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from '../../redux/contacts/selector';
import { setFilter } from '../../redux/contacts/filterSlice';
import { StyledLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <StyledLabel>
        Find contacts by name
        <StyledInput type="text" value={filterValue} onChange={changeFilter} />
      </StyledLabel>
    </div>
  );
};
