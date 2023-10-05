import { MainContent } from "@/layouts/MainContent";
import {
  ContactContentContainer,
  ContactPageContainer,
  ContactPageTitle,
  AmsterdamPhoto,
} from "@/styles/pages/Contact";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo
} from "@phosphor-icons/react";
import Image from "next/image";
import amsterdamPicture from "./../../../public/nightAmsterdam.jpg"

export default function ContactPage() {
  return (
    <MainContent>
      <ContactPageTitle>CONTACT ME</ContactPageTitle>

      <ContactPageContainer>
        <ContactContentContainer>
            <div>
              <p>EMAIL ADDRESS</p>
              <span>gbertelles@gmail.com</span>
            </div>

            <div>
              <p>PHONE NUMBER</p>
              <span>+31 6 87735679</span>
            </div>
            
            <div>
              <p>LINKEDIN PROFILE</p>
              <a
                href="https://www.linkedin.com/in/gabriel-b-telles/"
                target="_blank"
              >
                <LinkedinLogo size={'1.5rem'} color="#E2E8F0" />
                <span>Gabriel Telles</span>
              </a>
            </div>
            
            <div>
              <p>GITHUB PROFILE</p>
              <a
                href="https://github.com/GBTelles1"
                target="_blank"
              >
                <GithubLogo size={'1.5rem'} color="#E2E8F0" />
                <span>GBTelles1</span>
              </a>
            </div>
        </ContactContentContainer>

        <AmsterdamPhoto>
          <Image
            src={amsterdamPicture}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            style={{
              width: '100%',
              height: 'calc(100vh - 8.38rem)',
              objectFit: 'cover',
            }}
            alt={''}
          />
        </AmsterdamPhoto>
      </ContactPageContainer>
    </MainContent>
  )
}