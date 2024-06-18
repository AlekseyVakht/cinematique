import queryString from "query-string";

export const filterByParams = (data) => {
  const queryParams = {};
  if (data.genre) {
    queryParams["genres.name"] = data.genre;
    // if (data.genre.length === 1) {
    //   queryParams["genres.name"] = data.genre;
    // } else {
    //   queryParams["genres.name"] = data.genre.map((item) => `+${item}`);
    // }
  }
  if (data.startYear && data.endYear) {
    queryParams.year = `${data.startYear}-${data.endYear}`;
  }
  if (data.startRating && data.ratingEnd) {
    queryParams["rating.kp"] = `${data.startRating}-${data.endRating}`;
  }
  if (data.name) {
    queryParams.query = `${data.name}`;
  }
  return queryString.stringify(queryParams);
};
