import React from 'react';
import styled from 'styled-components';
import { StyledPageTitle } from '../styledddd/StyledPageTitle';

const StyledAbout = styled.div`
  height: 80vh;
  width: 70vw;
  max-width: 800px;
  display: grid;
  grid-template-rows: 50px 1fr;
  font-size: 1.5rem;
  gap: 2rem;
`;

const About = () => {
  return (
    <StyledAbout>
      <StyledPageTitle>このWebサイトについて</StyledPageTitle>
      <main>
        <p>このサイトはOver 40 Web Clubの公開メンバーの情報を編集するためのものです。</p>
        <p>情報はAirtableで管理されています。</p>
        <p>公開メンバー：自分の情報の編集と削除ができます。</p>
        <p>管理者：公開メンバーの追加と公開メンバーの削除ができます。</p>
        <p>管理者は公開メンバーでもあります。</p>
      </main>
    </StyledAbout>
  );
};

export default About;
