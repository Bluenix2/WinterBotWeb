<template>
  <main class="home">
    <p v-if="hours < 12">Good morning!</p>
    <p v-if="hours > 12 && hours < 20">Good afternoon!</p>
    <p v-if="hours >= 20">You should go to bed, goodnight!</p>
  </main>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Home extends Vue {
  hours = new Date().getHours();
}
</script>
