<script lang="ts" setup>
import ResumePDF from '/Resume.pdf'

const openPdf = () => {
  if (process.client)
    window.open(ResumePDF, '_blank')
}
</script>

<template>
  <div flex items-center gap-24>
    <div flex-1 space-y-4 leading-relaxed text-dimmed max-text>
      <p>
        I'm an ambitious and determined front end oriented full stack developer from Croatia, with a special attention to detail and a keen eye for UI/UX design.
      </p>
      <p>
        I'm constantly working on personal side projects and staying up to date with all the newest developments in the space.
      </p>
      <p>
        I'm most passionate about building products, web design, clean code and bitcoin. Looking for a way to contribute to the open
        source community in a meaningful way.
      </p>
      <div>
        <BaseButton icon="ph:file-text-duotone" @click="openPdf">
          CV
        </BaseButton>
      </div>
    </div>
  </div>
</template>
