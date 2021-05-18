<template>
  <header id="masthead">
    <span id="burger">
      <button @click="$store.commit('toggleSidebar')">
        <svg viewBox="0 0 48 48">
          <rect x="6" y="10" width="36" height="6" rx="2" />
          <rect x="6" y="21" width="36" height="6" rx="2" />
          <rect x="6" y="32" width="36" height="6" rx="2" />
        </svg>
      </button>
    </span>

    <h1>WinterBot Dashboard</h1>

  </header>
</template>

<style>
header {
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0.5em;
  padding-right: 1em;
  padding-left: 1em;
  background: #55c2ff;
  box-shadow:
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 2px 9px 1px rgba(0, 0, 0, 0.12),
    0 4px 2px -2px rgba(0, 0, 0, 0.2);
}

#burger {
  width: 2.5em;
  height: 2.5em;
  margin-right: 0.5em;
  padding: 0.5em;
}

#burger button {
  width: 100%;
  height: 100%;
  padding: 0;
  background: none;
  border: none;
  outline: 0;
  cursor: pointer;
  fill: white;
}

header h1 {
  margin: 0;
  color: white;
  font-size: 1.5em;
}
</style>
