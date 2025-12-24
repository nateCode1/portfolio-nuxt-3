<template>
  <div class="d-flex flex-column align-center mt-8 mb-4">  
    <img style="width: 100%; max-width: 700px;"  :src="src" />
    <figcaption>{{ caption }}</figcaption>
  </div>
</template>

<script setup>

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
});
</script>