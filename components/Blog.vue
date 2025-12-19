<template>
  <Nodes />
  <div class="blog-container">
    <header>
      <h1 v-if="title" class="mb-n2" style="font-size: 2.5rem;">{{ title }}</h1>
      <time v-if="date" :datetime="date" style="color: #999; font-style: italic;">
        {{ formatDateBlog(date) }}
      </time>
    </header>

    <div class="mt-6">
      <slot />
    </div>
  </div>  
</template>

<script setup>
import Nodes from './Nodes.vue';
import { formatDateBlog } from '~/assets/utility.js'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Array,
    default: () => []
  }
});
</script>

<style>
  .blog-container {
  max-width: 1000px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  padding-bottom: 30px;
  position: relative;
  z-index: 10;
  background-color: #222;
  
  p {
    font-size: 1rem;
    color: #ccc;
    margin-top: 10px;
  }

  h2 {
    margin-top: 20px;
  }
}
</style>