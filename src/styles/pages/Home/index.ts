import styled, { keyframes } from "styled-components";
import rioPhoto from '../../../../public/rio-photo.jpg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 100px;

  position: relative;
  
  text-align: center;

  min-height: 100vh;
  width: 100%;

  padding: 8rem;

  background-image: url(${rioPhoto.src});
  background-size: cover;

  @keyframes wave {
    0%, 100% { transform: rotate(1.2deg); }
    50% { transform: translate(-4%, 0) rotate(-1.2deg); }
  }

  a {
    width: 200px;
    border-radius: 50px;
    
    padding: 0.5rem;

    background: #050400;
    opacity: 65%;

    animation: wave 4s infinite;

    transition: opacity 0.4s linear;

    &:hover {
      opacity: 85%;
    }
  }

  span {
    position: absolute;
    bottom: 30px;
    right: 40px;

    font-weight: bold;
    color: #17161A;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 6rem 2rem;
    background-repeat: no-repeat;
    background-position: -100px 0px;
  }

`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  h1 {
    font-size: 3.5rem;
    text-shadow: 1px 1px 1.5px #000000;
    color: #1A202C;
    letter-spacing: 0.2em;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      font-size: 2.5rem;
    }
  }
`

const animatedMessageHeight = 40
const animatedMessageParagraphsGap = 1.25

const textAnimation = keyframes`
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: calc(-1*(${animatedMessageHeight}px + ${animatedMessageParagraphsGap}rem));}
  30% {margin-top: calc(-1*(${animatedMessageHeight}px + ${animatedMessageParagraphsGap}rem));}
  40% {margin-top: calc(-2*(${animatedMessageHeight}px + ${animatedMessageParagraphsGap}rem));}
  60% {margin-top: calc(-2*(${animatedMessageHeight}px + ${animatedMessageParagraphsGap}rem));}
  70% {margin-top: calc(-1*(${animatedMessageHeight}px + ${animatedMessageParagraphsGap}rem));}
  80% {margin-top: calc(-1*(${animatedMessageHeight}px + ${animatedMessageParagraphsGap}rem));}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
`

const animatedMessageHeightMobile = 30

const textAnimationMobile = keyframes`
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: calc(-1*(${animatedMessageHeightMobile}px + ${animatedMessageParagraphsGap}rem));}
  30% {margin-top: calc(-1*(${animatedMessageHeightMobile}px + ${animatedMessageParagraphsGap}rem));}
  40% {margin-top: calc(-2*(${animatedMessageHeightMobile}px + ${animatedMessageParagraphsGap}rem));}
  60% {margin-top: calc(-2*(${animatedMessageHeightMobile}px + ${animatedMessageParagraphsGap}rem));}
  70% {margin-top: calc(-1*(${animatedMessageHeightMobile}px + ${animatedMessageParagraphsGap}rem));}
  80% {margin-top: calc(-1*(${animatedMessageHeightMobile}px + ${animatedMessageParagraphsGap}rem));}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
`

export const AnimatedMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${animatedMessageParagraphsGap}rem;

  height: ${animatedMessageHeight}px;

  overflow: hidden;

  font-weight: bold;

  font-size: 2rem;
  color: #1A202C;

  p:first-child {
    animation: ${textAnimation} 10s infinite;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      animation: ${textAnimationMobile} 10s infinite;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0 0.5rem;
    font-size: 1.5rem;
    background: #F2EDE7;
    opacity: 70%;
    border-radius: 10px;
  }
`