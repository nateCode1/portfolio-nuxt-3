<template>
  <div
    class="px-5 px-md-7 py-3 py-md-5"
    style="background-color: #1d1d1f; border-radius: 5px;"
    :style="{borderTop: '2px solid ' + color, borderBottom: '2px solid ' + color}"
  >
    <v-row
      style="height: 100%"
      class="justify-space-between"
    >
      <v-col
        cols="12"
        sm="8"
        class="d-flex justify-space-between"
      >
        <div>
          <h3
            :data-aos="fade-right"
            data-aos-delay="0"
            style="font-size: 2.2rem"
            :style="{ color: color }"
          >
            {{ data.title }}
          </h3>
          <h3
            :data-aos="fade-right"
            data-aos-delay="100"
            class="mb-4"
            style="font-weight: 100; color: #ddd;"
          >
            {{ formatDateBlog(data.date) }}
          </h3>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        data-aos="fade"
        class="d-flex justify-end align-center"
      >
        <router-link :to="data.link">
          <v-btn
            class="hover-effect text-white"
            :color="color"
            outlined
            large
            style="font-size: 1.1rem; text-transform: none;"
          >
            Read Full Post
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { formatDateBlog } from '~/assets/utility.js'

export default {
  name: 'BlogSummary',
  props: {
    data: {
      type: Object,
    },
    color: {
      default: '#ffffff',
      type: String,
    },
  },
  data() {
    return {
      formatDateBlog: formatDateBlog,
    }
  },
}
</script>
