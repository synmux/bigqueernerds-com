<template>
  <section class="hero" aria-label="Big Queer Nerds">
    <NuxtImg
      class="hero__logo"
      src="/images/logo.svg"
      alt="Big Queer Nerds"
      width="1024"
      height="1024"
    />
  </section>
</template>

<style scoped>
.hero {
  box-sizing: border-box;
  display: grid;
  min-height: 88vh;
  min-height: 88dvh;
  padding: clamp(1.5rem, 5vw, 4rem);
  background-color: var(--mocha-crust);
  place-items: center;
}

.hero__logo {
  display: block;
  width: min(100%, 32rem);
  height: auto;
}

@media (max-width: 46rem) {
  .hero {
    min-height: 82vh;
    min-height: 82dvh;
  }
}
</style>
