<script lang="ts" setup>
useGlobalShortcuts()
</script>

<template>
  <Html lang="en">
    <Body min-h-screen bg-default-100 font-sans dark:bg-default-9 text-primary>
      <GrainCover />
      <NuxtLayout min-h-screen>
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

* {
  @apply focus-visible:(!ring-2 !ring-default-9 !dark:ring-default-50 !outline-none !transition-none);
}
</style>
