<script lang="ts" setup>
import ResumePDF from '/Resume.pdf'

const openPdf = () => {
  if (process.client)
    window.open(ResumePDF, '_blank')
}
</script>

<template>
  <div>
    <h2 text-4xl font-display mb-5>
      About me
    </h2>

    <div space-y-24>
      <div flex items-center gap-24>
        <div flex-1 space-y-4 leading-relaxed text-dimmed max-text>
          <p>
            What you are looking here at is an ambitious and determined front end oriented full stack developer from Croatia, with a special attention to detail and a keen eye for UI/UX design.
          </p>
          <p>
            I'm constantly working on personal side projects and staying up to date with all the newest developments in this space.
          </p>
          <p>
            I'm passionate about building products, web design, clean code and bitcoin. Looking for a way to contribute to the open
            source community in a meaningful way.
          </p>
          <div>
            <BaseButton icon="ph:file-text-duotone" @click="openPdf">
              CV
            </BaseButton>
          </div>
        </div>
      </div>

      <AboutCareer />

      <div bg="stone-8/40" p-8 rounded-2xl>
        <AboutEducation />
      </div>

      <AboutCompetitions />

      <AboutSkills />
    </div>
  </div>
</template>

<style scoped>
figure img,
.img-shade {
  height: 200px;
  width: 200px;
}

.img-shade {
  position: absolute;
  background-image: linear-gradient(-45deg, #FADD95 50%, #308469 50%);
  border-radius: 50%;
  filter: blur(72px) opacity(100%);
  animation: pulse 9s cubic-bezier(0, 0, 0, 0.5) infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.5);
  }
}
</style>
