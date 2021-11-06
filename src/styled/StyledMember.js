import styled from 'styled-components';

export const StyledMember = styled.article`
  width: 300px;
  margin: 10px;
  @media only screen and (min-width:1200px) {
	margin: 20px;
  }
  padding: 30px 20px 20px;
  border-radius: 7px;
  background-color: var(--card-bg-color);
  box-shadow: 0 3px 15px rgba(100, 100, 100, .2);
  text-align: center;
`;

export const StyledInfo = styled.div`
  margin-top: 10px;
`;

export const StyledName = styled.p`
  margin-bottom: .1em;
  font-size: 1.3em;
  font-weight: bold;
  letter-spacing: .1em;
`;

export const ImageContainer = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

export const StyledTitle = styled.p`
  font-size: .9em;
`;

export const StyledBio = styled.div`
  height: 5em;
  padding:7px;
  overflow: auto;
  background-color: var(--card-textarer-bg-color);
  text-align: left;
`;

export const StyledSnsIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  .circle-icon {
    background-color: #E7E7E7;
    svg {
      fill: #737373;
      margin-top: .5em;
    }
    &:hover {
      background-color: #efefbb;
      svg {
        fill: #a4a440;
      }
    }
  }
`;
