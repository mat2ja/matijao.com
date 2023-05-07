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
        <Icon v-if="icon" :name="icon" text-28px mb="1.6" />
        <h3 font-display text-2xl>
          <slot name="title">
            {{ title }}
          </slot>
        </h3>
      </div>

      <slot name="right" />
    </div>

    <div z-2 flex flex-col gap-4>
      <slot />
    </div>
  </section>
</template>
