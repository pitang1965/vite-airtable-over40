import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  position: relative;
  height: 2em;
  line-height: 2em;
  font-size: 1em;
  border-radius: 5px;
  border-style: none;
  padding: 0 1em;
  text-align: center;
  text-decoration: none;
  color: var(--button-fg-color);
  background-color: var(--button-bg-color);
  &:hover {
    color: var(--button-fg-hover-color);
    background-color: var(--button-bg-hover-color);
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledButtonChangeTheme = styled(StyledButton)`
  color: var(--card-bg-color);
  background-color: var(--main-fg-color);
  &:hover {
    color: var(--main-fg-color);
    background-color: var(--card-bg-color);
  }
`;
