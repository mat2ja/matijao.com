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
      <div relative mb-3 w-full>
        <h2 class="text-5xl md:text-5.75rem" slide-enter font-800 font-display italic sm:text-5xl>
          I'm <span class="my-name text-accent">Matija</span>
        </h2>
        <SVGCloud absolute pos="top--50 right--15 sm:(top--50 right--15) md:(top--55 right--15)" z--1 />
      </div>

      <p class="text-neutral-800/80 md:text-2xl dark:text-neutral-100/70" slide-enter max-w-sm text-3xl font-light italic sm:text-5xl>
        A frontend software engineer,<br> enthusiastically unraveling the <span>web's</span> complexities.
      </p>

      <div slide-enter mt-8 max-text>
        <div
          class="group"
          mt-6
          w-fit
          flex="~ col gap-1 items-start md:(row gap-3 items-center)"
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

  @media (width < 768px) {
    -webkit-text-stroke-width: 2px;
  }
}
</style>
