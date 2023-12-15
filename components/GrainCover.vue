<template>
  <div id="grain" overflow="hidden" class="opacity-45 dark:opacity-15" />
</template>

<style scoped lang="postcss">
#grain {
  background-image: url('assets/images/bg-grain.png');
  background-repeat: repeat;
  position: fixed;
  width: 600%;
  left: -200%;
  height: 600%;
  top: -300%;
  animation: home-grain 14s steps(10) infinite;
  pointer-events: none;
  z-index: 9999;
}

.dark {
  #grain {
    background-image: url('assets/images/bg-grain-dark.png');
  }
}

@keyframes home-grain {
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
