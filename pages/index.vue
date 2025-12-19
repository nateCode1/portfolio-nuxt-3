<template>
  <div>
    <Nodes />

    <div>
      <div
        style="width: 80vw; max-height: 800px; z-index: 10; background-color: #1d1d1f; z-index: 100; position: relative; box-shadow: 0px 5px 15px 0px rgba(255,255,255,0.5); border-radius: 30px;"
        class="mx-auto mt-10 pb-5 hover-color-container"
      >
        <div class="d-flex w-100" style="height: 30px; border-radius: 30px 30px 0 0; overflow: hidden;">
          <div
            v-for="color in [theme.tBlue, theme.tGreen, theme.tYellow, theme.tRed]"
            :key="color"
            :style="{backgroundColor: color, width: '25%', height: '100%',}"
          ></div>
        </div>
        <div class="text-center mx-5 mt-2">
          <h1
            class="mb-n2 hover-color"
            style="
              text-shadow: 0px 2px 5px rgba(255, 255, 255, 0.3);
              font-weight: 700;
            "
            :style="{
              fontSize: $vuetify.display.smAndDown ? '3rem' : '4rem',
            }"
          >
           <span
            v-for="(letter, index) in 'Nathan Harrison'"
            :key="index"
            :style="{color: [theme.tBlue, theme.tGreen, theme.tYellow, theme.tRed][index % 4]}"
           >{{ letter }}</span> 
          </h1>
          <p
            style="
              font-size: 1.5em;
              text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
            "
          >
            Computer Engineering Student
          </p>
          <!-- <p class="mb-0">Specializing in:</p>
          <p
            v-for="subtitle in activeSubtitles"
            :key="subtitle"
            class="subtitle"
            :style="{ fontSize: $vuetify.display.xs ? '1.8em' : '2.2em' }"
          >
            {{ subtitle }}
          </p> -->
          <p class="mt-6" style="font-size: 1.1rem; color: #ddd;">Hello! I am Nathan (aka N<sup>3</sup>H), and I like to make things using computers. This website contains some fun things that I've worked on, many of which you can try for yourself.</p>
        </div>
      </div>

      <div class="mt-16" style="z-index: 5">
          
        <div class="d-flex justify-center flex-wrap">
          <v-btn
            v-for="btn in tabs"
            :key="btn.title"
            class="tab mx-3 px-5 rounded-xl"
            style="transition: all 0.2s; height: 45px"
            :style="{
              backgroundColor:
                tab == btn.value
                  ? 'rgba(255, 195, 0, 0.4)'
                  : 'rgba(255, 195, 0, 0.1)',
              transform: tab == btn.value ? 'scale(1.1)' : '',
            }"
            @click="tab = btn.value"
            >{{ btn.title }}
          </v-btn>
        </div>
      </div>

      <div
        style="
          height: fit-content;
          background-size: cover;
          position: relative;
          overflow: hidden;
        "
        class="px-3 py-5 px-md-6 py-md-8"
        ref="aboutMe"
      >
        <v-window v-model="tab">
          <v-window-item value="blog">
            <div style="max-width: 1000px;" class="mx-auto">
              <BlogCard 
                class="mt-2"
                v-for="(post, i) in Object.values(blogPosts)"
                :key="post.title"
                :data="post"
                :color="colors[i % colors.length]"
              />
            </div>
          </v-window-item>
          <v-window-item value="projects">
            <!-- <div class="d-flex px-3 justify-center">
              <h2
                style="
                  background-color: #1d1d1f;
                  font-size: 4rem;
                  border-radius: 20px;
                "
                :style="{
                  fontSize: $vuetify.display.smAndDown ? '3rem' : '4rem',
                }"
                class="text-center pa-6 px-9"
              >
                Projects
              </h2>
            </div> -->
            <!-- <div class="d-flex mb-3 flex-wrap" style="gap: 10px">
            <v-chip
              v-for="skill in skills"
              :key="skill.name"
              :color="skill.color ?? 'gray'"
              outlined
              class=""
              >{{ skill.name }}</v-chip
            >
          </div> -->
            <v-row
              style="max-width: 1000px"
              class="align-stretch mb-2 mx-auto justify-center"
            >
              <v-col
                v-for="(project, i) in Object.values(projects).filter(
                  (i) => !i.hideAsProject
                )"
                :key="project.name"
                cols="12"
                md="6"
              >
                <ProjectCard
                  :openModal="openModal"
                  :data="project"
                  :color="colors[i % colors.length]"
                />
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </div>

      <v-dialog v-model="modalOpen" width="auto">
        <v-card
          v-if="modalData"
          style="max-width: 100%; width: 850px; border-radius: 15px"
          class="mx-auto pa-3 pa-md-5"
        >
          <v-btn
            v-if="$vuetify.mdAndUp"
            @click="modalOpen = false"
            icon
            style="position: absolute; right: 10px; top: 10px"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-card-title
            style="gap: 15px"
            class="pa-0 d-flex flex-column flex-md-row flex-wrap align-center justify-center justify-md-space-between"
          >
            <h1 
              style="white-space: wrap; line-height: 1.0;"
              class="mb-2 w-100 text-center"
              :style="{
                fontSize: $vuetify.display.smAndDown ? '2.4rem' : '2.8rem',
              }"
            >
              {{ modalData.name }}
            </h1>
          </v-card-title>
          <v-card-text
            class="mt-2 pa-1 pa-md-4 show-scroll"
            style="overflow-y: scroll"
          >
            <div
              class="d-flex mb-3 w-100 justify-center align-center flex-wrap"
              style="gap: 15px"
            >
              <a v-if="modalData.link" :href="modalData.link" target="blank"
                ><v-btn
                  x-large
                  outlined
                  :color="theme.tGreen"
                  style="font-size: 1.1rem; height: 40px"
                  class="click-me hover-effect text-white font-weight px-5 w-100 rounded-xl"
                  >Visit Project</v-btn
                ></a
              >
              <v-btn
                @click="modalOpen = false"
                class="rounded-lg"
                style="border: 1px solid #999;"
                >Close</v-btn
              >
            </div>
            <div
              class="d-flex justify-center justify-md-left flex-wrap mb-3"
              style="gap: 10px"
            >
              <v-chip
                v-for="skill in modalData.skills"
                :key="skill.name"
                :color="skill.color ?? 'gray'"
                variant="outlined"
                class="hover-effect"
                >{{ skill.name }}</v-chip
              >
            </div>
            <div v-if="modalData.longDescription" class="px-md-5 mt-5">
              <p
                v-for="paragraph in modalData.longDescription.split('\n')"
                :key="paragraph"
                class="my-4"
                style="line-height: 1.6; font-weight: thin; font-size: 1.1em"
              >
                {{ paragraph }}
              </p>
            </div>
            <p v-else-if="modalData.shortDescription" class="px-md-5 mt-5">
              {{ modalData.shortDescription }}
            </p>

            <h1
              v-if="modalData.images && modalData.images[0]"
              class="my-6"
              style="color: #dadada; font-size: 2.2rem"
            >
              Gallery
            </h1>
            <div v-if="modalData.video" class="w-100 d-flex justify-center">
                <iframe max-width="100%" width="560" height="315" :src="modalData.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div
              v-if="modalData.images && modalData.images[1]"
              class="mt-3"
              style="border-radius: 15px"
            >
              <div
                v-if="$vuetify.display.smAndDown"
                class="d-flex justify-space-between w-100 mb-2"
              >
                <v-btn
                  @click="incrementCarousel(-1)"
                  size="large"
                  prepend-icon="mdi-chevron-left"
                  >Prev</v-btn
                >
                <v-btn
                  @click="incrementCarousel(1)"
                  size="large"
                  append-icon="mdi-chevron-right"
                  >Next</v-btn
                >
              </div>
              <v-carousel
                style="border: 1px solid #333; border-radius: 20px"
                :style="{
                  maxHeight: $vuetify.display.mdAndUp ? '300px' : '180px',
                }"
                :show-arrows="$vuetify.display.mdAndUp"
                v-model="carouselPos"
              >
                <v-carousel-item
                  v-for="image in modalData.images"
                  :key="image"
                  style="max-width: 80%"
                  class="mx-auto"
                >
                  <img
                    :src="image"
                    :style="{
                      maxHeight: $vuetify.display.mdAndUp ? '300px' : '180px',
                    }"
                    style="width: 100%; height: 100%; object-fit: contain"
                  />
                </v-carousel-item>
              </v-carousel>
            </div>
            <v-img
              v-else-if="modalData.images && modalData.images[0]"
              :src="modalData.images[0]"
              style="max-width: 70%"
              class="mx-auto rounded-lg"
            />
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import projects from "~/assets/projects";
import skills from "~/assets/skills";
import blogPosts from "~/assets/blog";
import Nodes from '../components/Nodes.vue';
import BlogCard from '../components/BlogCard.vue';

