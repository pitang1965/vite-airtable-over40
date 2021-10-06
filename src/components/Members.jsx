import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useSWR from 'swr';
import Member from './Member';
import styled from 'styled-components';
import { Loader } from '../styled/Loader';
import { StyledError } from '../styled/StyledError';

const StyledMembers = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;

const getMembersEndopoint = '/.netlify/functions/getMembers';
const updateMemberEndopoint = '/.netlify/functions/updateMember';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useGetMembers = () => {
  const { data, error, mutate } = useSWR(getMembersEndopoint, fetcher);

  console.log(data);

  return {
    members: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

const Members = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { members, isLoading, isError, mutate } = useGetMembers();
  const [updateErrorMessage, setUpdateErrorMessage] = useState(null);

  const updateMembers = async (member) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        scope: import.meta.env.VITE_AUTH0_SCOPE,
      });

      const options = {
        method: 'PATCH',
        body: JSON.stringify(member),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const res = await fetch(updateMemberEndopoint, options);
      setUpdateErrorMessage(res.ok ? null : res.statusText);
      // await res.json();
    } catch (err) {
      console.log(err);
      setUpdateErrorMessage(err.message);
    }
  };

  const updateMember = async (id, fields) => {
    console.log(`id: ${id} `);
    console.table('fields', fields);

    const newMember = { id, fields };
    const newMembers = members.map((member, index, array) =>
      id === member.id ? Object.assign(array[index], newMember) : member
    );

    try {
      await updateMembers(newMember);
      await mutate(newMembers, false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isLoading && <Loader>読込中...</Loader>}
      {isError && <StyledError>読み込みエラー</StyledError>}
      {updateErrorMessage !== null && (
        <StyledError>更新エラー：{updateErrorMessage}</StyledError>
      )}
      {members && (
        <StyledMembers>
          {members.map((member) => (
            <Member
              key={member.id}
              id={member.id}
              fields={member.fields}
              updateMember={updateMember}
            />
          ))}
        </StyledMembers>
      )}
    </>
  );
};

export default Members;
