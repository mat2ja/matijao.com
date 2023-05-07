export function useTheme() {
  const colorMode = useColorMode()

  const isDark = computed(() => colorMode.value === 'dark')

  const toggleDark = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark'
  }

  return {
    isDark,
    toggleDark,
  }
}
