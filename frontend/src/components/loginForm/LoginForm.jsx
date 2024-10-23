import { useTranslation } from "react-i18next";

function LoginForm() {
    const { t } = useTranslation();

    return(
        <div id="form">
            <div className="hello">
                <h1>{t('formTitle')}</h1>
                <p>{t('formText')}</p>
            </div>
            <div className="login-form">
                <h2>{t('entryFormText')}</h2>
                <div className="formData">
                    
                </div>
            </div>
        </div>
    )
}

export default LoginForm;