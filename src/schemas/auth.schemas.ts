import * as yup from "yup";
const passwordRules = yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No minimo 6 caracteres")
    .test(
        "has-uppercase", "A senha deve conter ao menos uma letra maiuscula",(value) => {
            return /[A-Z]/.test(value || "");
        }
    )
    .test(
        "has-lowercase", "A senha deve conter ao menos uma letra minuscula",(value) => {
            return /[a-z]/.test(value || "");
        }
    )
    .test(
        "has-number", "A senha deve conter ao menos um numero",(value) => {
            return /[0-9]/.test(value || "");
        }
    );

export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: passwordRules,
    confirmPassword: yup
        .string()
        .required("Confirme sua senha")
        .oneOf([yup.ref("password")], "Senhas diferentes"),
    phone: yup.string().required("Telefone obrigatório"),
});

export const loginSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
});