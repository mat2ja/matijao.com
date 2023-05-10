<script lang="ts" setup>
import { skills } from '~/constants'

const favsOnly = ref(false)
const shownSkills = computed(() => favsOnly.value ? skills.filter(({ favorite }) => !!favorite) : skills)
</script>

<template>
  <AboutSection title="Skills" icon="ph:toolbox-duotone">
    <div  grid grid-cols="1 sm:2 lg:3" grid-rows="sm:6 lg:4" gap-4
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
          select-none p-8 text-center h-full rounded-2xl transition-all duration-300
          class="backdrop-blur-md bg-default-50 dark:(bg-default-8/40) backdrop-blur-md border-2 border-default-2/40 dark:border-default-8/40 hover:(-translate-y-1)"
        >
          <div flex flex-col justify-center items-center gap-6>
            <Icon shrink-0 :name="item.icon" text-5xl />

            <div flex flex-col gap-2>
              <p font-medium text-lg>
                {{ item.name }}
              </p>
              <p text-default-5 dark:text-default-4 text-sm>
                {{ item.desc ?? 'Random thing about it' }}
              </p>
            </div>
          </div>
        </article>
      </NuxtLink>
    </div>
  </AboutSection>
</template>
