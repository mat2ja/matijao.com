export type WeatherResponse = {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_weather: CurrentWeather
}

export type CurrentWeather = {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  is_day: number
  time: string
}

export type StateDescription = {
  description: string
  image: string
}

export type WeatherDescription = Record<number, { day: StateDescription; night: StateDescription }>
