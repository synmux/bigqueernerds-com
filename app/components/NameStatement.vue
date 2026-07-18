<template>
  <section class="name-statement" aria-label="Why we chose the name">
    <p>The name is a purposeful decision.</p>
    <p>If it turns a client off, we probably didn't want that client anyway.</p>
  </section>
</template>

<style scoped>
.name-statement {
  padding: clamp(4rem, 9vw, 8rem) 0;
  border-bottom: 1px solid var(--rule);
}

.name-statement p {
  max-width: 68rem;
  margin-bottom: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 1vw, 1rem);
  line-height: 2.25;
}
</style>
