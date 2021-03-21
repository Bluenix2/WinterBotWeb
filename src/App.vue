<template>
  <Masthead />
  <Sidebar />

  <!-- Display the current view we're on -->
  <router-view />
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
