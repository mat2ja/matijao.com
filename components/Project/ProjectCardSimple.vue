<script setup lang="ts">
import type { Project } from '~~/models'

const { project } = defineProps<{
  project: Project
  index: number
}>()

const hasLink = computed(() => project.repo || project.url)

const openProject = () => {
  if (hasLink.value) {
    navigateTo({
      name: 'projects-slug',
      params: {
        slug: slugify(project.name),
      },
    })
  }

  // TODO: create a test that checks if project pages are in line with slugified project names
}
</script>

<template>
  <div relative h-full flex items-center justify-between class="group">
    <div
      relative
      h-full
      max-w-full
      w-full
      flex
      cursor-pointer
      gap-4
      rounded-2xl
      px-5
      py-4
      md:max-w-lg
      class="border-2 border-default-2/40 border-default-2/40 bg-default-2/20 transition lg:translate-y-1 dark:border-default-8/40 dark:bg-default-8/40 hover:(lg:translate-y-0)"
      @click="openProject"
    >
      <div flex flex-1 flex-col gap-2>
        <div relative flex items-center justify-between>
          <div flex items-center gap-3>
            <h3

              line-clamp-1
              flex-1
              text-xl
              font-semibold
              font-sans
              transition
              duration-300
              class="rounded-sm px-1 py-0.5 pb-0.5 underline decoration-transparent decoration-offset-3 decoration-wavy -mx-0.5 -my-0.5 !group-hover:decoration-accent-4"
            >
              {{ project.name }}
            </h3>

            <Icon
              name="ph:arrow-right-bold"
              text-lg
              text-accent
              transition
              duration-250
              class="invisible opacity-0 group-hover:(visible translate-x-0 opacity-100) -translate-x-4"
            />
          </div>

          <div invisible flex items-center gap-3 text-sm group-hover:visible>
            <NuxtLink
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              class="text-base hover:text-current text-dimmed"
              @click.stop
            >
              <Icon name="ph:code-bold" />
            </NuxtLink>
            <NuxtLink
              v-if="project.url"
              :href="project.url"
              target="_blank"
              class="text-base hover:text-current text-dimmed"
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
          <div mt-2 flex flex-wrap items-center gap-1>
            <ProjectTag v-if="project.wip" variant="accent">
              wip
            </ProjectTag>
            <ProjectTag v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </ProjectTag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
