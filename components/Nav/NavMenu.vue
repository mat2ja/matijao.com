<script lang="ts" setup>
import type { NavItem } from '~/models'

const items = ref<NavItem[]>([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
])

const route = useRoute()
const isLinkActive = (item: NavItem) => {
  const isHome = item.path === '/'
  return !isHome && route.path.startsWith(item.path)
}
</script>

<template>
  <aside w-max lg:sticky top-20>
    <nav flex flex-col items-start>
      <NuxtLink
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
        py-1 px-2.5 rounded-lg lowercase
        class="text-stone-4 dark:text-stone-5 hover:(text-stone-8 dark:text-stone-2)"
        :class="{
          'link-active': isLinkActive(item),
        }"
        active-class="link-active"
      >
        {{ item.name }}
      </NuxtLink>
    </nav>
  </aside>
</template>

<style lang="postcss" scoped>
.link-active {
  @apply bg-stone-2/40 dark:bg-stone-8 !text-stone-8 !dark:text-stone-2;
}
</style>
