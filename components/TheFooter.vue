<script lang="ts" setup>
const { formattedTime } = useClock()
const { weather, temperature } = await useWeatherInfo()
</script>

<template>
  <footer mt-auto z-100 backdrop-blur class="bg-default-50/20 dark:bg-default-9/20 text-stone-800 dark:text-stone-300">
    <div px-4 flex items-center justify-end gap-1.5 py-0.5 text-xs font-mono>
      <!-- <p flex items-center gap-1>
        Matija Osrečki <span font-medium text-base>&copy;</span>
      </p>

      &middot; -->

      <p>
        <Icon name="circle-flags:hr" text-11px />
        zagreb, croatia
      </p>

      &middot;

      <template v-if="weather">
        <div flex items-center gap-1 lowercase>
          <img :src="weather.image" alt="" h-3ch ml--1 mr-0>
          <p>{{ Math.round(temperature) }}&deg;,</p>

          <p>{{ weather.description }}</p>
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
