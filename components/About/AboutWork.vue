<script lang="ts" setup>
import { addMonths, differenceInCalendarMonths } from 'date-fns'

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(date)
}

const calculateDuration = (from: Date, to: Date | null) => {
  if (to === null) {
    // eslint-disable-next-line no-param-reassign
    to = addMonths(new Date(), 1)
  }

  const months = differenceInCalendarMonths(to, from) + 1
  const years = Math.floor(months / 12)
  const monthsLeft = months % 12

  const formatPlural = (label: string, value: number) => `${label}${value > 1 ? 's' : ''}`

  const monthFormat = formatPlural('month', monthsLeft)
  const yearLabel = formatPlural('year', years)

  const yearString = years > 0 ? `${years} ${yearLabel}, ` : ''
  const monthString = monthsLeft > 0 ? `${monthsLeft} ${monthFormat}` : ''

  return `${yearString}${monthString}`
}
</script>

<template>
  <AboutSection title="Work" icon="ph:briefcase">
    <div z-2 space-y-6>
      <div
        v-for="(job, i) in jobs"
        :key="i"
        flex
        flex-col
        gap-1
      >
        <h6 text-lg font-semibold leading-snug>
          {{ job.position }}
        </h6>

        <div flex items-center gap-2>
          <!-- TODO: move squiggly line on hover -->
          <NuxtLink
            :to="job.company.url"
            target="_blank"
            external
            transition
            hyperlink-wavy

            :class="{ 'decoration-current dark:decoration-accent': i === 0 }"
          >
            {{ job.company.name }}
          </NuxtLink>
          &bull;
          <span text-dimmed>{{ job.company.location }}</span>
        </div>

        <div flex items-center gap-2 text-sm text-dimmed ml="0.5">
          <span>{{ formatDate(job.from) }} &ndash; {{ job.to ? formatDate(job.to) : 'Present' }}</span>
          &bull;
          <span>{{ calculateDuration(job.from, job.to) }}</span>
        </div>
      </div>
    </div>
  </AboutSection>
</template>
