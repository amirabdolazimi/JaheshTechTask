export const dateFormatter = (dateValue: string) => {
  return new Date(dateValue).toLocaleDateString("fa-IR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
