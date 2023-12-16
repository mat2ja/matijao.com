<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
const { formattedTime } = useClock()
const { weather, temperature } = await useWeatherInfo()

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer z-100>
    <div
      flex="~ col md:row"
      items-center
      justify-between
      py-8
      text-xs
      font-mono
      md:py-3
      text-dimmed
    >
      <div flex items-center gap-1 class="footer-statusbar" rounded-r-full>
        <p flex items-center>
          <span class="scale-135" mr-1 h-max>&copy;</span> {{ year }} Matija Osrečki
        </p>

        &middot;

        <NuxtLink
          href="https://github.com/matijaoe/matijao.com"
          target="_blank"
          hover:underline
          @click.stop
        >
          code
        </NuxtLink>
      </div>

      <div class="footer-statusbar" h-full flex items-center justify-end gap-1.5 rounded-l-full>
        <p>
          <Icon name="circle-flags:hr" text-11px />
          zagreb, croatia
        </p>

        &middot;

        <template v-if="weather">
          <div
            lt-md="hidden"
            flex
            items-center
            gap-1
            lowercase
          >
            <img :src="weather.image" alt="" ml--1 mr-0 h-3ch>
            <p>{{ Math.round(temperature) }}&deg;,</p>

            <p>{{ weather.description }}</p>
          </div>
          <span lt-md="hidden">
            &middot;
          </span>
        </template>

        <p>
          {{ formattedTime }}
        </p>

        &middot;

        <button
          flex
          cursor-pointer
          items-center
          pr-1
          text-sm
          hover:opacity-100
          @click="toggleDark"
        >
          <Icon v-show="!isDark" name="ph:moon-bold" />
          <Icon v-show="isDark" name="ph:sun-bold" />
        </button>

        <Icon name="logos:nuxt-icon" text-sm />
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer-statusbar {
  @apply px-3 py-3 md:py-1;
}
</style>
