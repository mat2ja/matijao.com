<template>
  <div>
    <div lt-md:mt-8vh>
      <h2 text-4xl sm:text-5xl md:text-7xl font-display mb="3 sm:5" w-max relative>
        Matija Osrečki

        <SVGCloud absolute pos="top--50 right--120 sm:(top--50 right--115) md:(top--60 right--85)" z--1 />
      </h2>

      <div max-text>
        <p text-dimmed>
          Self-motivated front-end oriented software developer, very much in love with all things web development. Obsessed with Bitcoin.
        </p>

        <div flex items-center gap-3 mt-6 class="group" w-fit>
          <NuxtLink
            href="https://github.com/mat2ja"
            external target="_blank"
            hyperlink px-2 py-2 ml--2 lowercase class="group-hover:(opacity-40) hover:(!opacity-100)"
          >
            GitHub
          </NuxtLink>
          <NuxtLink
            href="https://linkedin.com/in/matijao"
            external target="_blank"
            hyperlink px-2 py-2 ml--2 lowercase class="group-hover:(opacity-40) hover:(!opacity-100)"
          >
            LinkedIn
          </NuxtLink>
          <NuxtLink
            href="https://twitter.com/matijao_"
            external target="_blank"
            hyperlink px-2 py-2 ml--2 lowercase class="group-hover:(opacity-40) hover:(!opacity-100)"
          >
            Twitter
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
