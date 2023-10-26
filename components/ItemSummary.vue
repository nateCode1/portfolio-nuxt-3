<!-- Please remove this file from your project -->
<template>
  <div>
    <div
      class="d-flex justify-space-between"
      :class="reverse ? 'flex-row-reverse' : ''"
      style="gap: 30px"
    >
      <div>
        <h3
          :data-aos="animationDirection"
          data-aos-delay="0"
          style="font-size: 2.5rem"
        >
          {{ data.name }}
        </h3>
        <h3
          :data-aos="animationDirection"
          data-aos-delay="100"
          style="font-size: 1.4rem"
          class="font-weight-light mb-2"
        >
          {{ data.jobTitle }}
        </h3>
        <h3
          :data-aos="animationDirection"
          data-aos-delay="100"
          class="mb-2"
          style="font-weight: 100"
        >
          {{ numberToMonth[data.startDate[1]] }} {{ data.startDate[0] }} -
          {{ numberToMonth[data.endDate[1]] }} {{ data.endDate[0] }}
        </h3>
        <p
          :data-aos="animationDirection"
          data-aos-delay="200"
          style="color: #ccc"
        >
          {{ data.shortDescription }}
        </p>
      </div>
      <div v-if="data.images && data.images[0]" class="d-flex align-center">
        <img
          data-aos="fade"
          :src="data.images[0]"
          fill
          style="max-width: 400px; border-radius: 10px"
        />
      </div>
    </div>
    <div
      data-aos="fade"
      data-aos-delay="300"
      class="d-flex justify-center mt-2 mb-6"
    >
      <v-btn
        v-if="!hideShowMore"
        class="hover-effect rounded-lg"
        @click="openModal(data)"
        :color="$vuetify.theme.themes.custom.tYellow"
        size="large"
        variant="outlined"
      >
        See More
      </v-btn>
    </div>
  </div>
</template>

<script>
import { numberToMonth } from "~/assets/utility.js";

export default {
  name: "ItemSummary",
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
  },
  data() {
    return {
      numberToMonth: numberToMonth,
    };
  },
  computed: {
    animationDirection() {
      return this.reverse ? "fade-left" : "fade-right";
    },
  },
};
</script>
