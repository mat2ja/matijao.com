export * from './weather'

export type NavItem = {
  name: string
  path: string
}

export type Project = {
  name: string
  description: string
  tags: string[]
  year: number
  repo?: string
  url?: string
  wip?: boolean
  thumbnail?: string
  images?: string[]
}

export type SocialLink = {
  label: string
  username: string
  icon: string
  href?: string
  to?: string
  color?: string
  colorDark?: string
}
