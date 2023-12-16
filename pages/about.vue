<template>
  <div>
    <h2 mb-5 text-4xl font-bold font-display italic>
      About
    </h2>

    <div slide-enter slide-enter-content space-y-16>
      <AboutBasicInfo />

      <AboutWork />

      <div class="border-2 border-default-2/50 bg-default-2/30 dark:border-default-8/40 dark:bg-default-8/40" rounded-2xl p-6 md:p-8>
        <AboutCompetitions />
      </div>

      <AboutEducation />

      <AboutSkills />
    </div>
  </div>
</template>
