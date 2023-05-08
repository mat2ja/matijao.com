<script setup lang="ts">
import type { Project } from '~~/models'

const { project } = defineProps<{
  project: Project
  index: number
}>()

const slug = ref(slugify(project.name))

const hasLink = computed(() => project.repo || project.url)
const openProject = () => {
  if (hasLink.value)
    navigateTo(`/projects/${slug.value}`)

  // TODO: create a test that checks if project pages are in line with slugified project names
}
</script>

<template>
  <div
    flex items-center justify-between relative
    class="group"
    h-full
  >
    <div
      h-full
      py-4 px-5 rounded-2xl cursor-pointer relative flex gap-4 w-full max-w-full md:max-w-lg
      class="lg:translate-y-1 transition border-2 border-transparent bg-transparent dark:bg-default-8/40 hover:(sm:(!lg:translate-y-0 backdrop-blur-md) border-default-2/40 dark:border-default-8/40)"
      @click="openProject"
    >
      <div flex-1 flex flex-col gap-2>
        <div relative flex justify-between items-center>
          <div flex items-center gap-3>
            <h3
              line-clamp-1 font-sans font-semibold text-xl flex-1
              class="group-hover:underline"
            >
              {{ project.name }}
            </h3>

            <Icon
              name="ph:arrow-right-bold"
              text-lg transition duration-250 text-accent
              class="invisible opacity-0 -translate-x-4 group-hover:(visible opacity-100 translate-x-0)"
            />
          </div>

          <div text-sm flex items-center gap-3 invisible group-hover:visible>
            <NuxtLink
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              class="text-dimmed hover:text-current text-base"
              @click.stop
            >
              <Icon name="ph:code-bold" />
            </NuxtLink>
            <NuxtLink
              v-if="project.url"
              :href="project.url"
              target="_blank"
              class="text-dimmed hover:text-current text-base"
              @click.stop
            >
              <Icon name="ph:arrow-up-right-bold" />
            </NuxtLink>
          </div>
        </div>

        <p text-sm text-dimmed>
          {{ project.description }}
        </p>

        <div mt-auto>
          <div mt-2 flex items-center flex-wrap gap-1>
            <ProjectTag v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </ProjectTag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
