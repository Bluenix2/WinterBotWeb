<template>
  <nav id="sidebar" :class="{ 'sidebar-active': $store.state.sidebarActive }"></nav>
</template>

<style>
#sidebar {
  height: 100vh;
}

#sidebar.sidebar-active {
  width: 160px;
}
</style>