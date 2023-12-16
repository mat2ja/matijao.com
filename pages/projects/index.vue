<script lang="ts" setup>
const { extensions, projects, starters, play } = useProjects()
</script>

<template>
  <div>
    <h2 mb-5 text-4xl font-semibold font-display italic>
      Projects
    </h2>

    <div slide-enter space-y-20>
      <section grid gap-5 lg:grid-cols-2 md:gap-4>
        <ProjectCardSimple
          v-for="(project, i) in projects"
          :key="i"
          :index="i"
          :project="project"
        />
      </section>

      <div class="space-y-4">
        <SectionTitle>
          Play
        </SectionTitle>
        <section grid gap-x-5 gap-y-4 md:grid-cols-2>
          <ProjectCardSimple
            v-for="(project, i) in play"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>

      <div class="space-y-4">
        <SectionTitle>
          Extensions & plugins
        </SectionTitle>
        <section grid gap-x-5 gap-y-4 md:grid-cols-2>
          <ProjectCardSimple
            v-for="(project, i) in extensions"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>

      <div class="space-y-4">
        <SectionTitle>
          Starter templates
        </SectionTitle>
        <section grid gap-x-5 gap-y-4 md:grid-cols-2>
          <ProjectCardSimple
            v-for="(project, i) in starters"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>
    </div>
  </div>
</template>
