<template>
  <section class="manifesto__section join">
    <h2>Join the conspiracy</h2>
    <ul class="manifesto-grid-list">
      <li>
        <strong>If you're a queer or neurodivergent technologist</strong> tired
        of being the most competent and least valued person in the room: talk to
        us.
      </li>
      <li>
        <strong>If you're a potential client</strong> who wants your systems run
        by people treated well enough to give a damn: talk to us.
      </li>
      <li>
        <strong>If you're a co-op, collective, or fellow traveller</strong>
        who's done this before: we would love to steal your homework. With
        credit.
      </li>
      <li>
        <strong>If you're a media outlet, from bloggers to newspapers</strong>
        and you fancy covering us, we'd be delighted to talk. This project is
        only going to evolve through exposure to reality.
      </li>
    </ul>
    <iframe
      src="https://synmux.notion.site/ebd/27f00007078f4513a12783384d6aeb93"
      frameborder="0"
      allowfullscreen
    />
  </section>
</template>

<style scoped>
.join {
  border-bottom: 0;
}

.join__email {
  display: inline-block;
  max-width: 100%;
  margin-top: clamp(3rem, 6vw, 5rem);
  text-decoration: none;
  color: var(--mocha-lavender);
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 5vw, 4.5rem);
  line-height: 1.1;
  text-decoration-color: var(--accent);
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.16em;
  overflow-wrap: anywhere;
}

.join__email:hover,
.join__email:focus-visible {
  color: var(--accent);
}

section.manifesto__section iframe {
  padding-top: 2rem;
  height: 1000px;
  width: 100%;
}
</style>
