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
const DivWrapper = styled.div`
  margin-top: 3px;
  padding: 3px;
  font-size: 0.8rem;
`;
const H3 = styled.div`
  padding: 3px;
  font-size: 1rem;
  color: rgb(132, 134, 6);
`;
const SpanWrapper = styled.span`
  display: inline-block;
  padding: 3px 6px;
  margin-right:2px;
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
              <H3>{workshop.fields.Name}</H3>
              <DivWrapper>
                <div>開催日：{workshop.fields.Date}</div>
                <div>{workshop.fields.Notes}</div>
                <SpanWrapper>{workshop.fields.Tag[0]}
                </SpanWrapper>
                <SpanWrapper>
                  {!workshop.fields.Tag[1] ? null : workshop.fields.Tag[1]}
                </SpanWrapper>
                <SpanWrapper>
                  {!workshop.fields.Tag[2] ? null : workshop.fields.Tag[2]}
                </SpanWrapper>
              </DivWrapper>
            </StyledWorkshop>
          ))}
        </StyledWorkshops>
      )}
    </>
  );
};

export default Workshops;
