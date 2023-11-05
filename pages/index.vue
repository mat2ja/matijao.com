<script lang="ts" setup>
const email =  {
  ...socials.email,
  label: `${socials.email.username.split('@')[0]}@matijao.com`,
}

const socialLinks = [socials.github, socials.linkedin, socials.twitter, socials.goodreads, email]
</script>

<template>
  <div>
    <div lt-md:mt-8vh>
      <h2 text-4xl sm:text-5xl md:text-7xl font-display mb="3 sm:5" w-max relative>
        Matija Osrečki

        <SVGCloud absolute pos="top--50 right--120 sm:(top--50 right--115) md:(top--60 right--85)" z--1 />
      </h2>

      <div max-text>
        <p text-dimmed>
          Internally driven front-end oriented software developer, very much in love with all things bitcoin & web development.
        </p>

        <div flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 mt-6 class="group" w-fit>
          <NuxtLink
            v-for="social in socialLinks" :key="social.href"
            :href="social.href"
            external target="_blank"
            hyperlink px-2 py-2 ml--2 lowercase class="group-hover:(opacity-40) hover:(!opacity-100)"
          >
            {{ social.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
