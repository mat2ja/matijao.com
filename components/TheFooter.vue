<script lang="ts" setup>
import weatherDescriptionJson from '~/constants/weather-description.json'

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

  return weatherDescriptionJson[weatherCode.value][currentWeather.value.is_day ? 'day' : 'night']
})
</script>

<template>
  <footer mt-auto z-100 backdrop-blur class="bg-stone-50/20 dark:bg-stone-9/20">
    <div px-4 flex items-center justify-end gap-1 py-0.5 text-xs font-mono>
      <p>
        <Icon name="circle-flags:hr" text-11px />
        zagreb, croatia
      </p>

      &middot;

      <template v-if="currentWeather">
        <div flex items-center gap-1>
          <!-- <Icon name="ph:sun-duotone" text-base /> -->
          <img :src="weatherDescription.image" alt="" h-3ch>
          <p>{{ Math.round(currentWeather.temperature) }}&deg;,</p>

          <p>{{ weatherDescription.description }}</p>
        </div>

        &middot;
      </template>

      <p>
        {{ formattedTime }}
      </p>

      &middot;

      <Icon name="logos:nuxt-icon" text-sm />
    </div>
  </footer>
</template>
