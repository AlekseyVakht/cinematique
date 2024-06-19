import queryString from "query-string";
import { SubmitFiltersData } from "@/shared/model";

interface Query {
  "genres.name"?: string[];
  "rating.kp"?: string;
  year?: string;
}

export const filterByParams = (data: SubmitFiltersData) => {
  const queryParams: Query = {};
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
  if (data.startRating && data.endRating) {
    queryParams["rating.kp"] = `${data.startRating}-${data.endRating}`;
  }
  return queryString.stringify(queryParams);
};
