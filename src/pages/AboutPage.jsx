import React from 'react';
import styled from 'styled-components';
import { StyledPageTitle } from '../styled/StyledPageTitle';
import { useNavigate } from 'react-router-dom';

const StyledAbout = styled.main`
  width: 70vw;
  max-width: 800px;
  font-size: 1.5rem;
`;

const StyledDef = styled.dfn`
  font-weight: bold;
`;

const AboutPage = () => {
  const navigate = useNavigate();
  navigate('/about');

  return (
    <>
      <StyledPageTitle>本サイトについて</StyledPageTitle>
      <StyledAbout>
        <p>
          このサイトはOver 40 Web
          Clubの公開メンバの情報を編集するためのものです。
        </p>
        <p>情報はAirtableで管理されています。</p>
        <p><StyledDef>一般メンバ：</StyledDef>自分の情報の編集と削除ができます。</p>
        <p><StyledDef>管理者：</StyledDef>公開メンバの追加と公開メンバの削除ができます。</p>
        <p><StyledDef>管理者：</StyledDef>は一般メンバでもあります。</p>
        <p>
          Twitterログインするだけでは公開メンバになりません。Auth0でロール設定をおこなう必要があります。
        </p>
      </StyledAbout>
    </>
  );
};

export default AboutPage;
