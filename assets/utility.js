import { reactive } from "vue";

export const numberToMonth = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const formatDateBlog = (dateArray) => {
  const [year, month, day] = dateArray;

  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const sortDateFn = (a, b) => {
  if (a.date[0] != b.date[0]) return b.date[0] - a.date[0];
  if (a.date[1] != b.date[1]) return b.date[1] - a.date[1];
  if (a.date[2] != b.date[2]) return b.date[2] - a.date[2];
  return -1;
};

export const globalState = reactive({
  animationEnabled: true,
});