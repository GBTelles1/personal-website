import { MainContent } from "@/layouts/MainContent";
import { AboutContentContainer, AboutPageTitle, FlagsContainer, LinksContainer, MyHistorySection } from "./styles";
import { Avatar } from "../Avatar";
import Image from 'next/image';

import { brazilFlag, briefcaseIcon, bulgariaFlag, graduationIcon, netherlandsFlag, spainFlag, worldIcon } from "../../../public";
import LinkButton from "./components/LinkButton";

export default function AboutPage() {
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

  return(
    <MainContent>
      <AboutPageTitle>ABOUT ME</AboutPageTitle>
      <AboutContentContainer>
        <MyHistorySection>
          <Avatar />

          <h3>
            Gabriel, {getMyAge()} years old
          </h3>

          <p>
            Born in Rio de Janeiro
          </p>

          <p>
            Living in Europe since June 2023
          </p>

          <FlagsContainer>
            <Image src={brazilFlag} width={40} height={40} alt="Brazil\'s flag"/>

            <Image src={spainFlag} width={40} height={40} alt="Spain\'s flag"/>
            
            <Image src={bulgariaFlag} width={40} height={40} alt="Bulgaria\'s flag"/>
            
            <Image src={netherlandsFlag} width={40} height={40} alt="Netherlands\'s flag"/>
          </FlagsContainer>

          <p>
            I speak fluent English, Portuguese, and Spanish. I also can speak some Dutch and German.
          </p>
        </MyHistorySection>

        <hr />

        <MyHistorySection>
          <p>
            I did Electrical Engineering at the Federal University of Rio de
            Janeiro. There, I started learning Python and my Software Developer
            journey began.
          </p>
          
          <Image src={graduationIcon} width={40} height={40} alt='A graduation hat icon'/>

          <p>
            I&apos;ve started working at a startup, an EdTech called Driven
            Education. Worked for 3 years in 2 products of this EdTech,
            going from intern to operations coordinator, when I could work with
            Python.
          </p>
      
          <Image src={briefcaseIcon} width={40} height={40} alt='A briefcase icon'/>
      
          <p>
            One of these products is a Full Stack Development Bootcamp. Due to
            this, I started learning web development.
          </p>
        </MyHistorySection>
        
        <hr />

        <MyHistorySection>
          <p>
            Then I started to work as a Full Stack Developer volunteer with
            Django, and, later, as a Front End Developer in another startup
            using React, Next, and Typescript.
          </p>

          <Image src={worldIcon} width={40} height={40} alt="World icon"/>
          
          <p>
            I&apos;m passionate about learning and teaching and believe
            Education is a key to a better world.
          </p>

          <LinksContainer>
            <LinkButton url="/work" text="MY WORK"/>

            <LinkButton url="/contact" text="CONTACT ME"/>
          </LinksContainer>
        </MyHistorySection>
      </AboutContentContainer>
  
    </MainContent>
  )
}