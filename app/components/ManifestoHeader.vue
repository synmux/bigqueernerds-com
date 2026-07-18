<template>
  <header class="manifesto__header">
    <p class="manifesto__eyebrow">🏳️‍🌈 On purpose. In writing.</p>
    <h1>BIG QUEER NERDS<br />a manifesto</h1>
    <div class="manifesto__introduction">
      <p>
        The tech industry runs on queer and neurodivergent labour. It always
        has. We built the protocols, wrote the compilers, and kept the servers
        breathing at 3am - and in exchange we've been underpaid, burnt out,
        talked over, and asked to tone it down for the client call.
      </p>
      <p>
        Every consultancy you've ever worked for exists to do one thing: widen
        the gap between what the client pays and what the worker costs, then
        hand the difference to people who did neither the work nor the paying.
      </p>
      <p><strong>BIG QUEER NERDS</strong> is the opposite of that.</p>
    </div>
  </header>
</template>

<style scoped>
.manifesto__header {
  display: grid;
  gap: clamp(2rem, 5vw, 5rem);
  grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  padding-bottom: clamp(4rem, 8vw, 7rem);
  border-bottom: 1px solid var(--rule);
}

.manifesto__eyebrow {
  grid-column: 1 / -1;
  margin: 0 0 -1rem;
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin-bottom: 0;
  font-family: var(--font-display);
  font-size: clamp(4rem, 1vw, 1rem);
  font-weight: 400;
  line-height: 1;
}

.manifesto__introduction p:first-child {
  font-size: clamp(1.3rem, 2vw, 1.65rem);
  line-height: 1.5;
}

@media (max-width: 46rem) {
  .manifesto__header {
    grid-template-columns: 1fr;
  }
}
</style>
