<script lang="ts" setup>
import ResumePDF from '/Resume.pdf'

const openPdf = () => {
  // eslint-disable-next-line n/prefer-global/process
  if (process.client)
    window.open(ResumePDF, '_blank')
}
</script>

<template>
  <div flex items-center gap-24>
    <div flex-1 space-y-4 leading-relaxed text-dimmed max-text>
      <p>
        I'm an ambitious and determined front-end oriented software developer from Croatia, with a special attention to detail and a keen eye for UI/UX design.
      </p>
      <p>
        Most passionate about building products, UX design, clean code, open source and bitcoin.
      </p>
      <div>
        <BaseButton icon="ph:file-text-duotone" @click="openPdf">
          CV
        </BaseButton>
      </div>
    </div>
  </div>
</template>
