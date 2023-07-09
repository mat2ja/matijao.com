<script lang="ts" setup>
const list = [
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
  <AboutSection title="Competitions" icon="ph:trophy-duotone">
    <div flex justify-between items-center relative>
      <div space-y-6 z-2>
        <div v-for="(item, i) in list" :key="i" flex flex-col gap-1>
          <div flex items-center gap-1>
            <NuxtLink :to="item.url" target="_blank" external>
              <h6 text-lg leading-snug font-semibold>
                {{ item.name }}
              </h6>
            </NuxtLink>
          </div>

          <div flex items-center gap-2>
            <NuxtLink :href="`/projects/${item.project.toLowerCase()}`" hyperlink transition>
              {{ item.project }}
            </NuxtLink>
            <template v-if="item.additional">
              <span text-opaque>|</span>
              {{ item.additional }}
            </template>
          </div>

          <div flex items-center gap-2>
            <p text-dimmed text-sm>
              {{ item.description }}
            </p>
          </div>

          <div text-dimmed text-sm flex items-center gap-2>
            <span>{{ item.from }} &ndash; {{ item.to }}</span>
          </div>
        </div>
      </div>
      <div lt-md:hidden absolute right-0 class="top-50% right-20 translate-y--50% group">
        <img
          translate-y-8
          translate-x-10
          src="/mc2-decode.jpeg"
          width="280"
          rotate-3
          rounded-2xl
          class="group-hover:opacity-50 !hover:opacity-100"
          transition
        >
        <img
          translate-y--10
          src="/mc2-win.jpeg"
          width="280"
          rotate-6
          class="group-hover:opacity-50 !hover:opacity-100"
          rounded-2xl
          transition
        >
      </div>
    </div>
  </AboutSection>
</template>
