<script lang="ts" setup>
const email = {
  ...socials.email,
  label: `${socials.email.username.split('@')[0]}@matijao.com`,
}

const socialLinks = [socials.github, socials.linkedin, socials.twitter, socials.goodreads, email]
</script>

<template>
  <div>
    <div lt-md:mt-8vh>
      <h2 mb="3 sm:5" relative w-max text-4xl font-display md:text-7xl sm:text-5xl>
        Matija Osrečki

        <SVGCloud absolute pos="top--50 right--120 sm:(top--50 right--115) md:(top--60 right--85)" z--1 />
      </h2>

      <div max-text>
        <p text-dimmed>
          Internally driven front-end oriented software developer, very much in love with all things bitcoin & web development.
        </p>

        <div class="group" mt-6 w-fit flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-3>
          <NuxtLink
            v-for="social in socialLinks"
            :key="social.href"
            :href="social.href"
            target="_blank"
            external
            ml--2
            px-2
            py-2
            lowercase
            hyperlink
            class="group-hover:(opacity-40) !hover:opacity-100"
          >
            {{ social.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
