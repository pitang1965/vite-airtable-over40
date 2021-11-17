import React from "react";
import { StyledPageTitle } from "../styled/StyledPageTitle";
import Workshops from "../components/Workshops";

const WorkshopPage = () => {
  return (
    <div>
      <StyledPageTitle>勉強会について</StyledPageTitle>
      <main>
        <p>これまで開催した勉強会資料は以下の通り。</p>
        <Workshops />
      </main>
    </div>
  );
};

export default WorkshopPage;
