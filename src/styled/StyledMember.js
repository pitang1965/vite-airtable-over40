import styled from 'styled-components';

export const StyledMember = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  background-color: var(--card-bg-color);
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 300px;
  height: 400px;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  width: 90%;
`;

export const StyledName = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const ImageContainer = styled.img`
  border-radius: 50%;
  width: 140px;
  height: 140px;
`;

export const StyledTitle = styled.p`
  font-size: 1rem;
  margin-top: 0.2em;
  margin-bottom: 0.1em;
`;

export const StyledBio = styled.div`
  flex-grow: 1;
  margin: 0px;
  overflow: auto;
  background-color: var(--card-textarer-bg-color);
  border-radius: 10px;
  font-size: 1rem;
  text-align: left;
  padding: 10px;
  height: 80px;
  width: 100%;
`;

export const StyledSnsIcons = styled.div`
  display: flex;
  margin-top: 5px;
`;
