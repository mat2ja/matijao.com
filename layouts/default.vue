<script lang="ts" setup>

</script>

<template>
  <div row>
    <div flex-1 py-8 pt="8 md:50" flex="~ col gap-10 md:(row gap-18)" items-start>
      <NavMenu />

      <div flex-1 pb-24>
        <slot />
      </div>
    </div>

    <TheFooter fixed bottom-0 left-0 right-0 />
  </div>
</template>
