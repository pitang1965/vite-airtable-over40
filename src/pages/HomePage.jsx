import React from 'react';
import Members from '../components/Members';
import { StyledPageTitle } from '../styled/StyledPageTitle';

const HomePage = () => {
  return (
    <div>
      <StyledPageTitle>Over 40 Web Club公開メンバー</StyledPageTitle>
      <Members />
    </div>
  );
};

export default HomePage;
