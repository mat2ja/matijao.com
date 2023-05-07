<script lang="ts" setup>
defineProps<{
  icon?: string
  label?: string
  to?: string
  external?: boolean
  newTab?: boolean
}>()

const variantClass = computed(() => {
  return 'text-default-8 dark:text-default-3 bg-[#EFEEED] dark:bg-default-8 hover:(ring-default-2 dark:ring-default-7)'
})
</script>

<template>
  <button
    v-if="!to"
    flex gap-2 items-center justify-center py-2 px-3 rounded-lg class="text-sm hover:(ring-2) active:(scale-95)"
    :class="[variantClass]"
  >
    <div v-if="$slots.icon || icon" flex items-center>
      <slot name="icon">
        <Icon v-if="icon" :name="icon" text-lg />
      </slot>
    </div>

    <slot>
      {{ label }}
    </slot>
  </button>

  <NuxtLink
    v-else
    :to="to"
    :external="external"
    :target="newTab ? '_blank' : '_self'"
    flex gap-2 items-center justify-center p="y-1 x-3" rounded-lg class="text-sm hover:(ring-2) active:(scale-95)"
    :class="[variantClass]"
  >
    <div v-if="$slots.icon || icon" flex items-center>
      <slot name="icon">
        <Icon v-if="icon" :name="icon" text-lg />
      </slot>
    </div>
    <slot>
      {{ label }}
    </slot>
  </NuxtLink>
</template>
