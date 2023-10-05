import styled from "styled-components"

export const HeaderContainer = styled.header<{ $isInvisible: boolean; }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  gap: 1rem;
  
  padding: 1rem 3rem;

  min-width: 100%;
  
  background: ${props => props.$isInvisible ? 'transparent' : '#1A202C'};

  a {
    min-width: 15rem;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} { 
    justify-content: center;
    font-size: 0.8rem;
  }

`

export const HeaderNav = styled.nav<{ $darkFont: boolean; }>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 1rem;
  
  text-align: left;
  color: ${props => props.$darkFont ? '#17161A' : 'none'};

  span {
    font-size: 2rem;

    ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 1.5rem;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
      font-size: 1rem;
    }

    ${({ theme }) => theme.breakpoints.down('xxs')} {
    font-size: 0.8rem;
    }
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    gap: 0.5rem;
  }
`