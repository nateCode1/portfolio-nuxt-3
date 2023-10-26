<template>
  <v-app>

  <div>
    <v-parallax
      style="height: 100vh"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
      <div class="mb-auto text-center" style="padding-top: 100px">
        <h1
          class="mb-n2"
          style="
            font-size: 7rem;
            text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
            font-weight: 700;
          "
        >
          Nathan Harrison
        </h1>
        <p
          style="font-size: 2.3em; text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3)"
        >
          Computer Engineering Student
        </p>
        <p class="mb-0">Specializing in:</p>
        <p v-for="subtitle in activeSubtitles" :key="subtitle" class="subtitle">
          {{ subtitle }}
        </p>
      </div>
    </v-parallax>
    <canvas
      ref="aboutMeCanvas"
      style="position: absolute; z-index: 0; filter: brightness(35%)"
      :key="'00'"
    />
    <div
      ref="aboutMe"
      style="max-width: 1000px; z-index: 5"
      class="mx-auto py-16 px-10 position-relative"
    >
      <v-row class="align-center">
        <v-col cols="12" class="d-flex">
          <h2 style="font-size: 4rem; z-index: 5">Who am I?</h2>
        </v-col>
        <v-col cols="12" md="5" class="d-flex justify-center pa-0 pr-md-8">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            class="pa-2 d-flex rounded-lg"
            style="
              background-image: url(https://cdn.vuetifyjs.com/images/parallax/material.jpg);
              background-size: 100% 100%;
              z-index: 5;
              max-width: 100%;
            "
          >
            <img
              src="nathan.jpg"
              class="rounded-lg"
              style="width: 100%; max-width: 400px"
              ref="headshot"
            />
          </div>
        </v-col>
        <v-col
          data-aos="fade"
          cols="12"
          md="7"
          class="pl-md-5 d-flex flex-column justify-space-around"
        >
          <div
            style="background-color: rgba(29, 29, 31, 0.88)"
            class="pa-5 rounded-lg"
          >
            <p style="color: #ccc" class="mb-0">
              My name is <span style="color: #fff">Nathan Harrison</span> and I
              am currently in my second year of
              <span style="color: #fff"
                >Electrical and Computer Engineering</span
              >
              at Queen's University in a specialized innovation stream. I've
              always loved programming, and learning new technologies.
              <br /><br />
              I've worked with
              <span style="color: #fff"
                >app development, IOT, container archetecture, electrical
                systems, and game development</span
              >. I also have
              <span style="color: #fff">professional experience</span> at a
              startup doing
              <span style="color: #fff">full-stack web development</span>. I'm
              always looking for something new, and am currently learning about
              <span style="color: #fff">cloud computing</span> in the Queen's
              Cloud Computing Club.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="4" class="contact">
          <v-icon large>mdi-phone</v-icon>
          <p>289-926-8501</p>
        </v-col>
        <v-col cols="4" class="contact">
          <v-icon large>mdi-linkedin</v-icon>
          <p>
            <a
              target="blank"
              href="https://www.linkedin.com/in/nathan-harrison-aba110251/"
              >Linkedin Page</a
            >
          </p>
        </v-col>
        <v-col cols="4" class="contact">
          <v-icon large>mdi-email-outline</v-icon>
          <p>
            <a href="mailto:nathanh.vision@gmail.com"
              >nathanh.vision@gmail.com</a
            >
          </p>
        </v-col>
      </v-row>

      <div class="mt-16" style="z-index: 5">
        <div class="d-flex justify-center">
          <h3 style="font-size: 2.5rem; z-index: 5" class="mb-3 text-center">
            See More
          </h3>
        </div>
        <v-tabs
          v-model="tab"
          fixed-tabs
          style="background-color: rgba(0, 0, 0, 0); height: 70px"
          align-tabs="center"
          class="rounded-lg"
          :color="theme.tYellow"
        >
          <v-tab class="tab" value="work">Work Experience</v-tab>
          <v-tab class="tab" value="projects">Projects</v-tab>
          <!-- <v-tab class="tab" value="timeline">Personal Timeline</v-tab> -->
          <v-tab class="tab" value="education">Education</v-tab>
        </v-tabs>
      </div>
    </div>

    <div
      style="
        height: fit-content;
        background-size: cover;
        position: relative;
        overflow: hidden;
        background-color: #303032;
      "
      class="px-6 py-16"
      ref="parallaxCustomContainer"
    >
      <img
        ref="parallaxCustom"
        src="test1BgPf.png"
        style="
          filter: brightness(95%);
          width: 100%;
          position: absolute;
          left: 0;
          top: -500px;
        "
      />
      <v-window v-model="tab">
        <v-window-item value="work">
          <div style="max-width: 1100px" class="pa-8 rounded-xl mx-auto">
            <div class="d-flex px-3 justify-center">
              <h2
                style="
                  background-color: #1d1d1f;
                  font-size: 4rem;
                  border-radius: 20px 20px 0 0;
                "
                class="text-center pt-5 px-7 pb-0"
              >
                Work Experience
              </h2>
            </div>
            <div
              style="background-color: #1d1d1f; border-radius: 20px"
              class="pa-7 pb-2"
            >
              <ItemSummary
                :data="projects.retiremint"
                :openModal="openModal"
                :reverse="false"
              />
              <div
                class="mx-auto my-6 rounded"
                style="width: 75%; height: 2px; background-color: white"
              />
              <ItemSummary
                :data="projects.walmart"
                :openModal="openModal"
                :reverse="true"
                :hideShowMore="true"
              />
            </div>
          </div>
        </v-window-item>

        <v-window-item value="projects">
          <div class="d-flex px-3 justify-center">
            <h2
              style="
                background-color: #1d1d1f;
                font-size: 4rem;
                border-radius: 20px;
              "
              class="text-center pa-6 px-9"
            >
              Projects
            </h2>
          </div>
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
            class="align-stretch mt-10 mb-2 mx-auto justify-center"
          >
            <v-col
              v-for="(project, i) in Object.values(projects).filter(
                (i) => !i.hideAsProject
              )"
              :key="project.name"
              cols="6"
            >
              <ProjectCard
                :openModal="openModal"
                :data="project"
                :color="colors[i % colors.length]"
              />
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="education">
          <div style="max-width: 1100px" class="pa-8 rounded-xl mx-auto">
            <div class="d-flex px-3 justify-center">
              <h2
                style="
                  background-color: #1d1d1f;
                  font-size: 4rem;
                  border-radius: 20px 20px 0 0;
                "
                class="text-center pt-5 px-13 pb-0"
              >
                Education
              </h2>
            </div>
            <div
              style="background-color: #1d1d1f; border-radius: 20px"
              class="pa-7 pb-5"
            >
              <h1 data-aos="fade-right">Queen's University</h1>
              <h2 style="font-weight: 100" data-aos="fade-right" class="mb-3">
                2022 - Present
              </h2>
              <p data-aos="fade-right">
                I'm currently in my second year at Queen's University, studying
                Electrical and Computer Engineering as part of the ECEi program.
                ECEi is an undergraduate program for Electrical and Computer
                Engineering students with a focus on entrepreneurship and
                innovation. In my first year I acheived a GPA of 4.0 out of a
                possible 4.3.
              </p>
              <p data-aos="fade-right">
                During my time at Queen's I've been involved in multiple
                extracirriculars. Most notably I am a member of the Queen's
                Varsity Fencing Team. Additionally, I've been involved with web
                development club QWeb, and have recently joined the Queen's
                Cloud Computing Club.
              </p>

              <h1 data-aos="fade-left" class="mt-8">
                Sacred Heart High School (Newmarket)
              </h1>
              <v-row class="align-center">
                <v-col cols="7">
                  <h2
                    data-aos="fade-left"
                    style="font-weight: 100"
                    class="mb-3"
                  >
                    2018 - 2022
                  </h2>
                  <p data-aos="fade-left">
                    In high school I was part of the AP program. I graduated
                    with high honours, and was awarded a scholarship by the
                    faculty of science. Additionally I recieved the graduating
                    award for AP Calculus, Computer Science, and AP English. I
                    recieved a perfect grade on the AP chemistry exam and a 4/5
                    on AP computer science.
                  </p>
                </v-col>
                <v-col cols="5">
                  <v-img
                    data-aos="fade"
                    style="max-width: 100%; border-radius: 10px"
                    :style="{ border: '2px solid ' + theme.tRed }"
                    src="education/sacred.jpg"
                  />
                </v-col>
                <v-col cols="5">
                  <v-img
                    data-aos="fade"
                    style="max-width: 100%; border-radius: 10px"
                    :style="{ border: '2px solid ' + theme.tYellow }"
                    src="education/sacred.jpg"
                  />
                </v-col>
                <v-col cols="7">
                  <p data-aos="fade-left">
                    Throughout high school I was very involved with the school
                    community. I was a member of the school's AV club, and
                    helped run two plays during my time there. I was a part of
                    the mock trial team that won the provincial championships in
                    2021. In my last year at the school I also led the school's
                    coding club, where I would teach students the fundamentals
                    of programming languages such as Python and JavaScript.
                  </p>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </div>

    <v-dialog v-model="modalOpen" width="auto">
      <v-card v-if="modalData" style="max-width: 850px; border-radius: 15px;" class="mx-auto pa-5">
        <v-btn
          @click="modalOpen = false"
          icon
          style="position: absolute; right: 10px; top: 10px"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="d-flex justify-space-between">
          <h1 style="font-size: 3rem" class="mb-2">{{ modalData.name }}</h1>
          <a v-if="modalData.link" :href="modalData.link" target="blank"
            ><v-btn x-large outlined :color="theme.tGreen" class="hover-effect rounded-xl mr-4">See Project</v-btn></a
          >
        </v-card-title>
        <v-card-text class="mt-2">
          <div class="d-flex mb-3" style="gap: 10px">
            <v-chip
              v-for="skill in modalData.skills"
              :key="skill.name"
              :color="skill.color ?? 'gray'"
              variant="outlined"
              class=""
              >{{ skill.name }}</v-chip
            >
          </div>
          <div v-if="modalData.longDescription" class="px-5 mt-5">
            <p
              v-for="paragraph in modalData.longDescription.split('\n')"
              :key="paragraph"
              class="mt-2"
              style="line-height: 1.6"
            >
              {{ paragraph }}
            </p>
          </div>
          <p v-else-if="modalData.shortDescription" class="px-5 mt-5">
            {{ modalData.shortDescription }}
          </p>

          <h1
            v-if="modalData.images && modalData.images[0]"
            class="my-6"
            style="color: #dadada; font-size: 2.2rem"
          >
            Gallery
          </h1>
          <div
            v-if="modalData.images && modalData.images[1]"
            class="hover-effect"
            style="border-radius: 15px; border: 1px solid white"
          >
            <v-carousel style="max-height: 300px">
              <v-carousel-item
                v-for="image in modalData.images"
                :key="image"
                style="max-width: 80%"
                class="mx-auto"
              >
                <img
                  :src="image"
                  style="
                    width: 100%;
                    height: 100%;
                    max-height: 300px;
                    object-fit: contain;
                  "
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
  </v-app>
