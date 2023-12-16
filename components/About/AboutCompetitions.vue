<script lang="ts" setup>
type Competition = {
  name: string
  nameShort: string
  url: string
  project: string
  from: string
  to: string
  additional?: string
  description: string
}

const list: Competition[] = [
  {
    name: 'TVZ Mc2 2021',
    nameShort: 'TVZ',
    url: 'https://mc2.tvz.hr/2021',
    project: 'Aimo',
    from: 'Mar 2021',
    to: 'Jun 2021',
    additional: '🏆🥇',
    description: 'Won first place. Won best design award.',
  },
  {
    name: 'TVZ Mc2 2022',
    nameShort: 'TVZ',
    url: 'https://mc2.tvz.hr',
    project: 'Qwiz',
    from: 'Feb 2022',
    to: 'Jun 2022',
    description: 'Gave my best, ended up empty handed',
  },
]
</script>

<template>
  <AboutSection title="Competitions" icon="ph:trophy-bold">
    <div relative flex items-center justify-between>
      <div z-2 space-y-6>
        <div v-for="(item, i) in list" :key="i" flex flex-col gap-1>
          <div flex items-center gap-1>
            <NuxtLink :to="item.url" target="_blank" external>
              <h6 text-lg font-semibold leading-snug>
                {{ item.name }}
              </h6>
            </NuxtLink>
          </div>

          <div flex items-center gap-2>
            <NuxtLink :href="`/projects/${item.project.toLowerCase()}`">
              <span transition hyperlink>{{ item.project }}</span>
              <template v-if="item.additional">
                <span text-opaque mx-1.5>&bullet;</span>
                <span>{{ item.additional }}</span>
              </template>
            </NuxtLink>
          </div>

          <div flex items-center gap-2>
            <p text-sm text-dimmed>
              {{ item.description }}
            </p>
          </div>

          <div flex items-center gap-2 text-sm text-dimmed>
            <span>{{ item.from }} &ndash; {{ item.to }}</span>
          </div>
        </div>
      </div>
    </div>
  </AboutSection>
</template>
