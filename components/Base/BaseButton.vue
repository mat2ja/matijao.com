<script lang="ts" setup>
withDefaults(defineProps<{
  variant?: 'primary' | 'blank'
  icon?: string
  iconPosition?: 'left' | 'right'
  label?: string
  to?: string
  external?: boolean
  newTab?: boolean
}>(), {
  variant: 'primary',
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
  @apply flex gap-2 items-center justify-center py-2 px-3 rounded-lg text-sm font-semibold hover:(ring-2 ring-transparent) active:(scale-95) focus:(outline-none);
  @apply transition;

  &.primary {
    @apply text-default-8 dark:text-default-3 bg-[#EFEEED] dark:bg-default-8 hover:(ring-default-2 dark:ring-default-7);
  }

  &.blank {
    @apply text-dimmed hover:(bg-[#EFEEED] dark:bg-default-8 text-primary) focus:(ring-default-2 dark:ring-default-7);
  }
}
</style>
