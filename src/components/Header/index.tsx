import { HeaderContainer, HeaderNav } from "./styles";
import { useRouter } from "next/router";
import { NavLink } from "./components/NavLink";

export function Header() {
  const router = useRouter()
  const currentPage = router.pathname

  const isHomePage = currentPage === '/'
  const isAboutPage = currentPage === '/about'
  const isWorkPage = currentPage === '/work'
  const isContactPage = currentPage === '/contact'

  return (
    <HeaderContainer $isInvisible={isHomePage}>
      <HeaderNav $darkFont={isHomePage}>
        <NavLink
          isActive={isHomePage}
          linkName="Home"
          linkRef="/"
          linkColor="#EDF2F7"
        />
        
        <span>•</span>
        
        <NavLink
          isActive={isAboutPage}
          linkName="About"
          linkRef="/about"
          linkColor="#5CA0C5"
        />

        <span>•</span>
        
        <NavLink
          isActive={isWorkPage}
          linkName="Work"
          linkRef="/work"
          linkColor="#FBA083"
        />

        <span>•</span>
        
        <NavLink
          isActive={isContactPage}
          linkName="Contact"
          linkRef="/contact"
          linkColor="#E3BAA6"
        />
      </HeaderNav>
      
    </HeaderContainer>
  )
}
