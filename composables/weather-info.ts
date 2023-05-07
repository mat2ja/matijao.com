import type { WeatherDescription, WeatherResponse } from '~/models'
import weatherDescriptionJson from '~/constants/weather-description.json'

export const useWeatherInfo = async () => {
  const { data: weatherData } = await useFetch<WeatherResponse>('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true')

  const currentWeather = computed(() => {
    return weatherData.value?.current_weather
  })

  const weatherCode = computed(() => {
    return currentWeather.value?.weathercode
  })

  const weatherDescription = computed(() => {
    if (!weatherCode.value)
      return
    if (!currentWeather.value)
      return
    return (weatherDescriptionJson as WeatherDescription)[weatherCode.value][currentWeather.value.is_day ? 'day' : 'night']
  })

  const temperature = computed(() => Math.round(currentWeather.value?.temperature || 0))

  return {
    weather: weatherDescription,
    temperature,
  }
}
