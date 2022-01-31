import React from "react";
import { StyledPageTitle } from "../styled/StyledPageTitle";
import Workshops from "../components/Workshops";

const WorkshopPage = () => {
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
