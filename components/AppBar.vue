<template>
  <div class="w-100" :style="{ height: appBarHeight + 'px' }" style="background-color: #222;"></div>
  <v-row 
    class="w-100 pa-0 ma-0 justify-space-between"
    ref="appBar"
    style="background-color: rgba(0,0,0,0.3); position: fixed; z-index: 1000; backdrop-filter: blur(20px); border-bottom: rgba(255,255,255,0.1) 3px solid;"
  >
    <v-col class="pa-0" cols="12">
      <div
        style="height: 3px;"
        :style="{
          background: `linear-gradient(to right, ${theme.tBlue}, ${theme.tGreen}, ${theme.tYellow}, ${theme.tRed})`,
        }"
      >
      </div>
    </v-col>
    <v-col cols="12" sm="4" class="pa-1">
      <router-link to="/" class="d-flex align-center h-100" style="gap: 10px; text-decoration: none;">
        <img src="/logo_hirez.svg" style="aspect-ratio: 1/1; max-height: 60px;"/>
        <p style="font-size: 1.8em; font-weight: 600; color: white;">N<sup>3</sup>H Dev</p>
      </router-link>
    </v-col>
    <v-col cols="12" sm="8" md="5" lg="4" class="d-flex align-center">
      <v-row>
        <v-col cols="12" sm="5" class="contact">
          <v-icon large>mdi-linkedin</v-icon>
          <p>
            <a target="blank" href="https://www.linkedin.com/in/nathan-harrison-dev/"
              >Linkedin Page</a
            >
          </p>
        </v-col>
        <v-col cols="12" sm="7" class="contact">
          <v-icon large>mdi-email-outline</v-icon>
          <p>
            <a href="mailto:nathanh.vision@gmail.com"
              >nathanh.vision@gmail.com</a
            >
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data() {
    return {
      theme: {},
      appBarHeight: 0,
    }
  },
  mounted() {
    this.theme = this.$vuetify.theme.themes.custom;

    window.addEventListener("resize", this.handleResize);

    this.handleResize()
  },
  methods: {
    handleResize(event) {
      this.appBarHeight = this.$refs.appBar.$el.offsetHeight;
    }
  },
}

</script>

<style>
.contact {
  display: flex;
  z-index: 5;
  gap: 10px;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.95rem;
    margin-bottom: 0;
  }
  a {
    color: #83d4ef !important;
  }
}
</style>