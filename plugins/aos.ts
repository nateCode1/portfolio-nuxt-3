import AOS from "aos";

import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      easing: "ease-in-out-cubic",
      duration: 500,
      offset: -20,
      once: true,
    }); // eslint-disable-line new-cap
  }
});

// export default ({ app }) => {
//   app.AOS = new AOS.init({
//     easing: 'ease-in-out-cubic',
//     duration: 500,
//     offset: -20,
//     once: true
//   }); // or any other options you need
// };
