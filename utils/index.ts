import _slugify from 'slugify'

export const slugify = (text: string) => _slugify(text, {
  lower: true,
  strict: true,
})

export const stripUrl = (link: string) => {
  return link.replace(/(https?:\/\/)?(www\.)?(mailto:)?(.+)/, '$4').replace(/\/+$/, '')
}

export const copy = (text: string) => {
  navigator.clipboard.writeText(text)
}
