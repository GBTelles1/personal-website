// @ts-nocheck
import { styled } from 'styled-components';

export const MainContentContainer = styled.div<{ $isInvisible: boolean; }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  header {
    z-index: ${props => props.$isInvisible ? 99 : 0};
  }

  main {
    position: ${props => props.$isInvisible ? 'absolute' : 'static'};
    top: 0;
    left: 0;

    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    font-size: 1rem;
  }
`;

export const PageTitle = styled.h2<{ $isInvisible: boolean; $titleColor: string; }>`
  display: ${props => props.$isInvisible ? 'none' : 'block'};
  min-width: 100vw;
  padding: 0.5rem 2.75rem;

  background-color: ${props => props.$titleColor};
  opacity: 80%;

  color: #17161A;
  letter-spacing: 0.2em;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0.5rem 2rem;
  }
`;
