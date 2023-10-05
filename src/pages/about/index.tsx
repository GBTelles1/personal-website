import typescriptLogo from '../../../public/typescript-logo.svg'
import brazilFlag from '../../../public/brazil.png'
import netherlandsFlag from '../../../public/netherlands.png'
import briefcase from '../../../public/briefcase.png'
import graduation from '../../../public/graduation.png'
import world from '../../../public/world.png'
import Image from 'next/image'
import {
  AboutContentContainer,
  AboutPageTitle,
  FlagsContainer,
  LinkButton,
  LinksContainer,
  MyHistoryFirstSection,
  MyHistorySecondSection,
  MyHistoryThirdSection,
} from "@/styles/pages/About";
import { MainContent } from '@/layouts/MainContent';
import { Avatar } from '@/components/Avatar';
import Link from 'next/link'

export default function About() {

  function getMyAge(birthDateString: string = '1999-03-06'): number {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();

    const diffMonths = today.getMonth() - birthDate.getMonth();

    if (diffMonths < 0 || (diffMonths === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
  }

  return (
    <MainContent>
      <AboutPageTitle>ABOUT ME</AboutPageTitle>
      <AboutContentContainer>
        <MyHistoryFirstSection>
          <Avatar />

          <h3>
            Gabriel, {getMyAge()} years old
          </h3>

          <p>
            Born in Rio de Janeiro
          </p>

          <p>
            Living in Amsterdam since July 2023
          </p>

          <FlagsContainer>
            <Image src={brazilFlag} width={40} height={40} alt=''/>

            <Image src={netherlandsFlag} width={40} height={40} alt=''/>
          </FlagsContainer>
          <p>
            I speak fluent English, Portuguese, and Spanish. I also can speak some Dutch and German.
          </p>
        </MyHistoryFirstSection>

        <hr />

        <MyHistorySecondSection>
          <p>
            I did Electrical Engineering at the Federal University of Rio de
            Janeiro. There, I started learning Python and my Software Developer
            journey began.
          </p>
          <Image src={graduation} width={40} height={40} alt=''/>
          <p>
            I&apos;ve started working at a startup, an EdTech called Driven
            Education. Worked for 3 years in 2 products of this EdTech,
            going from intern to operations coordinator.
          </p>
          <Image src={briefcase} width={40} height={40} alt=''/>
          <p>
            One of these products is a Full Stack Development Bootcamp. Due to
            this, I started learning web development.
          </p>
        </MyHistorySecondSection>
        
        <hr />

        <MyHistoryThirdSection>
          <p>
            Then I started to work as a Full Stack Developer volunteer with
            Django, and, later, as a Front End Developer in another startup
            using React, Next, and Typescript.
          </p>

          <Image src={world} width={40} height={40} alt=''/>
          
          <p>
            I&apos;m passionate about learning and teaching and believe
            Education is a key to a better world.
          </p>

          <LinksContainer>
            <LinkButton>
              <Link href='/work'>
                MY WORK
              </Link>
            </LinkButton>
            
            <LinkButton>
              <Link href='/contact'>
                CONTACT ME
              </Link>
            </LinkButton>
          </LinksContainer>
        </MyHistoryThirdSection>
      </AboutContentContainer>
  
    </MainContent>
  )
}