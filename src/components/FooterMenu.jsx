import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  align-items: center;
`;

const FooterMenu = () => {
  return (
    <footer>
      <StyledLink
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </StyledLink>
      {' | '}
      <StyledLink
        href='https://vitejs.dev/guide/features.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        Vite Docs
      </StyledLink>
    </footer>
  );
};

export default FooterMenu;
