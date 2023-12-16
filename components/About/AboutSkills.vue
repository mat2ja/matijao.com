<script lang="ts" setup>
const favsOnly = ref(false)
const shownSkills = computed(() => favsOnly.value ? skills.filter(({ favorite }) => !!favorite) : skills)
</script>

<template>
  <AboutSection title="Stack" icon="ph:toolbox-bold">
    <div
      grid-cols="1 sm:2 lg:3"
      grid-rows="sm:6 lg:4"
      grid
      mt-2
      gap-4
    >
      <NuxtLink
        v-for="item in shownSkills"
        :key="item.value"
        :to="item.url"
        target="_blank"
        external
        class="group"
      >
        <article

          h-full
          select-none
          rounded-2xl
          p-8
          text-center
          transition-all
          duration-300
          class="border-2 border-default-2/40 bg-default-50 backdrop-blur-md backdrop-blur-md dark:(border-default-8/40 bg-default-8/40) hover:(-translate-y-1)"
        >
          <div flex flex-col items-center justify-center gap-6>
            <Icon shrink-0 :name="item.icon" text-5xl />

            <div flex flex-col gap-2>
              <p text-lg font-medium>
                {{ item.name }}
              </p>
              <p text-sm text-default-5 dark:text-default-4>
                {{ item.desc ?? 'Random thing about it' }}
              </p>
            </div>
          </div>
        </article>
      </NuxtLink>
    </div>
  </AboutSection>
</template>
