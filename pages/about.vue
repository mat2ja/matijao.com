<script lang="ts" setup>

</script>

<template>
  <div>
    <h2 text-4xl font-display mb-5>
      About me
    </h2>

    <div space-y-20>
      <AboutBasicInfo />

      <AboutCareer />

      <div class="border-2 bg-default-2/20 border-default-2/40 dark:bg-default-8/40 border-default-2/40 dark:border-default-8/40" p-8 rounded-2xl>
        <AboutEducation />
      </div>

      <AboutCompetitions pt-6 pb-12 />

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
