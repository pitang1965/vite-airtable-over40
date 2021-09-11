import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styled/StyledLink';
import { StyledTitle } from '../styled/StyledTitle';

const Navbar = () => {
  return (
    <nav>
      <StyledTitle>Over 40 Web Club主要メンバー</StyledTitle>
      <ul>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/about'>About</StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
