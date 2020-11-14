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
  background: #888;
}

.content__container {
  margin: 0 clamp(0px, 4vw, 120px);
}

/* GRID SYSTEM */
.flex-grid__container-row {
  --flex-grid-columns: 12;

  padding: 4%;
  display: flex;
  flex-flow: row wrap;
}

[class*="flex-grid__item"] {
  --flex-item-initialbasis: calc(
    var(--flex-item-width) / var(--flex-grid-columns) * 100%
  );
  --flex-item-gap: calc(
    (var(--flex-grid-columns) - var(--flex-item-width)) * 0.5%
  );
  margin: 0 calc(var(--flex-item-gap) / 2);
  flex: 0 0 calc(var(--flex-item-initialbasis) - var(--flex-item-gap));
}
</style>
