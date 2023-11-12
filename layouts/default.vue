<script lang="ts" setup>

</script>

<template>
  <div h-full flex flex-1 flex-col justify-between overflow-x-hidden row>
    <div pt="6 md:50" flex="~ col gap-10 md:(row gap-18)" grow items-start py-8>
      <NavMenu />

      <div pb="12 md:28" w-full flex-1>
        <slot />
      </div>
    </div>

    <TheFooter class="mt-auto" />
  </div>
</template>
