<script lang="ts" setup>
useGlobalShortcuts()
</script>

<template>
  <Html lang="en">
    <Body min-h-screen font-sans bg-white text-stone-8 dark:(bg-stone-9 text-stone-2)>
      <GrainCover />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
