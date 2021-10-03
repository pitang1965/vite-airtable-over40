import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  position: relative;
  height: 2em;
  line-height: 2em;
  font-size: 1em;
  border-radius: 5px;
  padding: 0 1em;
  text-align: center;
  text-decoration: none;
  color: #1b1b1b;
  background-color: var(--button-bg-color);
  border: 1px solid #1b1b1b;
  &:hover {
    background-color: var(--button-bg-hover-color);
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
`;