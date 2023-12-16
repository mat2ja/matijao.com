<script lang="ts" setup>
defineProps<{
  title?: string
  icon?: string
}>()
</script>

<template>
  <section relative space-y-4>
    <div flex items-center justify-between gap-4>
      <div flex items-center gap-3>
        <SectionTitle>
          <slot name="title">
            {{ title }}
          </slot>
        </SectionTitle>
      </div>

      <slot name="right" />
    </div>

    <div z-2 flex flex-col gap-4>
      <slot />
    </div>
  </section>
</template>
