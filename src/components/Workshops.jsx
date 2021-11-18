import React from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import { Loader } from '../styled/Loader';
import { StyledError } from '../styled/StyledError';
import Workshop from './Workshop';

const StyledWorkshops = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      max-width: 350px;
    }
  }
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
            <Workshop key={workshop.id} fields={workshop.fields} />
          ))}
        </StyledWorkshops>
      )}
    </>
  );
};

export default Workshops;
