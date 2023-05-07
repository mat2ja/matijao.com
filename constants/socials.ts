import type { SocialLink } from '~/models'

export const socials: Record<string, SocialLink> = {
  github: {
    label: 'GitHub',
    username: '@mat2ja',
    icon: 'ph:github-logo-duotone',
    href: 'https://github.com/mat2ja',
    color: '#171515',
    colorDark: '#fafaf9',
  },
  twitter: {
    label: 'Twitter',
    username: '@matijao_',
    icon: 'ph:twitter-logo-duotone',
    href: 'https://twitter.com/matijao_',
    color: '#1F9CEA',
  },
  linkedin: {
    label: 'LinkedIn',
    username: '@matijao',
    icon: 'ph:linkedin-logo-duotone',
    href: 'https://linkedin.com/in/matijao',
    color: '#0277B5',
  },
  email: {
    label: 'Email',
    username: 'matija.osrecki@gmail.com',
    icon: 'ph:envelope-duotone',
    href: 'mailto:matija.osrecki@gmail.com',
    color: '#DB4437',
  },
}
