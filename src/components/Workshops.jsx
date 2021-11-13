import React from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import { Loader } from '../styled/Loader';
import { StyledError } from '../styled/StyledError';

const StyledWorkshops = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;

const StyledWorkshop = styled.div`
  font-size: 0.8rem;
`;

const workshopsEndpoint = './.netlify/functions/workshops';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useGetWorkshops = () => {
  const { data, error, mutate } = useSWR(workshopsEndpoint, fetcher);

  console.log(data);

  return {
    workshops: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

const Workshops = () => {
  const { workshops, isLoading, isError, mutate } = useGetWorkshops();
  return (
    <>
      {isLoading && <Loader>読込中...</Loader>}
      {isError && <StyledError>読み込みエラー</StyledError>}
      {workshops && (
        <StyledWorkshops>
          {workshops.map((workshop) => (
            <StyledWorkshop key={workshop.id}>
              {workshop.fields.Name}
            </StyledWorkshop>
          ))}
        </StyledWorkshops>
      )}
    </>
  );
};

export default Workshops;
