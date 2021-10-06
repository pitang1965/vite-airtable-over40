import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import MemberEditForm from './MemberEditForm';
import { StyledButton } from '../styled/StyledButton';

const StyledMember = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: var(--card-bg-color);
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 200px;
  height: 300px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  width: 180px;
`;

const StyledName = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const ImageContainer = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

const StyledTitle = styled.p`
  font-size: 1rem;
  margin-top: 0.2em;
  margin-bottom: 0.1em;
`;

const StyledBio = styled.div`
  flex-grow: 1;
  margin: 0px;
  overflow: auto;
  background-color: var(--card-textarer-bg-color);
  border-radius: 10px;
  font-size: 0.8em;
  text-align: left;
  padding: 10px;
  height: 50px;
  width: 100%;
`;

const Member = ({ id, fields: prevFields, updateMember }) => {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState(prevFields);
  const { isAuthenticated } = useAuth0();

  const onCreate = (values) => {
    setVisible(false);
    setFields((prev) => ({ ...prev, ...values }));
  };

  return (
    <>
      <StyledMember>
        <ImageContainer
          src={fields?.Photo && fields.Photo[0].url}
        ></ImageContainer>
        <StyledInfo>
          <StyledName
            href={fields?.['Homepage URL']}
            target='_blank'
            rel='noopener noreferrer'
          >
            {fields.Name}
          </StyledName>
          <StyledTitle>{fields.Title}</StyledTitle>
          <StyledBio>{fields.Bio}</StyledBio>
        </StyledInfo>
        {isAuthenticated && (
          <StyledButton onClick={() => setVisible(true)}>編集</StyledButton>
        )}
      </StyledMember>
      <MemberEditForm
        visible={visible}
        id={id}
        fields={fields}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        updateMember={updateMember}
      />
    </>
  );
};

export default Member;
