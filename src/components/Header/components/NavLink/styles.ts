import styled from "styled-components";

export const NavLinkComponent = styled.div<{ $activeLinkColor: string; $isActive: boolean; }>`
  background: ${props => props.$isActive ? props.$activeLinkColor : 'transparent'};
  color: ${props => props.$isActive ? '#17161A' : 'none'};

  padding: 0.2rem 1rem;

  border-radius: 4px;

  ${({ theme }) => theme.breakpoints.down('xs')} {
    padding: 0.2rem 0.6rem;
  }
`