<script lang="ts" setup>
import type { Project } from '~/models'

const params = useRoute()
const { slug } = params.params as { slug: string }

const { project, previousProject, nextProject } = useProject({ slug })

const images = computed(() => {
  const { images, thumbnail } = project.value ?? {}
  if (images?.length) {
    return images
  }
  return thumbnail ? [thumbnail] : []
})

const gotoProject = (project: Project) => {
  navigateTo({
    name: 'projects-slug',
    params: {
      slug: slugify(project.name),
    },
  })
}

const toPrevious = () => {
  if (previousProject.value) {
    gotoProject(previousProject.value)
  }
}
const toNext = () => {
  if (nextProject.value) {
    gotoProject(nextProject.value)
  }
}

const { arrowLeft, arrowRight } = useMagicKeys()
whenever(arrowLeft, () => toPrevious())
whenever(arrowRight, () => toNext())
</script>

<template>
  <div v-if="project" class="md:mt--60px">
    <div>
      <div flex items-center justify-between>
        <BaseButton ml--3 icon="ph:arrow-left" variant="blank" @click="navigateTo({ name: 'projects' })">
          Back
        </BaseButton>

        <div flex shrink-0 items-center gap-2>
          <BaseButton
            v-if="project.repo"
            :to="project.repo"
            external
            new-tab
            icon="ph:code"
            icon-position="right"
          >
            Code
          </BaseButton>
          <BaseButton
            v-if="project.url"
            :to="project.url"
            external
            new-tab
            icon="ph:arrow-up-right"
            icon-position="right"
            variant="primary"
          >
            See live
          </BaseButton>
        </div>
      </div>
      <div slide-enter>
        <div slide- mt-8 flex items-start justify-between>
          <h2 text-4xl font-bold font-display md:text-6xl sm:text-5xl>
            {{ project.name }}
          </h2>
        </div>

        <ul mt-4 flex flex-wrap items-center gap-2>
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
    </div>

    <div v-if="images?.length" slide-enter mt-10>
      <div
        v-for="image in images"
        :key="image"
      >
        <div
          overflow-hidden
          border
          border-2
          border-black
          rounded-xl
          dark:border-accent
          w="full lg:720px"
          aspect-ratio="720/450"
        >
          <NuxtLink

            :to="image"
            target="_blank"
            external
            relative
          >
            <NuxtImg
              :width="1440"
              format="webp"
              :src="image"
              alt="Project thumbnail"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div border="t default-3/80 dark:default-7/80" slide-enter mt-24 flex items-center justify-between border-t pt-8 text-sm font-medium>
      <button v-if="previousProject" text-left class="group" @click="toPrevious">
        <p text-default-5 dark:text-default-4>
          Previous
        </p>
        <p mt-0.8 group-hover:underline>
          {{ previousProject?.name }}
        </p>
      </button>
      <button v-if="nextProject" class="group" ml-auto text-right @click="toNext">
        <p text-default-5 dark:text-default-4>
          Next
        </p>
        <p mt-0.8 font-bold group-hover:underline>
          {{ nextProject?.name }}
        </p>
      </button>
    </div>
  </div>
</template>
