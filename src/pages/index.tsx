import { MainContentLayout } from '@/layouts/MainContentLayout';
import {
  HomeContainer,
  AnimatedMessage,
  TitleContainer
} from '@/styles/pages/Home';
import { useMediaQuery } from 'styled-breakpoints/use-media-query';
import Link from 'next/link';
import { Hammersmith_One } from 'next/font/google';
import { useTheme } from 'styled-components';

const hammersmith = Hammersmith_One({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  const isLargerThan1201 = useMediaQuery(useTheme()?.breakpoints.up('xl'));

  // @ts-ignore
  const isLargerThan361 = useMediaQuery(useTheme()?.breakpoints.up('xs'));

  const myName = isLargerThan1201 ? 'GABRIEL BERNARDO TELLES' : 'GABRIEL TELLES';

  return (
    <MainContentLayout isHomePage>
      <HomeContainer>
        <TitleContainer>
          <h1 className={hammersmith.className}>{myName}</h1>

          <AnimatedMessage className={hammersmith.className}>
            <p>{`Front End ${isLargerThan361 ? 'Developer' : ''}`}</p>
            <p>{`Back End ${isLargerThan361 ? 'Developer' : ''}`}</p>
            <p>{`Full Stack ${isLargerThan361 ? 'Developer' : ''}`}</p>
          </AnimatedMessage>
        </TitleContainer>

        <Link href="/about" passHref legacyBehavior>
          <a>Learn More</a>
        </Link>        
        
        <span>Rio de Janeiro, Brasil</span>
      </HomeContainer>
    </MainContentLayout>
  );
}
