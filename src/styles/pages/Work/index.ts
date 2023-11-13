// @ts-nocheck
import styled from 'styled-components';

export const WorkPageContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column;
    align-items: center;
  }
`;
export const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;

  padding: 2rem;

  ${({ theme }) => theme.breakpoints.down('lg')} {
  grid-template-columns: 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  align-items: center;
  
  a {
    margin-top: 0.8rem;
    background-color: #FBA083;
    height: 1.8rem;
    width: 80%;
    color: black;
    text-align: center;
    line-height: 1.5;
    opacity: 0.75;
    border-radius: 6px;

    font-size: inherit;
  }

  h3 {
    text-align: center;
    font-size: large;
    
    height: 2.5rem;
    min-height: 1.5rem;
    line-height: 2.5rem;
    width: 100%;

    margin-top: 16px;

    background-color: black;
    opacity: 0.8;
    position: absolute;
  }

  img {
    object-fit: cover;
    border-radius: 20px;
  }
  
  &:hover, &:focus {
    div {
      background-color: black;
      opacity: 80%;
      transition: ease-in-out 0.5s;
      z-index: 1;
    }
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    div {
      background-color: black;
      opacity: 80%;
      transition: ease-in-out 0.5s;
      z-index: 1;
    }
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    width: 300px;
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  
  width: 100%;
  margin-top: 70px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;

  opacity: 0%;

  p {
    font-size: 1rem;
    font-weight: bold;

    ${({ theme }) => theme.breakpoints.down('xs')} {
      font-size: 0.8rem;
    }
  }
`;

export const IconsContainer = styled.span`
  display: flex;
  position: absolute;
  margin-top: 180px;
  gap: 1rem;
`;
