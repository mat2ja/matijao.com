<script lang="ts" setup>
import CV from '/cv.pdf'
import { isClient } from '@vueuse/core'

const openPdf = () => {
  if (isClient) {
    window.open(CV, '_blank')
  }
}
</script>

<template>
  <div flex items-center gap-24>
    <div max-text flex-1 leading-relaxed space-y-4 text-dimmed>
      <p>
        I'm an ambitious and determined front-end oriented software developer from Croatia, with a special attention to detail and a keen eye for UI/UX design.
      </p>
      <p>
        Most passionate about open source, UX design, clean code, and bitcoin.
      </p>
      <div>
        <BaseButton icon="ph:file-text" @click="openPdf">
          CV
        </BaseButton>
      </div>
    </div>
  </div>
</template>
