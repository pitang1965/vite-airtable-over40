import React from 'react';
import Members from '../components/Members';
import { StyledPageTitle } from '../styledddd/StyledPageTitle';

const Home = () => {
  return (
    <div>
      <StyledPageTitle>Over 40 Web Club公開メンバー</StyledPageTitle>
      <Members />
    </div>
  );
};

export default Home;
