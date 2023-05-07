<script lang="ts" setup>

</script>

<template>
  <div row>
    <div flex-1 p-8 flex items-start gap-24 pt-42>
      <NavMenu />

      <div flex-1 pb-14>
        <slot />
      </div>
    </div>

    <TheFooter fixed bottom-0 left-0 right-0 />
  </div>
</template>
