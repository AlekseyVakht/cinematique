export const dateGenerator = (startYear = 1990) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
};
