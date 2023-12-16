<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
const { formattedTime } = useClock()
const { weather, temperature, pending: weatherPending } = await useWeatherInfo()

const formattedTimeVisible = ref(false)
onMounted(() => {
  formattedTimeVisible.value = true
})

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer z-100 py-8 md:py-4>
    <div>
      <div
        flex="~ col md:row"
        h-22px
        items-center
        justify-between
        text-xs
        font-mono
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
          <template v-if="weather || weatherPending">
            <div
              v-if="weatherPending"
              class="h-1.75ch w-34 animate-pulse rounded-full bg-default-200 dark:bg-default-700"
            />

            <template v-else-if="weather">
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
            </template>
          </template>

          &middot;

          <p>
            <Icon name="circle-flags:hr" text-11px />
            zagreb, croatia
          </p>

          <span lt-md="hidden">
            &middot;
          </span>

          <p v-if="formattedTimeVisible">
            {{ formattedTime }}
          </p>
          <div
            v-else
            class="h-1.75ch w-[57.6px] animate-pulse rounded-full bg-default-200 dark:bg-default-700"
          />

          &middot;

          <div flex items-center gap-2>
            <button
              flex
              cursor-pointer
              items-center
              pr-1
              text-sm
              hover:opacity-100
              @click="toggleDark"
            >
              <Icon v-show="!isDark" name="ph:moon-fill" />
              <Icon v-show="isDark" name="ph:sun-fill" />
            </button>

            <Icon name="logos:nuxt-icon" class="text-16px" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer-statusbar {
  @apply px-3 py-3 md:py-1;
}
</style>
