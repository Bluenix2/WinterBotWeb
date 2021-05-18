<template>
  <nav id="sidebar" :class="{ 'sidebar-active': $store.state.sidebarActive }">
    <ul id="links">

      <!-- Automatically add the links of all routes -->
      <li v-for="route in $router.options.routes" :key="route.path">
        <!-- Becomes an 'a' element -->
        <router-link :to="route.path">
          <span :class="route.meta.icon" />{{route.name}}
        </router-link>
      </li>
    </ul>

  </nav>
</template>

<style>
#sidebar {
  width: 0;
  height: 100%;
  margin-right: 1em;
  overflow-x: hidden;
  background: white;
  border-right: 1px;
  border-right-color: rgba(0, 0, 0, 0.12);
  border-right-style: solid;
}

#sidebar.sidebar-active {
  width: 9em;
}

#sidebar ul {
  padding: 0px;
  padding-top: 0.5em;
  list-style-type: none;
}

#sidebar a {
  display: flex;
  align-items: center;
  height: 2.5em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  color: black;
}
</style>
