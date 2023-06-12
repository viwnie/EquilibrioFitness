import * as S from './styles'
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const ButtonAnimated = ({ text, link, id }: { text: string, id?: string, link?: string, href?: string}) => {
  if (link) {
    return (
      <S.Wrapper>
        <S.Rectangle />
        <Link href={link ? link : 'none'}>
          {text}
        </Link>
      </S.Wrapper>
    )
  } else {
    return (
      <S.Wrapper>
        <S.Rectangle />
        <ScrollLink to={id ? id : 'none'} spy={true} smooth={true} offset={-80} duration={500}>
          {text}
        </ScrollLink>
      </S.Wrapper>
    )
  }
}

export default ButtonAnimated