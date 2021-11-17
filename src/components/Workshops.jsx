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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 5px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 10px 10px 22px -13px rgba(0, 0, 0, 0.8);
`;
const StyledWorkshopDetail = styled.div`
  margin-top: 3px;
  padding: 3px;
  font-size: 0.8rem;
`;
const StyledWorkshopTitle = styled.h3`
  padding: 3px;
  font-size: 1rem;
  color: rgb(132, 134, 6);
`;
const StyledWorkshopSpan = styled.span`
  display: inline-block;
  padding: 3px 6px;
  margin-right: 2px;
  background-color: #c9cc10;
  color: #fff;
  border-radius: 10px;
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
                <StyledWorkshopSpan>
                  {workshop.fields.Tag[0]}
                </StyledWorkshopSpan>
                <StyledWorkshopSpan>
                  {!workshop.fields.Tag[1] ? null : workshop.fields.Tag[1]}
                </StyledWorkshopSpan>
                <StyledWorkshopSpan>
                  {!workshop.fields.Tag[2] ? null : workshop.fields.Tag[2]}
                </StyledWorkshopSpan>
              </StyledWorkshopDetail>
            </StyledWorkshop>
          ))}
        </StyledWorkshops>
      )}
    </>
  );
};

export default Workshops;
