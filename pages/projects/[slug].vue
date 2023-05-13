<script lang="ts" setup>
import type { Project } from '~/models'

const params = useRoute()
const { slug } = params.params as { slug: string }

const { project, previousProject, nextProject } = useProject({ slug })

const gotoProject = (project: Project) => {
  navigateTo({
    name: 'projects-slug',
    params: {
      slug: slugify(project.name),
    },
  })
}

const images = computed(() => {
  if (project.value?.images?.length)
    return project.value.images
  return project.value?.thumbnail ? [project.value?.thumbnail] : []
})
</script>

<template>
  <div v-if="project" class="md:mt--60px">
    <div>
      <div flex items-center justify-between>
        <BaseButton ml--3 icon="ph:arrow-left-bold" variant="blank" @click="navigateTo({ name: 'projects' })">
          Back
        </BaseButton>

        <div flex items-center gap-2 shrink-0>
          <BaseButton
            v-if="project.repo"
            :to="project.repo"
            external new-tab
            icon="ph:code-bold"
            icon-position="right"
          >
            Code
          </BaseButton>
          <BaseButton
            v-if="project.url"
            :to="project.url"
            external new-tab
            icon="ph:arrow-up-right-bold"
            icon-position="right"
            variant="primary"
          >
            See live
          </BaseButton>
        </div>
      </div>
      <div flex items-start justify-between mt-8>
        <h2 font-display text-4xl sm:text-5xl md:text-6xl>
          {{ project.name }}
        </h2>
      </div>

      <ul mt-4 flex items-center flex-wrap gap-2>
        <ProjectTag v-if="project.wip" variant="accent">
          work in progress
        </ProjectTag>
        <ProjectTag v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </ProjectTag>
      </ul>

      <div v-if="project.description" max-w="50ch" mt-6>
        <p>{{ project.description }}</p>
      </div>
    </div>

    <div v-if="images?.length" mt-10>
      <div
        v-for="image in images"
        :key="image"
      >
        <div
          overflow-hidden rounded-xl border border-2 border-black dark:border-accent
          w="full lg:720px"
          aspect-ratio="720/450"
        >
          <NuxtLink

            relative
            :to="image" target="_blank" external
          >
            <NuxtImg
              width="1440px"
              format="webp"
              :src="image"
              alt="Project thumbnail"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div mt-24 pt-8 border-t border="t default-3/80 dark:default-7/80" flex items-center justify-between text-sm font-medium>
      <button v-if="previousProject" text-left @click="gotoProject(previousProject)">
        <p text-default-5 dark:text-default-4>
          Previous
        </p>
        <p mt-0.8>
          {{ previousProject?.name }}
        </p>
      </button>
      <button v-if="nextProject" ml-auto text-right @click="gotoProject(nextProject)">
        <p text-default-5 dark:text-default-4>
          Next
        </p>
        <p mt-0.8>
          {{ nextProject?.name }}
        </p>
      </button>
    </div>
  </div>
</template>
