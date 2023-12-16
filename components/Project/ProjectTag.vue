<script lang="ts" setup>
withDefaults(defineProps<{
  variant?: 'accent' | 'outline'
}>(), {
  variant: 'outline',
})
</script>

<template>
  <span
    id="project-tag"
    py="0.5"
    px-2
    border="~ rounded-full"
    font="mono"
    class="text-11px"
    :class="[`variant-${variant}`]"
    lowercase
  >
    <slot />
  </span>
</template>

<style lang="postcss" scoped>
#project-tag {
  &.variant-outline {
    @apply bg-transparent test-dimmed border-default-3/80 dark:border-default-6/60 font-medium;
  }

  &.variant-accent {
    @apply bg-accent dark:filter-saturate-80 text-default-9 border-default-9 dark:border-transparent font-semibold;
  }
}
</style>
