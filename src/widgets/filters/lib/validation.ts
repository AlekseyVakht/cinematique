import * as yup from "yup";

export const filterSchema = yup.object().shape({
  startYear: yup.number(),
  endYear: yup
    .number()
    .min(yup.ref("startYear"), "год начала не может быть больше"),
  startRating: yup.number(),
  endRating: yup
    .number()
    .min(yup.ref("startRating"), "начальный рейтинг не может быть больше"),
});
