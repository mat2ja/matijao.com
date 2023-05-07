type ShortcutConfig = Record<string, { key: string; handler: () => void }>

export function useShortcuts(config: ShortcutConfig) {
  const keys = useMagicKeys()

  type ShortcutsThing = keyof typeof config

  const defineShortcut = (thing: ShortcutsThing) => {
    const { key, handler } = config[thing]
    whenever(keys[key], handler)
  }

  const defineShortcuts = () => (Object.keys(config) as ShortcutsThing[]).forEach(defineShortcut)

  defineShortcuts()
}

export function useGlobalShortcuts() {
  const { toggleDark } = useTheme()

  const config = {
    dark: {
      key: 'cmd+j',
      handler: () => toggleDark(),
    },
  }

  useShortcuts(config)
}
