import queryString from "query-string";
import { SubmitData } from "@/shared/model";

interface Query {
  "genres.name"?: string[];
  "rating.kp"?: string;
  year?: string;
  query?: string;
}

export const filterByParams = (data: SubmitData) => {
  const queryParams: Query = {};
  if (data.genre) {
    queryParams["genres.name"] = data.genre;
    console.log(queryParams["genres.name"]);
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
