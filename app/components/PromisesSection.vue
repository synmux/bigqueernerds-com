<template>
  <section class="manifesto__section manifesto__section--promises">
    <h2>What we promise</h2>
    <ol class="promises">
      <li>
        <strong>Accountable to workers, not shareholders.</strong> There are no
        shareholders to appease. The people who do the work make the decisions,
        with radical transparency about how and why.
      </li>
      <li>
        <strong>When we win, everyone wins.</strong> Profits are shared among
        all of us - weighted by seniority, because we're radical, not naive -
        but reaching <em>everyone</em>, down to the newest and least glamorous
        role. When the company does better, so does every single person in it.
      </li>
      <li>
        <strong>A floor below which nobody falls.</strong> A dependable base
        salary you can plan a life around, plus a minimum floor beneath which no
        role pays. When the floor rises, it rises for everyone stood on it - and
        workers help decide when.
      </li>
      <li>
        <strong>Unlimited sick leave. Actually unlimited.</strong> No
        doctor's-note theatre, no wellness quotas, no questions. Bodies and
        brains break down; a company that punishes that is a company that eats
        its people.
      </li>
      <li>
        <strong>Time off without interrogation.</strong> Up to a generous
        threshold: no questions asked. Beyond it: questions asked kindly, and
        answered with "yes" wherever humanly possible.
      </li>
      <li>
        <strong
          >Engineered for brains that don't run corporate firmware.</strong
        >
        We staff every job with more people than strictly necessary, because
        redundancy isn't waste - ask any SRE. When someone's brain checks out
        for a day (and someone's will; that's the whole point), the work doesn't
        collapse and neither do they. n+1, but for humans.
      </li>
      <li>
        <strong>Remote-first, permanently.</strong> No office, no commute, and
        an allowance to build a workspace that actually works for you. Meet-ups
        once or twice a year, genuinely optional - where "optional" means
        <em>optional</em>, not "career-limiting to skip".
      </li>
      <li>
        <strong>Nobody faces a hostile client alone.</strong> Client-facing work
        is an opt-in rota, never an obligation. And if a customer treats our
        people badly, we can vote to fire the customer. We will turn down money
        before we spend our people on it.
      </li>
      <li>
        <strong>Protection with teeth.</strong> Anti-discrimination protection
        that covers how clients treat us, not just how we treat each other.
        Being paid to be there does not mean being paid to take it.
      </li>
      <li>
        <strong>Compassion before suspicion.</strong> If someone's struggling,
        we assume struggle - not bad faith. Safeguards against genuine bad
        actors exist, and are used only when we're certain that's what we're
        looking at.
      </li>
    </ol>
  </section>
</template>

<style scoped>
.promises {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(2rem, 5vw, 4rem);
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: promises;
}

.promises li {
  position: relative;
  padding-top: 4rem;
  counter-increment: promises;
}

.promises li::before {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--accent);
  content: counter(promises, decimal-leading-zero);
  font-family: var(--font-display);
  font-size: 2.6rem;
  line-height: 1;
}

@media (max-width: 46rem) {
  .promises {
    grid-template-columns: 1fr;
  }
}
</style>
