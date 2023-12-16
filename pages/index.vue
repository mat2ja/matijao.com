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
      <div relative w-full>
        <h2 mb="3 sm:5" class="md:text-5.75rem" slide-enter text-4xl font-800 font-display italic sm:text-5xl>
          I'm <span class="my-name text-accent">Matija</span>
        </h2>
        <SVGCloud absolute pos="top--50 right--15 sm:(top--50 right--15) md:(top--55 right--15)" z--1 />
      </div>

      <p mb="5 sm:6" class="md:text-2xl" slide-enter text-4xl font-900 italic sm:text-5xl>
        I punch codes into computer until thing does the thing
      </p>

      <div slide-enter max-text>
        <p max-w-sm text-dimmed>
          A software engineer from Croatia,<br> enthusiastically unraveling the web's complexities.
        </p>

        <div
          class="group"
          mt-6
          w-fit
          flex
          flex-col
          items-start
          gap-1
          md:flex-row
          md:items-center
          md:gap-3
        >
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

<style lang="postcss" scoped>
@keyframes fontVariation {
  from {
    font-variation-settings: 'wght' 900;
  }
  to {
    font-variation-settings: 'wght' 300;
  }
}

.font-animate {
  animation: fontVariation 5s infinite alternate;
}

.light .my-name {
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #262626;
}
</style>
