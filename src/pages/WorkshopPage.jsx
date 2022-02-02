import React from "react";
import { useNavigate } from 'react-router-dom';
import { StyledPageTitle } from "../styled/StyledPageTitle";
import Workshops from "../components/Workshops";

const WorkshopPage = () => {
  const navigate = useNavigate();
  navigate('/workshop');

  return (
    <>
      <StyledPageTitle>勉強会について</StyledPageTitle>
      <main>
        <p>これまで開催した勉強会資料は以下の通り。</p>
        <Workshops />
      </main>
    </>
  );
};

export default WorkshopPage;
