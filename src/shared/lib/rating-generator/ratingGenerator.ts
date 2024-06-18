export const ratingGenerator = () => {
  const rating = [];
  let start = 1;
  while (start <= 10) {
    rating.push(start);
    start += 1;
  }
  return rating;
};
