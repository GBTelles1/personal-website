import styled from "styled-components";

export const AboutPageTitle = styled.h2`
  min-width: 100vw;
  padding: 0.5rem 2.75rem;

  background-color: #5CA0C5;
  opacity: 80%;

  color: #17161A;
  letter-spacing: 0.2em;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0.5rem 2rem;
  }
`

export const AboutContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  gap: 1rem;

  padding: 3rem;

  color: #EAE1D7;
  
  hr {
    border: 1px solid #5CA0C5;
    height: 26rem;
   
    ${({ theme }) => theme.breakpoints.down('lg')} {
      height: 0;
      width: 26rem;
    }
  }

  p {
    color: #CBD5E0;
    flex-basis: 30%;
    max-width: 21rem;
  }

  div {
    flex-basis: 30%;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    flex-direction: column;
    align-items: center;
  }
`

export const MyHistorySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
`

export const FlagsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 15rem;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`