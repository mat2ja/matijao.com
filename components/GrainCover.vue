<template>
  <div id="grain" overflow="hidden" />
</template>

<style scoped lang="postcss">
#grain {
  --grain-bg: url('assets/images/bg-grain.png');
  --grain-opacity: 90%;
}

.dark #grain {
  --grain-bg: url('assets/images/bg-grain-dark.png');
  --grain-opacity: 40%;
}

#grain {
  background-image: var(--grain-bg);
  position: fixed;
  inset: -200%;
  animation: grain 12s steps(10) infinite;
  pointer-events: none;
  z-index: 9999;
  background-size: 350px auto;
  opacity: var(--grain-opacity);
}

@media (prefers-reduced-motion) {
  #grain {
    inset: 0;
    animation: none;
  }
}

@keyframes grain {
  0%,
  to {
    transform: translate(0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%);
  }
  70% {
    transform: translateY(15%);
  }
  80% {
    transform: translate(3%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
}
</style>
