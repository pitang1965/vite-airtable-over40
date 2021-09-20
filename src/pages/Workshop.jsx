import React from 'react';
import styled from 'styled-components';
import { StyledPageTitle } from '../styled/StyledPageTitle';

const StyledWorkshop = styled.div`
  height: 80vh;
  width: 70vw;
  max-width: 800px;
  display: grid;
  grid-template-rows: 50px 1fr;
  font-size: 1.5rem;
  gap: 2rem;
`;

const Workshop = () => {
  return (
    <StyledWorkshop>
      <StyledPageTitle>勉強会について</StyledPageTitle>
      <main>
        <p>これまで開催した勉強会資料は以下の通り。</p>
        <p>工事中・・・</p>
      </main>
    </StyledWorkshop>
  );
};

export default Workshop;
