import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Tag } from 'antd';

const StyedTags = styled.div`
  display: flex;
  flex-direction: row;
`;

const tagColor = (tag) => {
  switch (tag) {
    case 'Airtable':
      return 'orange';
    case 'Gatsby':
      return 'purple';
    case 'GitHub':
      return 'black';
    case 'JavaScript':
      return 'geekblue';
    case 'NPM':
      return 'red';
    case 'PHP':
      return 'blue';
    case 'React':
      return 'cyan';
    case 'Tailwind CSS':
      return 'lime';
    case 'WordPress':
      return 'black';
    default:
      return 'gray';
  }
};

const Tags = ({ tags }) => {
  return (
    <StyedTags>
      {tags &&
        tags.map((tag, i) => (
          <Tag key={i} color={tagColor(tag)}>
            {tag}
          </Tag>
        ))}
    </StyedTags>
  );
};

export default Tags;
