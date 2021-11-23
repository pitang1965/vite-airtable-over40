import React, { useState } from 'react';
import MemberEditForm from './MemberEditForm';
import {
  StyledMember,
  StyledInfo,
  StyledName,
  ImageContainer,
  StyledTitle,
  StyledBio,
  StyledSnsIcons,
} from '../styled/StyledMember';
import { StyledButton } from '../styled/StyledButton';
import useAuth from '../hooks/useAuth';
import Homepage from './SnsIcons/Homepage';
import Twitter from './SnsIcons/Twitter';
import Github from './SnsIcons/Github';
import Instagram from './SnsIcons/Instagram';
import Youtube from './SnsIcons/Youtube';

const Member = ({ id, fields: prevFields, updateMember }) => {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState(prevFields);
  const{ isMember } = useAuth();

  const onCreate = (values) => {
    setVisible(false);
    setFields((prev) => ({ ...prev, ...values }));
  };

  const homepageUrl = fields?.['Homepage URL'];
  const twitterUserName = fields?.['Twitter username'];
  const githubUserName = fields?.['GitHub username'];
  const instagramUserName = fields?.['Instagram username'];
  const youtubeUrl = fields?.['YouTube URL'];

  const homepagePart = homepageUrl ? <Homepage url={homepageUrl} /> : null;
  const twitterPart = twitterUserName ? (
    <Twitter userName={twitterUserName} />
  ) : null;
  const githubPart = githubUserName ? (
    <Github userName={githubUserName} />
  ) : null;
  const instagramPart = instagramUserName ? (
    <Instagram userName={instagramUserName} />
  ) : null;
  const youtubePart = youtubeUrl ? <Youtube url={youtubeUrl} /> : null;

  return (
    <>
      <StyledMember>
        <ImageContainer
          src={fields?.Photo && fields.Photo[0].url}
        ></ImageContainer>
        <StyledInfo>
          <StyledName>{fields.Name}</StyledName>
          <StyledTitle>{fields.Title}</StyledTitle>
          <StyledBio>{fields.Bio}</StyledBio>
          <StyledSnsIcons>
            {homepagePart}
            {twitterPart}
            {githubPart}
            {instagramPart}
            {youtubePart}
          </StyledSnsIcons>
        </StyledInfo>
        {isMember && (
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
