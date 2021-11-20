import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  box-sizing: border-box;
  height: 51px;
  text-decoration: none;
  display: inline-flex;
  background-color: var(--button-bg-color);
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 7px 10px 7px 10px;
  letter-spacing: 0.6px;
  transition: 0.3s all linear;
  font-family: cursive;
  &:hover,
  &:active,
  &:focus {
    color: var(--button-fg-hover-color);
    background-color: var(--button-bg-hover-color);
  }
`;

const Image = styled.img`
  height: 30px;
  width: 35px;
`;

const Text = styled.span`
  color: var(--button-fg-color);
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

function BuyMeCoffee() {
  return (
    <Button target='_blank' href='https://www.buymeacoffee.com/pitang1965'>
      <Image
        src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
        alt='Buy me a coffee'
      />
      <Text>Buy me a coffee</Text>
    </Button>
  );
}

export default BuyMeCoffee;
