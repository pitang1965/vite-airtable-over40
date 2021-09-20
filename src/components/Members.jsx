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

const membersEndopoint = '/.netlify/functions/getMembers';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useGetMembers = () => {
  const { data, error, mutate } = useSWR(membersEndopoint, fetcher);

  console.log(data);

  return {
    members: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

const Members = () => {
  const { members, isLoading, isError, mutate } = useGetMembers();

  const updateMember = async (id, fields) => {
    console.log(`id: ${id} `);
    console.table('fields', fields);
    const newMembers = members.map((member, index, array) =>
      id === member.id ? Object.assign(array[index], fields) : member
    );
    console.log('newMemberrs', newMembers);
    await mutate(newMembers, false);
  };

  return (
    <>
      {isLoading && <p>読込中...</p>}
      {isError && <p>読み込みエラー</p>}
      {members && (
        <StyledMembers>
          {members.map((member) => (
            <Member
              key={member.id}
              id={member.id}
              fields={member}
              updateMember={updateMember}
            />
          ))}
        </StyledMembers>
      )}
    </>
  );
};

export default Members;
