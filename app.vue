<template>
<v-app>
    <AppBar></AppBar>

    <main>
      <router-view />
    </main>
  </v-app>
</template>

<script setup>
  import AppBar from './components/AppBar.vue'
</script>

<style>
/* This is here because if it isn't here, nothing works. I don't know why. */
.fakeunusedclass {
  margin: 0;
}
</style>
