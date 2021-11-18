import React from 'react';
import styled from 'styled-components';

const StyledWorkshop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 5px;
  background-color: var(--card-bg-color);
  border-radius: 3px;
  box-shadow: 10px 10px 22px -13px rgba(0, 0, 0, 0.8);
`;
const StyledWorkshopDetail = styled.div`
  margin-top: 3px;
  padding: 3px;
  font-size: 0.8rem;
  color: var(--main-fg-color);
`;
const StyledWorkshopTitle = styled.h3`
  padding: 3px;
  font-size: 1rem;
  color: var(--main-fg-color);
`;

const Workshop = ({ fields }) => {
  return (
    <StyledWorkshop>
      <StyledWorkshopTitle>{fields.Name}</StyledWorkshopTitle>
      <StyledWorkshopDetail>
        <div>開催日：{fields.Date}</div>
        <div>{fields.Notes}</div>
      </StyledWorkshopDetail>
    </StyledWorkshop>
  );
};

export default Workshop;
