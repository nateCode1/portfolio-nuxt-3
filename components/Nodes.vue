<template>
  <div>
    <canvas
        ref="canvas"
        style="position: fixed; left:0; top:0; z-index: 0; filter: brightness(37%)"
        :key="'00'"
      ></canvas>
      <div class="animation-indicator" v-on:click="() => this.setAnimationEnabled(!this.animationEnabled)">
        <p style="font-size: 0.8  em; margin: 0;">Animation {{this.animationEnabled ? "Enabled" : "Disabled"}}</p>
      </div>
  </div>
</template>

<style>
  .animation-indicator {
    transition: 0.3s all;
    opacity: 50%;
    position: fixed; 
    right: 0; 
    bottom: 0;
    z-index: 1000000;
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 3px 4px 0 4px;
    border-radius: 5px 0 0 0;
  }

  .animation-indicator:hover {
    opacity: 100%;
  }
</style>

<script>
import { globalState } from '~/assets/utility';

export default {
  data() {
    return {
      allNodes: [],
      meCanvas: null,
      meCtx: null,
      frameCount: 0,
      then: null,
      fps: 30,

      drawScale: 1,

      mouseX: null,
      mouseY: null,
      scrollPos: null,

      animationEnabled: globalState.animationEnabled,

      consecutiveSlowFrames: 0,
      consecutiveSlowFramesUntilStop: 10,
      minFps: 30,
    }
  },
  mounted() {
    this.theme = this.$vuetify.theme.themes.custom;

    this.colors = [
      this.theme.tBlue,
      this.theme.tRed,
      this.theme.tYellow,
      this.theme.tGreen,
    ];

    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    this.$refs.canvas.addEventListener("mousemove", this.handleMouseMe);

    //canvas animation
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.animate();

    this.handleResize();
    setTimeout(this.handleResize(), 10); //band-aid fix for mounted event running before everything is resolved
  },
  methods: {
    handleResize(event) {
      let maxW = 2000;
      let maxH = 1500;
      if (maxW < window.innerWidth || maxH < window.innerHeight) {
        this.drawScale = Math.max(window.innerWidth / maxW, window.innerHeight / maxH);
        console.log(this.drawScale)
      } else {
        this.drawScale = 1
      }

      this.$refs.canvas.width = window.innerWidth;
      this.$refs.canvas.height = window.innerHeight;

      //canvas!
      class Node {
        constructor(xbase, ybase, color) {
          this.x0 = xbase;
          this.y0 = ybase;
          this.xt = xbase;
          this.yt = ybase;
          this.x = xbase;
          this.y = ybase;
          this.vx = 0;
          this.vy = 0;
          this.color = color;
          this.connections = [];
        }
      }

      this.allNodes = [];

      let spacing = Math.round(100 * this.drawScale);
      let overflow = spacing;
      let cols =
        Math.floor((this.$refs.canvas.width + 2 * overflow) / spacing) +
        1;
      let rowOn = 0;
      let colOn = 0;

      for (var y = -overflow; y <= this.$refs.canvas.height + overflow; y += spacing) {
        for (var x = -overflow; x <= this.$refs.canvas.width + overflow; x += spacing) {
          this.allNodes.push(
            new Node(x + (((y + overflow) / spacing) % 2 == 0 ? spacing / 2 : 0), y, this.colors[(rowOn + colOn++) % this.colors.length])
          );
        }
        rowOn++;
      }

      this.allNodes.forEach((node, i) => {
        let offs = Math.floor(i / cols) % 2 == 0 ? 0 : -1;

        if (i % cols != 0 || (offs == 0 && i % cols != cols - 1)) {
          if (i + cols + offs < this.allNodes.length)
            node.connections.push(this.allNodes[i + cols + offs]);
        }
        if (i % cols != cols - 1 || (offs == -1 && i % cols != 0)) {
          if (i + cols + offs + 1 < this.allNodes.length)
            node.connections.push(this.allNodes[i + cols + offs + 1]);
        }
        if (i % cols != cols - 1 && i + 1 < this.allNodes.length)
          node.connections.push(this.allNodes[i + 1]);
      });

      this.draw();
    },
    setAnimationEnabled(enabled) {
      if (!enabled) {
        this.animationEnabled = false;
        globalState.animationEnabled = false;
      }
      else {
        this.animationEnabled = true;
        globalState.animationEnabled = true;
        this.animate()
      }
    },
    animate() {
      if (!this.animationEnabled) {
        this.handleResize();
        // requestAnimationFrame(this.animate);
        return;
      }

      let frameStart = Date.now()
      requestAnimationFrame(this.animate);

      let now = Date.now();
      let elapsed = now - this.then;

      if (elapsed > this.fpsInterval && !this.modalOpen) {
        this.then = now - (elapsed % this.fpsInterval);

        this.draw(this.frameCount);
        this.frameCount++;
      }

      let frameTime = Date.now() - frameStart
      if (frameTime > 1000 / this.minFps) {
        this.consecutiveSlowFrames++;
        if (this.consecutiveSlowFrames > this.consecutiveSlowFramesUntilStop) {
          this.animationEnabled = false;
        }
      }
      else {
        this.consecutiveSlowFrames = 0;
      }
      console.log(frameTime)
    },
    handleScroll(event) {
      let newScrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      //nodes
      let forceScale = -0.0035;
      let forceScaleX = -forceScale;

      if (this.scrollPos != null) {
        let ds = newScrollPos - this.scrollPos;

        this.allNodes.forEach((node) => {
          node.vx += forceScaleX * ds * (Math.random() * 2 - 1);
          node.vy += forceScale * ds * (Math.random() * 0.5 + 0.5);
        });
      }

      this.scrollPos = newScrollPos;
    },

    handleMouseMe(event) {
      let rect = this.$refs.canvas.getBoundingClientRect();
      let newMouseX = event.clientX - rect.left;
      let newMouseY = event.clientY - rect.top;

      let maxDist = 82;
      let forceScale = 1.2;

      if (this.mouseX != null && this.mouseY != null) {
        let dx = Math.min(Math.pow((newMouseX - this.mouseX) / 10, 5), 1) * 20;
        let dy = Math.min(Math.pow((newMouseY - this.mouseY) / 10, 5), 1) * 20;

        this.allNodes.forEach((node) => {
          let nodeDist = this.dist(newMouseX - node.x, newMouseY - node.y);
          if (nodeDist < maxDist) {
            let distScale = 1 - Math.pow((maxDist - nodeDist) / maxDist, 3);
            node.vx += dx * forceScale * distScale;
            node.vy += dy * forceScale * distScale;
          }
        });
      }

      this.mouseX = newMouseX;
      this.mouseY = newMouseY;
    },

    draw(frameCount) {
      let canvas = this.$refs.canvas;
      let ctx = this.$refs.canvas.getContext("2d");
      let rect = canvas.getBoundingClientRect();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //Physics
      let maxStray = 35;
      let maxVel = 40 / this.fps;
      let maxAccel = 147 / Math.pow(this.fps, 2);

      ctx.lineWidth = 2 * this.drawScale;

      this.allNodes.forEach((node, i) => {
        // if (i % 5 != frameCount % 5) return false

        //PHYSICS
        //Position functions
        node.xt =
          node.x0 +
          10 * Math.sin(this.frameCount * (Math.PI / 180) + node.x0 / 100);
        node.yt =
          node.y0 +
          4 * Math.sin(this.frameCount * (Math.PI / 180) + node.y0 / 100);

        let vxt = node.xt - node.x;
        let vyt = node.yt - node.y;

        node.vx =
          Math.abs(vxt - node.vx) < maxAccel
            ? vxt
            : node.vx + maxAccel * Math.sign(vxt - node.vx);
        node.vy =
          Math.abs(vyt - node.vy) < maxAccel
            ? vyt
            : node.vy + maxAccel * Math.sign(vyt - node.vy);

        //clamp velocity
        let dist = this.dist(node.vx, node.vy);
        if (dist > maxVel) {
          let fac = dist / maxVel;
          node.vx = node.vx / fac;
          node.vy = node.vy / fac;
        }

        //apply velocity
        node.x += node.vx;
        node.y += node.vy;

        //clamp position
        dist = this.dist(node.x0 - node.x, node.y0 - node.y);
        if (dist > maxStray) {
          let fac = dist / maxStray;
          node.x = node.x0 + (node.x - node.x0) / fac;
          node.y = node.y0 + (node.y - node.y0) / fac;
        }

        //DRAW
        ctx.fillStyle = node.color;
        ctx.strokeStyle = node.color;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 * this.drawScale, 0, 2 * Math.PI);
        ctx.fill();
        if (node.connections) {
          node.connections.forEach((conNode) => {
            ctx.beginPath();
            ctx.moveTo(conNode.x, conNode.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          });
        }
      });

      this.$refs.canvas.key = Math.random;
    },

    dist(x, y) {
      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    },
  }
}
</script>