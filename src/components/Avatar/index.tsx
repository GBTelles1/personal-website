import profileImage from '../../../public/profile.jpg'
import { AvatarImageProfile } from './styles'


export function Avatar() {
  return (
    <AvatarImageProfile
      src={profileImage}
      alt='Profile-photo'
      loading='lazy'
    />
  )
}