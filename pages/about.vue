<template>
  <div>
    <h2 mb-5 text-4xl font-display>
      About me
    </h2>

    <div slide-enter slide-enter-content space-y-20>
      <AboutBasicInfo />

      <AboutWork />

      <div class="border-2 border-default-2/40 border-default-2/40 bg-default-2/20 dark:border-default-8/40 dark:bg-default-8/40" rounded-2xl p-6 md:p-8>
        <AboutEducation />
      </div>

      <AboutCompetitions pb-12 pt-6 />

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
  filter: blur(72px) opacity(100%);
  animation: pulse 9s cubic-bezier(0, 0, 0, 0.5) infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.5);
  }
}
</style>
