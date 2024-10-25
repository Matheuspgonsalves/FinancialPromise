import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Traducoes
const resources = {
    en: {
        translation: {
            homeTitle: "Take control of your expenses",
            homeText: "The planning you never asked for, but always needed. Manage your finances effortlessly.",
            signUp: "Sign Up",
            login: "Login",
            startBTN: "Start Now",
            formTitle: "Hello, friend",
            formText: "Enter your details to continue your experience",
            entryFormText: "Sign In",
        },
    },

    pt: {
        translation: {
            homeTitle: "Tenha o controle dos seus gastos",
            homeText: "O planejamento que você nunca pediu, mas sempre precisou. Controle seus gastos financeiros sem esforço.",
            signUp: "Cadastrar-se",
            login: "Entrar",
            startBTN: "Comece agora",
            formTitle: "Bem vindo!",
            formText: "Entre com seus dados para continuar conectado com a gente.",
            entryFormText: "Faça Login",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "pt",
    fallback: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;