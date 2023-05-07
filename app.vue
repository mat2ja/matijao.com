<script lang="ts" setup>
useGlobalShortcuts()
</script>

<template>
  <Html lang="en">
    <Body min-h-screen font-sans bg-default-50 text-default-8 dark:(bg-default-9 text-default-2)>
      <GrainCover />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