export default {
  name: "IndexPage",
  data() {
    return {
      modalOpen: false,
      modalData: null,

      projects: projects,
      skills: skills,
      blogPosts: blogPosts,

      tab: "blog",
      tabs: [
        // { title: "Work Experience", value: "work" },
        { title: "Blog", value: "blog" },
        { title: "Projects", value: "projects" },
        // {title: 'Personal Timeline', value: 'timeline'},
        // { title: "Education", value: "education" },
      ],

      theme: {},
      colors: ["#ffffff"],

      customParallaxTargetPos: 0,

      carouselPos: 0,

      activeSubtitles: [],
      allSubtitles: [
        "Node JS",
        "React Native",
        "React JS",
        "Vue JS",
        "C#",
        "C",
        "SQL",
        "AWS",
        "MongoDB",
        "SQL",
        "MQTT",
        "Svelte",
        "Container Architecture",
        "OpenGL",
        "TensorFlow",
        "PyTorch",
      ],
    };
  },
  mounted() {
    //title
    document.title = "Nathan Harrison";

    this.theme = this.$vuetify.theme.themes.custom;

    this.colors = [
      this.theme.tBlue,
      this.theme.tRed,
      this.theme.tYellow,
      this.theme.tGreen,
    ];

    //top swapping thingy
    // this.allSubtitles = this.shuffle(this.allSubtitles);
    // this.activeSubtitles = [this.allSubtitles[0]];

    // let i = 1;
    // setInterval(() => {
    //   if (i == 0) this.allSubtitles = this.shuffle(this.allSubtitles);

    //   this.activeSubtitles.push(this.allSubtitles[i]);
    //   if (this.activeSubtitles.length > 1) this.activeSubtitles.splice(0, 1);
    //   i = (i + 1) % this.allSubtitles.length;
    // }, 1500);
  },
  methods: {
    openModal(data) {
      this.modalData = data;
      this.modalOpen = true;
    },

    incrementCarousel(change) {
      this.carouselPos += change;

      if (this.carouselPos < 0)
        this.carouselPos += this.modalData.images.length;
      if (this.carouselPos >= this.modalData.images.length)
        this.carouselPos -= this.modalData.images.length;
    },

    shuffle(array) {
      let currentIndex = array.length;
      let randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
  },
};
</script>

<style>
.v-slide-group {
  height: 70px;
}

.v-carousel > .v-window__container {
  max-height: 100%;
}

.v-carousel__controls > .v-btn--active {
  background-color: #3a9bbb88;
}

.v-carousel__controls > .v-btn--active > .v-btn__content > i {
  color: #183e4b;
}

.v-carousel__controls {
  border-radius: 0 0 15px 15px;
  max-height: 35px;
  background: #3a9bbb33 !important;
}

.show-scroll {
  scrollbar-width: auto;
  overflow-y: auto;
}

.show-scroll::-webkit-scrollbar {
  display: inline-block !important;
  background-color: #525252;
  border-radius: 5px;
  width: 10px !important;
}

.show-scroll::-webkit-scrollbar-thumb {
  background: #303030;
  border-radius: 5px;
}

.tab {
  text-align: center;
  font-size: 1rem;
  border-radius: 20px;
  background-color: rgba(255, 195, 0, 0.05);
  margin: 3px;
  font-size: 1.2rem;
}

.v-chip {
  transition: background-color 0.2s;
}

.v-chip:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.hover-color-container .hover-color {
  filter: saturate(0%) brightness(500%);
  transition: 0.5s filter;
}

.hover-color-container:hover .hover-color {
  filter: saturate(100%) brightness(100%);
}

.click-me {
  animation: wiggle 6.5s cubic-bezier(0.6, 0.03, 0.39, 1.2) forwards infinite;
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(5deg);
  }
  10% {
    transform: rotate(-5deg);
  }
  15% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.subtitle {
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  /* position: absolute; */
  animation: slide-in-out 1.5s ease forwards 1;
}

@keyframes slide-in-out {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  15% {
    transform: translateY(0);
    opacity: 1;
  }
  85% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
