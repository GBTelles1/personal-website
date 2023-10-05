import styled from "styled-components";

export const ContactPageTitle = styled.h2`
  min-width: 100vw;
  padding: 0.5rem 2.75rem;

  background-color: #E3BAA6;
  opacity: 80%;

  color: #17161A;
  letter-spacing: 0.2em;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0.5rem 2rem;
  }
`

export const ContactPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column; 
    padding-top: 1rem;
    gap: 1rem;
  }
`

export const ContactContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  text-align: center;

  width: 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const AmsterdamPhoto = styled.div`
  width: 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }  
`