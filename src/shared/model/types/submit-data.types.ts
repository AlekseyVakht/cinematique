import { FieldValues } from "react-hook-form";

export interface SubmitData extends FieldValues {
  startYear: string;
  endYear: string;
  startRating: string;
  endRating: string;
  name: string;
  genre: string[];
}
