
import { Header } from "@/components/Header"
import { MainContentContainer } from "@/styles/MainContent"
import Head from "next/head"
import { ReactNode } from "react"

interface MainContentLayoutProps {
  children: ReactNode
  isHomePage?: boolean
}

export function MainContent({ children, isHomePage = false }: MainContentLayoutProps) {
  return (
    <>
      <Head>
        <title>Gabriel Telles</title>
      </Head>
      <MainContentContainer $isInvisible={isHomePage}>
        <Header />

        <main>
          {children}
        </main>
      </MainContentContainer>
    </>
  )
}