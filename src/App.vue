<template>
  <Masthead />
  <div id="content">
    <Sidebar />

    <!-- Display the current view we're on -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Masthead from './components/Masthead.vue'
import Sidebar from './components/Sidebar.vue'

@Options({
  components: {
    Masthead,
    Sidebar,
  },
})
export default class App extends Vue {}
</script>

<style>
#content {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
