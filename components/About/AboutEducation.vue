<script lang="ts" setup>
const schools = [
  {
    degree: 'Bachelor\'s degree',
    name: 'Zagreb University of Applied Sciences',
    nameShort: 'TVZ',
    url: 'https://www.tvz.hr',
    field: 'Computer Software Engineering',
    from: '2019',
    to: '2023',
    location: 'Zagreb, Croatia',
  },
  {
    degree: null,
    name: 'Faculty of Electrical Engineering and Computing',
    nameShort: 'FER',
    url: 'https://www.fer.unizg.hr/',
    field: 'Computer Science',
    from: '2018',
    to: '2019',
    location: 'Zagreb, Croatia',
  },
]
</script>

<template>
  <AboutSection title="Education" icon="ph:student-duotone">
    <div z-2 space-y-6>
      <div v-for="(school, i) in schools" :key="i" flex flex-col gap-1>
        <h6 text-lg font-semibold leading-snug>
          {{ school.degree }}
        </h6>

        <div flex items-center gap-2>
          <NuxtLink :to="school.url" target="_blank" external>
            <span transition hyperlink>{{ school.name }}</span>
            <span text-opaque mx-1.5>&bullet;</span>
            <span text-xs font-bold uppercase>{{ school.nameShort }}</span>
          </NuxtLink>
        </div>

        <p text-sm text-dimmed>
          {{ school.field }}
        </p>

        <div flex items-center gap-2 text-sm text-dimmed>
          <span>{{ school.from }} &ndash; {{ school.to }}</span>
          &bull;
          <span>{{ school.location }}</span>
        </div>
      </div>
    </div>
  </AboutSection>
</template>
