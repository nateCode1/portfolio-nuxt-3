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
.fakeunusedclass {
  margin: 0;
}
</style>