</template>

<script>
import projects from '~/assets/projects'
import skills from '~/assets/skills'

export default {
  name: 'IndexPage',
  data() {
    return {
      modalOpen: false,
      modalData: null,

      projects: projects,
      skills: skills,

      tab: 'work',

      theme: {},
      colors: ['#ffffff'],

      allNodes: [],
      meCanvas: null,
      meCtx: null,
      frameCount: 0,
      then: null,
      fps: 30,

      mouseX: null,
      mouseY: null,
      scrollPos: null,

      activeSubtitles: [],
      allSubtitles: [
        'Node JS',
        'React Native',
        'React JS',
        'Vue JS',
        'C#',
        'Front-End Development',
        'C',
        'SQL',
        'AWS',
        'MongoDB',
        'MQTT',
        'Container Archetecture',
        'Back-End Development',
        'Nuxt JS',
        'Next JS',
      ],
    }
  },
  mounted() {
    this.theme = this.$vuetify.theme.themes.custom;
    
    this.colors = [
      this.theme.tBlue,
      this.theme.tRed,
      this.theme.tYellow,
      this.theme.tGreen,
    ]

    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    this.$refs.aboutMeCanvas.addEventListener('mousemove', this.handleMouseMe)
    this.$refs.aboutMe.addEventListener('mousemove', this.handleMouseMe)

    //top swapping thingy
    this.allSubtitles = this.shuffle(this.allSubtitles)
    this.activeSubtitles = [this.allSubtitles[0]]

    let i = 1
    setInterval(() => {
      if (i == 0) this.allSubtitles = this.shuffle(this.allSubtitles)

      this.activeSubtitles.push(this.allSubtitles[i])
      if (this.activeSubtitles.length > 1) this.activeSubtitles.splice(0, 1)
      i = (i + 1) % this.allSubtitles.length
    }, 1500)

    //canvas animation
    this.fpsInterval = 1000 / this.fps
    this.then = Date.now()
    this.animate()

    this.handleResize()
    setTimeout(this.handleResize(), 10) //band-aid fix for mounted event running before everything is resolved
  },
  methods: {
    handleResize(event) {
      this.$refs.aboutMeCanvas.width = window.innerWidth
      this.$refs.aboutMeCanvas.height = this.$refs.aboutMe.offsetHeight

      //canvas!
      class Node {
        constructor(xbase, ybase, color) {
          this.x0 = xbase
          this.y0 = ybase
          this.xt = xbase
          this.yt = ybase
          this.x = xbase
          this.y = ybase
          this.vx = 0
          this.vy = 0
          this.color = color
          this.connections = []
        }
      }

      this.allNodes = []

      let spacing = 70
      let overflow = 35
      let cols =
        Math.floor((this.$refs.aboutMeCanvas.width + 2 * overflow) / spacing) +
        1
      let rowOn = 0
      let colOn = 0

      for (
        var y = -overflow;
        y < this.$refs.aboutMeCanvas.height + overflow;
        y += spacing
      ) {
        for (
          var x = -overflow;
          x < this.$refs.aboutMeCanvas.width + overflow;
          x += spacing
        ) {
          this.allNodes.push(
            new Node(
              x + (((y + overflow) / spacing) % 2 == 0 ? spacing / 2 : 0),
              y,
              this.colors[(rowOn + colOn++) % this.colors.length]
            )
          )
        }
        rowOn++
      }

      this.allNodes.forEach((node, i) => {
        let offs = Math.floor(i / cols) % 2 == 0 ? 0 : -1

        if (i % cols != 0 || (offs == 0 && i % cols != cols - 1)) {
          if (i + cols + offs < this.allNodes.length)
            node.connections.push(this.allNodes[i + cols + offs])
        }
        if (i % cols != cols - 1 || (offs == -1 && i % cols != 0)) {
          if (i + cols + offs + 1 < this.allNodes.length)
            node.connections.push(this.allNodes[i + cols + offs + 1])
        }
        if (i % cols != cols - 1 && i + 1 < this.allNodes.length)
          node.connections.push(this.allNodes[i + 1])
      })

      this.draw()
    },

    animate() {
      requestAnimationFrame(this.animate)

      let now = Date.now()
      let elapsed = now - this.then

      if (elapsed > this.fpsInterval) {
        this.then = now - (elapsed % this.fpsInterval)

        this.draw()
        this.frameCount++
      }
    },

    handleScroll(event) {
      // console.log("Event ", document.documentElement.scrollTop || document.body.scrollTop);
      let newScrollPos =
        document.documentElement.scrollTop || document.body.scrollTop

      //custom parallax
      let cpx = this.$refs.parallaxCustom
      let cpxContainter = this.$refs.parallaxCustomContainer
      cpx.style.top =
        -500 - cpxContainter.getBoundingClientRect().top / 5 + 'px'

      //nodes
      let forceScale = 0.0045
      let forceScaleX = forceScale * 0.7

      if (this.scrollPos != null) {
        let ds = newScrollPos - this.scrollPos

        this.allNodes.forEach((node) => {
          node.vx += forceScaleX * ds * (Math.random() * 2 - 1)
          node.vy += forceScale * ds * (Math.random() * 0.5 + 0.5)
        })
      }

      this.scrollPos = newScrollPos
    },

    handleMouseMe(event) {
      let rect = this.$refs.aboutMeCanvas.getBoundingClientRect()
      let newMouseX = event.clientX - rect.left
      let newMouseY = event.clientY - rect.top

      let maxDist = 82
      let forceScale = 1.2

      if (this.mouseX != null && this.mouseY != null) {
        let dx = newMouseX - this.mouseX
        let dy = newMouseY - this.mouseY

        this.allNodes.forEach((node) => {
          let nodeDist = this.dist(newMouseX - node.x, newMouseY - node.y)
          if (nodeDist < maxDist) {
            let distScale = 1 - Math.pow((maxDist - nodeDist) / maxDist, 3)
            node.vx += dx * forceScale * distScale
            node.vy += dy * forceScale * distScale
          }
        })
      }

      this.mouseX = newMouseX
      this.mouseY = newMouseY
    },

    draw() {
      let canvas = this.$refs.aboutMeCanvas
      let ctx = this.$refs.aboutMeCanvas.getContext('2d')
      let rect = canvas.getBoundingClientRect()

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      //Physics
      let maxStray = 35
      let maxVel = 40 / this.fps
      let maxAccel = 147 / Math.pow(this.fps, 2)

      ctx.lineWidth = 2

      this.allNodes.forEach((node) => {
        //PHYSICS
        //Position functions
        node.xt =
          node.x0 +
          10 * Math.sin(this.frameCount * (Math.PI / 180) + node.x0 / 100)
        node.yt =
          node.y0 +
          4 * Math.sin(this.frameCount * (Math.PI / 180) + node.y0 / 100)

        let vxt = node.xt - node.x
        let vyt = node.yt - node.y

        node.vx =
          Math.abs(vxt - node.vx) < maxAccel
            ? vxt
            : node.vx + maxAccel * Math.sign(vxt - node.vx)
        node.vy =
          Math.abs(vyt - node.vy) < maxAccel
            ? vyt
            : node.vy + maxAccel * Math.sign(vyt - node.vy)

        //clamp velocity
        let dist = this.dist(node.vx, node.vy)
        if (dist > maxVel) {
          let fac = dist / maxVel
          node.vx = node.vx / fac
          node.vy = node.vy / fac
        }

        //apply velocity
        node.x += node.vx
        node.y += node.vy

        //clamp position
        dist = this.dist(node.x0 - node.x, node.y0 - node.y)
        if (dist > maxStray) {
          let fac = dist / maxStray
          node.x = node.x0 + (node.x - node.x0) / fac
          node.y = node.y0 + (node.y - node.y0) / fac
        }

        //DRAW
        ctx.fillStyle = node.color
        ctx.strokeStyle = node.color

        ctx.beginPath()
        ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI)
        ctx.fill()
        if (node.connections) {
          node.connections.forEach((conNode) => {
            ctx.beginPath()
            ctx.moveTo(conNode.x, conNode.y)
            ctx.lineTo(node.x, node.y)
            ctx.stroke()
          })
        }
      })

      this.$refs.aboutMeCanvas.key = Math.random
    },

    dist(x, y) {
      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    },

    openModal(data) {
      this.modalData = data
      this.modalOpen = true
    },

    shuffle(array) {
      let currentIndex = array.length,
        randomIndex

      // While there remain elements to shuffle.
      while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ]
      }

      return array
    },
  },
}
</script>

<style>
.v-slide-group {
  height: 70px;
}

.v-carousel > .v-window__container {
  max-height: 100%;
}

.tab {
  font-size: 1rem;
  border-radius: 20px;
  background-color: rgba(255, 195, 0, 0.05);
  margin: 3px;
  font-size: 1.2rem;
}

.contact {
  display: flex;
  z-index: 5;
  gap: 10px;
  align-items: center;

  p {
    margin-bottom: 0;
  }
  a {
    color: #83d4ef !important;
  }
}

.v-carousel__controls {
  border-radius: 0 0 15px 15px;
  max-height: 35px;
}

.subtitle {
  font-size: 2.2em;
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