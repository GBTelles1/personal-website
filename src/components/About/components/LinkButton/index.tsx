import Link from 'next/link';
import { LinkButtonContainer } from './styles';

interface LinkButtonProps {
  url: string;
  text: string;
}

export default function LinkButton({ url, text }: LinkButtonProps) {
  return(
    <LinkButtonContainer>
      <Link href={url}>
        {text}
      </Link>
    </LinkButtonContainer>
  );
}
