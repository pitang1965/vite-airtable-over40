import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MemberEditForm from './MemberEditForm';
import {
  StyledMember,
  StyledInfo,
  StyledName,
  ImageContainer,
  StyledTitle,
  StyledBio,
} from '../styled/StyledMember';
import { StyledButton } from '../styled/StyledButton';
import { useAtom } from 'jotai';
import { roleAtom } from '../atoms/auth';

const Member = ({ id, fields: prevFields, updateMember }) => {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState(prevFields);
  const { isAuthenticated } = useAuth0();

  const onCreate = (values) => {
    setVisible(false);
    setFields((prev) => ({ ...prev, ...values }));
  };

  const [role, setRole] = useAtom(roleAtom);
  const [canEdit, setCanEdit] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      setCanEdit(role === '管理者' || role === '一般メンバ');
    } else {
      setCanEdit(false);
    }
  }, [role]);

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
        {canEdit && (
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
