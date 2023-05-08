<script lang="ts" setup>

</script>

<template>
  <div row>
    <div flex-1 p-8 flex items-start gap-18 pt-50>
      <NavMenu />

      <div flex-1 pb-24>
        <slot />
      </div>
    </div>

    <TheFooter fixed bottom-0 left-0 right-0 />
  </div>
</template>
