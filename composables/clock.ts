export const useClock = () => {
  const now = useNow({ interval: 1000 })

  const formattedTime = computed(() => {
    return Intl.DateTimeFormat('en-us', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'Europe/Zagreb',
    }).format(now.value)
  })

  return {
    formattedTime,
  }
}
