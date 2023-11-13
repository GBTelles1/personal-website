
import { Header } from '@/components/Header';
import Head from 'next/head';
import { ReactNode } from 'react';
import { MainContentContainer, PageTitle } from './styles';

interface MainContentLayoutProps {
  children: ReactNode
  isHomePage?: boolean
  pageTitle?: string,
  pageTitleColor?: string;
}

export function MainContentLayout({
  children,
  isHomePage = false,
  pageTitle = 'HOME',
  pageTitleColor = 'transparent'
}: MainContentLayoutProps) {
  return (
    <>
      <Head>
        <title>Gabriel Telles</title>
      </Head>
      <MainContentContainer $isInvisible={isHomePage}>
        <Header />
        
        <PageTitle $isInvisible={isHomePage} $titleColor={pageTitleColor}>
          {pageTitle}
        </PageTitle>
        
        <main>
          {children}
        </main>
      </MainContentContainer>
    </>
  );
}
