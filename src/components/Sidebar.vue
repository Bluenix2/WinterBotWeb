<template>
  <nav id="sidebar" :class="{ 'sidebar-active': $store.state.sidebarActive }">
    <!-- Automatically add the links of all routes -->
    <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">
      <span :class="route.meta.icon" />{{route.name}}
    </router-link>
  </nav>
</template>

<style>
#sidebar {
  height: 100vh;
}

#sidebar.sidebar-active {
  width: 160px;
}
</style>