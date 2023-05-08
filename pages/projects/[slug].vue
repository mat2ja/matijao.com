<script lang="ts" setup>
const params = useRoute()
const {
  slug,
} = params.params as { slug: string }

const { project } = useProject({ slug })

const images = computed(() => {
  if (project.value?.images?.length)
    return project.value.images
  return project.value?.thumbnail ? [project.value?.thumbnail] : []
})
</script>

<template>
  <div v-if="project" row>
    <div>
      <BaseButton icon="ph:arrow-left-bold" variant="blank" @click="navigateTo({ name: 'projects' })">
        Back
      </BaseButton>

      <div flex items-start justify-between mt-8>
        <h2 font-display text-4xl sm:text-5xl md:text-6xl>
          {{ project.name }}
        </h2>

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
          >
            See live
          </BaseButton>
        </div>
      </div>

      <ul mt-4 flex items-center flex-wrap gap-2>
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
        <div overflow-hidden rounded-xl border border-2 border-black dark:border-accent>
          <NuxtLink
            relative
            :to="image" target="_blank" external
          >
            <NuxtImg
              width="1904px"
              format="webp"
              :src="image"
              alt="Project thumbnail"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
