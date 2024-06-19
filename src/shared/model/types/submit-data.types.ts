import { FieldValues } from "react-hook-form";

export interface SubmitFiltersData extends FieldValues {
  startYear?: number;
  endYear?: number;
  startRating?: number;
  endRating?: number;
  genre?: string[];
}

export interface SubmitSearchData extends FieldValues {
  name: string;
}
