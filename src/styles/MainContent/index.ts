// @ts-nocheck
import { styled } from "styled-components";

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
`
