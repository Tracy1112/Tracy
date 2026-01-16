import { ContactDetail, SocialLink } from '../types'
import { EXTERNAL_LINKS, CONTACT_INFO } from '../constants'

export const contactDetails: ContactDetail[] = [
  {
    type: 'email',
    icon: 'FaEnvelope',
    value: CONTACT_INFO.EMAIL,
    link: EXTERNAL_LINKS.EMAIL,
  },
  {
    type: 'phone',
    icon: 'FaPhoneAlt',
    value: CONTACT_INFO.PHONE,
    link: EXTERNAL_LINKS.PHONE,
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: 'FaLinkedin',
    link: EXTERNAL_LINKS.LINKEDIN,
  },
  {
    name: 'GitHub',
    icon: 'FaGithub',
    link: EXTERNAL_LINKS.GITHUB,
  },
]
