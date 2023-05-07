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
  <div row>
    <div flex-1 p-8 flex items-start gap-24 pt-32>
      <aside w-max lg:sticky top-0>
        <nav flex flex-col items-start>
          <NuxtLink
            v-for="(item, i) in items"
            :key="i"
            :to="item.path"
            py-1 px-3 rounded-lg lowercase
            class="text-stone-400 dark:text-stone-500 hover:(text-stone-800 dark:text-stone-200)"
            active-class="bg-stone-1 dark:bg-stone-8 !text-stone-800 !dark:text-stone-200"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </aside>

      <div flex-1 overflow-y-auto>
        <slot />
      </div>
    </div>

    <TheFooter fixed bottom-0 left-0 right-0 />
  </div>
</template>
