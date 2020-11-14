<template>
  <router-view />
</template>

<style>
*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  height: 100vh;
  width: 100%;

  font-size: clamp(12px, 2.5vw, 18px);
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  background: rgba(var(--primary-200));
}

.content__container {
  margin: 0 clamp(0px, 4vw, 120px);
}

/* GRID SYSTEM */
.flex-grid__container-row {
  --flex-grid-columns: 12;
  padding: 2%;
  display: flex;
  flex-flow: row wrap;
}

[class*="flex-grid__item"] {
  --flex-item-initialbasis: calc(
    var(--flex-item-width) / var(--flex-grid-columns) * 99.999%
  );
  --flex-item-gap: 1rem;
  margin: 0 calc(var(--flex-item-gap) / 2);
  flex: 0 0 calc(var(--flex-item-initialbasis) - var(--flex-item-gap));
}
</style>
