import * as yup from "yup";

export const searchSchema = yup.object().shape({
  name: yup.string().required("нужно ввести что-нибудь"),
});
