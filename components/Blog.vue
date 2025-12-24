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
  /* background-color: rgba(40,40,40,0.9);
  backdrop-filter: blur(5px); */
  
  p {
    font-size: 1rem;
    color: #ccc;
    margin-top: 10px;
  }

  figcaption {
    font-size: 0.8rem;
    color: #999;
    margin-top: 5px;
  }

  code {
    background-color: #111;
    font-size: 0.9rem;
    color: #eee;
    border-radius: 1px;
    padding: 0.1rem 3px;
  }
  
  li {
    font-size: 1rem;
    color: #ccc;
    margin-top: 2px;
    margin-left: 17px;
  }

  h2 {
    margin-top: 20px;
  }

  h3 {
    margin-top: 15px;
  }
}
</style>