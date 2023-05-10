<script lang="ts" setup>
const { extensions, projects, starters, play } = useProjects()
</script>

<template>
  <div>
    <h2 text-4xl font-display mb-5>
      Projects
    </h2>

    <div space-y-20>
      <section grid lg:grid-cols-2 gap-5 md:gap-4>
        <ProjectCardSimple
          v-for="(project, i) in projects"
          :key="i"
          :index="i"
          :project="project"
        />
      </section>

      <div>
        <h3 font-display text-3xl mb-4>
          Personal
        </h3>
        <section grid md:grid-cols-2 gap-x-5 gap-y-4>
          <ProjectCardSimple
            v-for="(project, i) in play"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>

      <div>
        <h3 font-display text-3xl mb-4>
          Extensions and plugins
        </h3>
        <section grid md:grid-cols-2 gap-x-5 gap-y-4>
          <ProjectCardSimple
            v-for="(project, i) in extensions"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>

      <div>
        <h3 font-display text-3xl mb-4>
          Starter templates
        </h3>
        <section grid md:grid-cols-2 gap-x-5 gap-y-4>
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
