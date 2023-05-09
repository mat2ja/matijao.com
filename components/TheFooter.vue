<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
const { formattedTime } = useClock()
const { weather, temperature } = await useWeatherInfo()

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer z-100>
    <div text-xs font-mono flex items-center justify-between text-default-700 dark:text-default-300 class="footer-statusbar">
      <div flex items-center gap-1>
        <p
          flex items-center
        >
          <span class="scale-135" mr-1 h-max>&copy;</span> {{ year }} Matija Osrečki
        </p>

        &middot;

        <NuxtLink
          href="https://github.com/mat2ja/matijao-v2"
          target="_blank"
          hover:underline
          @click.stop
        >
          code
        </NuxtLink>
      </div>

      <div flex items-center justify-end gap-1.5 h-full>
        <p>
          <Icon name="circle-flags:hr" text-11px />
          zagreb, croatia
        </p>

        &middot;

        <template v-if="weather">
          <div
            flex items-center gap-1 lowercase
          >
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

<style lang="postcss" scoped>
.footer-statusbar {
  /* @apply px-3 py-1 backdrop-blur-sm bg-gradient-to-t from-bg-default-50/20 dark:from-bg-default-9/20 to-transparent; */
  @apply px-3 py-1 backdrop-blur-sm bg-gradient-to-t from-bg-default-50/20 dark:from-bg-default-9/20 to-transparent;
}
</style>
