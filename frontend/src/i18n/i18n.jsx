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
            formLoginTitle: "Hello, friend",
            formLoginText: "Enter your details to continue your experience",
            entryFormText: "Sign In",
            entryCadText: "Register",
        },
    },

    pt: {
        translation: {
            homeTitle: "Tenha o controle dos seus gastos",
            homeText: "O planejamento que você nunca pediu, mas sempre precisou. Controle seus gastos financeiros sem esforço.",
            signUp: "Cadastrar-se",
            login: "Entrar",
            startBTN: "Comece agora",
            formLoginTitle: "Bem vindo!",
            formLoginText: "Entre com seus dados para continuar conectado com a gente.",
            entryFormText: "Faça Login",
            entryCadText: "Registre-se",
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