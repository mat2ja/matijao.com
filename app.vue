<script lang="ts" setup>
useGlobalShortcuts()
</script>

<template>
  <Html lang="en">
    <Body min-h-screen font-sans text-primary bg-default-50 dark:bg-default-9>
      <GrainCover />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="postcss">
html.dark {
  color-scheme: dark;
}

::selection {
  --at-apply: bg-default-300/30 dark:(bg-default-300/4);
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
