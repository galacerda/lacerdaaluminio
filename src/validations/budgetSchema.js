import * as yup from "yup";

const budgetSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  phone: yup
    .string()
    .transform((value) => value.replace(/[^\d]/g, ""))
    .required("Campo obrigatório")
    .min(10, "O telefone deve conter no mínimo 10 números."),
  city: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
});

export default budgetSchema;
