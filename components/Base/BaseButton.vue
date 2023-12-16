<script lang="ts" setup>
withDefaults(defineProps<{
  variant?: 'primary' | 'default' | 'blank'
  icon?: string
  iconPosition?: 'left' | 'right'
  label?: string
  to?: string
  external?: boolean
  newTab?: boolean
}>(), {
  variant: 'default',
  iconPosition: 'left',
})
</script>

<template>
  <button
    v-if="!to"
    class="btn"
    :class="[variant]"
  >
    <div v-if="($slots.icon || icon) && iconPosition === 'left'" flex items-center>
      <slot name="left">
        <Icon v-if="icon" :name="icon" text-base />
      </slot>
    </div>

    <slot>
      {{ label }}
    </slot>

    <div v-if="($slots.icon || icon) && iconPosition === 'right'" flex items-center>
      <slot name="right">
        <Icon v-if="icon" :name="icon" text-base />
      </slot>
    </div>
  </button>

  <NuxtLink
    v-else
    :to="to"
    :external="external"
    :target="newTab ? '_blank' : '_self'"
    class="btn"
    :class="[variant]"
  >
    <div v-if="($slots.icon || icon) && iconPosition === 'left'" flex items-center>
      <slot name="left">
        <Icon v-if="icon" :name="icon" text-base />
      </slot>
    </div>

    <slot>
      {{ label }}
    </slot>

    <div v-if="($slots.icon || icon) && iconPosition === 'right'" flex items-center>
      <slot name="right">
        <Icon v-if="icon" :name="icon" text-base />
      </slot>
    </div>
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.btn {
  @apply flex gap-2 items-center justify-center py-1.75 px-3 rounded-lg text-sm font-semibold;
  @apply transition;

  &.default {
    @apply bg-default-2/60 dark:bg-default-8;
    @apply text-default-8 dark:text-default-2;
    @apply hover:(ring-2 ring-default-3 dark:ring-default-7);
  }

  &.primary {
    @apply bg-default-9 dark:bg-default-1;
    @apply text-default-2 dark:text-default-9;
    @apply hover:(ring-2 ring-accent);
  }

  &.blank {
    @apply text-dimmed hover:(bg-[#EFEEED] dark:bg-default-8 text-primary);
  }
}
</style>
