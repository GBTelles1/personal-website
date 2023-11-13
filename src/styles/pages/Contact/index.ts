import styled from 'styled-components';

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
`;

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
`;

export const AmsterdamPhoto = styled.div`
  width: 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }  
`;
