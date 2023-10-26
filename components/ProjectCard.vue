<!-- Please remove this file from your project -->
<template>
  <div
    style="background-color: #1d1d1f; border-radius: 25px; height: 100%"
    class="px-7 py-5 d-flex flex-column justify-space-between"
    :style="{
      boxShadow: '0px 0px 0px 5px #1d1d1f, inset 0px 0px 0px 1px ' + color,
    }"
  >
    <div
      class="d-flex justify-space-between"
      :class="reverse ? 'flex-row-reverse' : ''"
      style="gap: 30px"
    >
      <div>
        <h3
          :data-aos="animationDirection"
          data-aos-delay="0"
          style="font-size: 2.2rem"
          :style="{ color: color }"
        >
          {{ data.name }}
        </h3>
        <h3
          :data-aos="animationDirection"
          data-aos-delay="100"
          class="mb-4"
          style="font-weight: 100"
        >
          <span v-if="data.startDate">
            {{ numberToMonth[data.startDate[1]] }} {{ data.startDate[0] }} -
            <span v-if="!data.ongoing && data.endDate">{{ numberToMonth[data.endDate[1]] }} {{ data.endDate[0] }}</span>
            <span v-else>present</span>
          </span>
          <span v-else-if="data.date">
            {{ numberToMonth[data.date[1]] }} {{ data.date[0] }}
          </span>
        </h3>
        <p
          :data-aos="animationDirection"
          data-aos-delay="200"
          style="color: #bbb"
        >
          {{ data.shortDescription }}
        </p>
      </div>
    </div>
    <div
      data-aos="fade"
      class="d-flex justify-center mt-2 mb-6"
    >
      <v-btn
        v-if="!hideShowMore"
        class="hover-effect"
        @click="openModal(data)"
        :color="color"
        outlined
        large
        style="font-size: 1.1rem; text-transform: none;"
      >
        See More
      </v-btn>
    </div>
  </div>
</template>

<script>
import { numberToMonth } from '~/assets/utility.js'

export default {
  name: 'ItemSummary',
  props: {
    reverse: {
      default: false,
      type: Boolean,
    },
    data: {
      type: Object,
    },
    openModal: {
      type: Function,
    },
    hideShowMore: {
      default: false,
      type: Boolean,
    },
    color: {
      default: '#ffffff',
      type: String,
    },
  },
  data() {
    return {
      numberToMonth: numberToMonth,
    }
  },
  computed: {
    animationDirection() {
      return this.reverse ? 'fade-left' : 'fade-right'
    },
  },
}
</script>
