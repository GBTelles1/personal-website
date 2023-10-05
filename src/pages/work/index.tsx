import { MainContent } from "@/layouts/MainContent";
import { WorkPageTitle, WorkPageContainer, ProjectContainer, WorkContainer, DescriptionContainer, IconsContainer } from "@/styles/pages/Work";

import Link from "next/link";
import Image from "next/image";

import voluntariosPicture from "./../../../public/volutariosPic.jpg";
import infoProductPicture from "./../../../public/infoProduct.jpg";
import pomodoroTimerPicture from "./../../../public/pomodoroTimer.jpg";
import toDoPicture from "./../../../public/toDo.jpg";
import pythonIcon from "./../../../public/pythonIcon.png";
import typesIcon from "./../../../public/typescriptIcon.png";
import jsIcon from "./../../../public/jsIcon.png";
import reactIcon from "./../../../public/reactIcon.png";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { useTheme } from "styled-components";


export default function ContactPage() {
  // @ts-ignore
  const isShorterThan481 = useMediaQuery(useTheme()?.breakpoints.down('xs'));

  const projectsWidth = isShorterThan481 ? 300 : 400;
  const projectsHeight = 225;

  return (
    <MainContent>
      <WorkPageTitle>MY WORK</WorkPageTitle>

      <WorkPageContainer>
        <WorkContainer>
          <ProjectContainer>
            <Image
              src={infoProductPicture}
              width={projectsWidth}
              height={projectsHeight}
              alt={''}
            />
            <h3>TheMembers: platform for info producers</h3>
            <DescriptionContainer>
              <p>
                Improved the refresh-token system,
                wrote the first automated unit tests using Jest.
                Used the agile SCRUM methodology with Jira.
              </p>
              <p>Stack: React, Next, Typescript, Styled Components</p>
            </DescriptionContainer>
            <IconsContainer>
              <Image
                src={typesIcon}
                width={40}
                height={40}
                alt={''}
              />
              <Image
                src={reactIcon}
                width={40}
                height={40}
                alt={''}
              />
            </IconsContainer>
            <Link href={'https://site.themembers.com.br/'} target="_blank" >Check the website</Link>
          </ProjectContainer>

          <ProjectContainer>
            <Image
              src={voluntariosPicture}
              width={projectsWidth}
              height={projectsHeight}
              alt={''}
            />
            <h3>Voluntarios: Volunteering hub in Brazil</h3>
            <DescriptionContainer>
              <p>
                I work as volunteer on both front and back ends,
                improving the entity form with auto complete inputs. I also
                wrote the first unit tests in Django.
              </p>
              <p>Stack: Django, Javascript, Bootstrap, PostgreSQL</p>
            </DescriptionContainer>
            <IconsContainer>
              <Image
                src={pythonIcon}
                width={40}
                height={40}
                alt={''}
              />
              <Image
                src={jsIcon}
                width={40}
                height={40}
                alt={''}
              />
            </IconsContainer>
            <Link href={'https://voluntarios.com.br/'} target="_blank" >Check the website</Link>
          </ProjectContainer>

          <ProjectContainer>
            <Image
              src={toDoPicture}
              width={projectsWidth}
              height={projectsHeight}
              alt={''}
            />
            <h3>ToDo App: online task management</h3>
            <DescriptionContainer>
              <p>
                This project was created as portfolio. The idea was to create
                a place where I can check all the things I need to do in a day.
              </p>
              <p>Stack: React, Typescript</p>
            </DescriptionContainer>
            <IconsContainer>
              <Image
                src={typesIcon}
                width={40}
                height={40}
                alt={''}
              />
              <Image
                src={reactIcon}
                width={40}
                height={40}
                alt={''}
              />
            </IconsContainer>
            <Link href={'https://whatodolist.netlify.app/'} target="_blank" >Check the website</Link>
          </ProjectContainer>
          <ProjectContainer>
            <Image
              src={pomodoroTimerPicture}
              width={projectsWidth}
              height={projectsHeight}
              alt={''}
            />
            <h3>Pomodoro App: stay focused</h3>
            <DescriptionContainer>
              <p>
                This project was created as portfolio. The Pomodoro Technique is
                a time management method to increase your focus on any task.
              </p>
              <p>Stack: React, Next, Typescript, Styled Components</p>
            </DescriptionContainer>
            <IconsContainer>
              <Image
                src={typesIcon}
                width={40}
                height={40}
                alt={''}
              />
              <Image
                src={reactIcon}
                width={40}
                height={40}
                alt={''}
              />
            </IconsContainer>
            <Link href={'https://pomodortime.netlify.app/'} target="_blank" >Check the website</Link>
          </ProjectContainer>
        </WorkContainer>
        
      </WorkPageContainer>
    </MainContent>
  )
}