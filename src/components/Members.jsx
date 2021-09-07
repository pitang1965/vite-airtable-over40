import React from 'react';
import useSWR from 'swr';
import Member from './Member';
import styled from 'styled-components';

const StyledMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useMembers = () => {
  const { data, error } = useSWR('/.netlify/functions/get-members', fetcher);

  console.log(data);

  return {
    members: data,
    isLoading: !error && !data,
    isError: error,
  };
};


const Members = () => {
  const { members, isLoading, isError } = useMembers();

  const updateMember = (id, fields) => {
    console.log(`id: ${id} `);
    console.table(fields);
  };

  return (
    <>
      {isLoading && <p>読込中...</p>}
      {isError && <p>読み込みエラー</p>}
      {members && (
        <StyledMembers>
          {members.map((member) => (
            <Member key={member.id} id={member.id} fields={member} updateMember={updateMember} />
          ))}
        </StyledMembers>
      )}
    </>
  );
};

export default Members;
