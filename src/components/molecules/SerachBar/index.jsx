import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/InputSelect';
import { categoriesSelect } from '@/mock/data';
import React from 'react';
import { styled } from 'styled-components';

const SearchBar = ({ showSearch }) => {
  return (
    <HeaderSearchBar>
      {showSearch && <Input placeholder='Search' width='400px' />}
      {showSearch && <Select options={categoriesSelect} border='true' />}
      {showSearch && <Button>Search</Button>}
    </HeaderSearchBar>
  );
};

export default SearchBar;
const HeaderSearchBar = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    input {
      display: none;
    }
    select {
      display: none;
    }
    button {
      display: none;
    }
  }
`;
