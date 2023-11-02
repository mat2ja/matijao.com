import _slugify from 'slugify'

export const slugify = (text: string) => _slugify(text, {
  lower: true,
  strict: true,
})

export const stripUrl = (link: string) => {
  const urlRegex = /(https?:\/\/)?(www\.)?(mailto:)?(.+)/
  return link.replace(urlRegex, '$4').replace(/\/+$/, '')
}

export const copy = (text: string) => {
  navigator.clipboard.writeText(text)
}
