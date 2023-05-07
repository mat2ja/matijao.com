<script lang="ts" setup>
const items = ref([{
  name: 'Home',
  path: '/',
}, {
  name: 'About',
  path: '/about',
}, {
  name: 'Blog',
  path: '/blog',
}, {
  name: 'Contact',
  path: '/contact',
}])
</script>

<template>
  <aside w-max lg:sticky top-20>
    <nav flex flex-col items-start>
      <NuxtLink
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
        py-1 px-3 rounded-lg lowercase
        class="text-stone-4 dark:text-stone-5 hover:(text-stone-8 dark:text-stone-2)"
        active-class="bg-stone-2/40 dark:bg-stone-8 !text-stone-8 !dark:text-stone-2"
      >
        {{ item.name }}
      </NuxtLink>
    </nav>
  </aside>
</template>
