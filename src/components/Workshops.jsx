import React from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import { Loader } from '../styled/Loader';
import { StyledError } from '../styled/StyledError';

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

const StyledWorkshop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 5px;
  background-color: var(--card-bg-color);
  border-radius: 3px;
  box-shadow: 10px 10px 22px -13px rgba(0, 0, 0, 0.8);
`;
const StyledWorkshopDetail = styled.div`
  margin-top: 3px;
  padding: 3px;
  font-size: 0.8rem;
  color: var(--main-fg-color);
`;
const StyledWorkshopTitle = styled.h3`
  padding: 3px;
  font-size: 1rem;
  color: var(--main-fg-color);
`;

const workshopsEndpoint = "./.netlify/functions/workshops";

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
              <StyledWorkshopTitle>{workshop.fields.Name}</StyledWorkshopTitle>
              <StyledWorkshopDetail>
                <div>開催日：{workshop.fields.Date}</div>
                <div>{workshop.fields.Notes}</div>
              </StyledWorkshopDetail>
            </StyledWorkshop>
          ))}
        </StyledWorkshops>
      )}
    </>
  );
};

export default Workshops;
