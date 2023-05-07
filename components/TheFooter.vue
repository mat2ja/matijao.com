<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
const { formattedTime } = useClock()
const { weather, temperature } = await useWeatherInfo()

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer mt-auto z-100 backdrop-blur class="bg-default-50/20 dark:bg-default-9/20 text-stone-800 dark:text-stone-300">
    <div text-xs font-mono px-4 py-0.5 flex items-center justify-between>
      <div flex items-center gap-1>
        <p flex items-center>
          <span text-lg mr-1>&copy;</span> {{ year }} Matija Osrečki
        </p>
      </div>
      <div flex items-center justify-end gap-1.5>
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

        <button
          cursor-pointer
          pr-1
          hover:opacity-100
          text-sm
          flex items-center
          @click="toggleDark"
        >
          <Icon v-show="!isDark" name="ph:moon-duotone" />
          <Icon v-show="isDark" name="ph:sun-duotone" />
        </button>

        <Icon name="logos:nuxt-icon" text-sm />
      </div>
    </div>
  </footer>
</template>
