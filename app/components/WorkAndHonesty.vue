<template>
  <div class="manifesto__columns">
    <section class="manifesto__section">
      <h2>What we do</h2>
      <p>
        The unglamorous, load-bearing work: infrastructure, cloud, networking,
        development, and the support that keeps businesses actually running. The
        stuff that pages someone at 3am - done by people rested, paid, and
        respected enough to care that it doesn't.
      </p>
      <p>
        We also take on development projects which are a good fit for our skills
        and values. If you want to outsource your work to a consultancy that
        treats its people well, and therefore delivers better product, talk to
        us. Think of us as Fairtrade (no affiliation) for software.
      </p>
    </section>

    <section class="manifesto__section">
      <h2>The honest bit</h2>
      <p>
        We're at the beginning. Early salaries will be modest, and early members
        take on more risk - in exchange for a bigger share of what we build and
        a genuine say in how we build it. We won't promise what we can't fund;
        we'd rather promise carefully and over-deliver than post inspirational
        values we quietly walk back.
      </p>
      <p>
        And yes - if the word "co-operative" just lit up in your head, you're
        right, and we're doing the homework.
      </p>
      <p>
        This document will change as we do, and as we bump up against legal
        hurdles. That's rather the point. But hopefully you can get an idea of
        our principles and what we <em>want</em> to build.
      </p>
    </section>
  </div>
</template>

<style scoped>
.manifesto__columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(3rem, 7vw, 7rem);
  border-bottom: 1px solid var(--rule);
}

.manifesto__section {
  border-bottom: 0;
}

@media (max-width: 46rem) {
  .manifesto__columns {
    grid-template-columns: 1fr;
  }
}
</style>
