<template>
  <div>
    <NuxtRouteAnnouncer />
    <main>
      <SiteHero />

      <article class="manifesto">
        <ManifestoHeader />
        <NameStatement />
        <BeliefsSection />
        <PromisesSection />
        <NotSection />
        <WorkAndHonesty />
        <JoinSection />
      </article>
    </main>
  </div>
</template>

<style>
:root {
  --font-body: "IBM Plex Sans", sans-serif;
  --font-display: "Metrophobic", serif;
  --mocha-base: #1e1e2e;
  --mocha-crust: #11111b;
  --mocha-text: #cdd6f4;
  --mocha-surface-1: #45475a;
  --mocha-pink: #f5c2e7;
  --mocha-lavender: #b4befe;
}

body {
  margin: 0;
  background: var(--mocha-base);
  color: var(--mocha-text);
  font-family: var(--font-body);
}

.manifesto {
  --accent: var(--mocha-pink);
  --rule: var(--mocha-surface-1);
  max-width: 76rem;
  margin: 0 auto;
  padding: clamp(4rem, 9vw, 9rem) clamp(1.25rem, 5vw, 4rem);
}

h1,
h2,
p {
  margin-top: 0;
}

h1 {
  color: var(--mocha-pink);
}

h2 {
  color: var(--mocha-pink);
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: 0.95;
}

p,
li {
  font-size: clamp(1.05rem, 1.4vw, 1.24rem);
  line-height: 1.65;
}

.manifesto__section {
  padding: clamp(4rem, 8vw, 7rem) 0;
  border-bottom: 1px solid var(--rule);
}

.manifesto__section > p {
  max-width: 48rem;
}

.manifesto-grid-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--rule);
}

.manifesto-grid-list li {
  padding: 1.5rem clamp(1rem, 3vw, 2.5rem) 1.5rem 0;
  border-bottom: 1px solid var(--rule);
}

.manifesto-grid-list li:nth-child(odd) {
  padding-right: clamp(1rem, 3vw, 2.5rem);
  border-right: 1px solid var(--rule);
}

.manifesto-grid-list li:nth-child(even) {
  padding-left: clamp(1rem, 3vw, 2.5rem);
}

@media (max-width: 46rem) {
  .manifesto-grid-list {
    grid-template-columns: 1fr;
  }

  .manifesto-grid-list li:nth-child(odd) {
    padding-right: 0;
    border-right: 0;
  }

  .manifesto-grid-list li:nth-child(even) {
    padding-left: 0;
  }
}
</style>
