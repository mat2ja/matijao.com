<script lang="ts" setup>
const { extensions, projects, starters, play } = useProjects()
</script>

<template>
  <div>
    <h2 mb-5 text-4xl font-display>
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

      <div>
        <h3 mb-4 text-3xl font-display>
          Personal
        </h3>
        <section grid gap-x-5 gap-y-4 md:grid-cols-2>
          <ProjectCardSimple
            v-for="(project, i) in play"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>

      <div>
        <h3 mb-4 text-3xl font-display>
          Extensions & plugins
        </h3>
        <section grid gap-x-5 gap-y-4 md:grid-cols-2>
          <ProjectCardSimple
            v-for="(project, i) in extensions"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>

      <div>
        <h3 mb-4 text-3xl font-display>
          Starter templates
        </h3>
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
