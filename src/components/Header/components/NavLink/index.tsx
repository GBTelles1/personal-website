import Link from "next/link";
import { NavLinkComponent } from "./styles";

interface NavLinkProps {
  isActive: boolean;
  linkName: string;
  linkRef: string;
  linkColor: string;
}

export function NavLink({
  isActive,
  linkName,
  linkRef,
  linkColor
}: NavLinkProps) {
  return (
    <NavLinkComponent $activeLinkColor={linkColor} $isActive={isActive}>
      <Link href={linkRef}>
        {linkName}
      </Link>
    </NavLinkComponent>
  )
}