import React from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import { Loader } from '../styled/Loader';
import { StyledError } from '../styled/StyledError';

const StyledWorkshops = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1200px;
`;

const StyledWorkshop = styled.div`
  font-size: 0.8rem;
  padding: 5px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 10px 10px 22px -13px rgba(0, 0, 0, 0.8);
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
