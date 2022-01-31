import React from 'react';
import styled from 'styled-components';
import BuyMeCoffee from './BuyMeCoffee';

const StyledLink = styled.a`
  align-items: center;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
  align-items: center;
`;

const FooterMenu = () => {
  return (
    <StyledFooter>
      <StyledLink
        href='https://over40webclub.netlify.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Landing page
      </StyledLink>
      {' | '}
      <StyledLink
        href='https://airtable.com/appJjvnYw54DbKrcT/tblWk9NU3UwUFNkJF/viwjqwxWUycbj6j1A?blocks=hide'
        target='_blank'
        rel='noopener noreferrer'
      >
        Airtable（管理者のみ）
      </StyledLink>
      <BuyMeCoffee />
    </StyledFooter>
  );
};

export default FooterMenu;
