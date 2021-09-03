import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
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

const fetcher = (url) => axios.get(url).then((res) => res.data);

const useRecords = () => {
  const { data, error } = useSWR('/api/list-records', fetcher);

  console.log(data);

  return {
    records: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Members = () => {
  const { records, isLoading, isError } = useRecords();

  return (
    <>
      {isLoading && <p>読込中...</p>}
      {isError && <p>読み込みエラー</p>}
      {records && (
        <StyledMembers>
          {records.map((record) => (
            <Member key={record.id} record={record} />
          ))}
        </StyledMembers>
      )}
    </>
  );
};

export default Members;
