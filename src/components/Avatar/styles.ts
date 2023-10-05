import styled from "styled-components";
import Image from "next/image";

export const AvatarImageProfile = styled(Image)`
  object-fit: cover; 
  border: 5px solid #888888; 
  border-radius: 100%;

  width: 8em;
  max-width: 150px;
  height: 8em;
  max-height: 150px;
`