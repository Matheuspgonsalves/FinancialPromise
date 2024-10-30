import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './CadastroForm.css'

function CadastroForm() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleCadastroClick = () => {
        navigate('/cadastro');
    }

    return(
        <div id="form-section">
            <div className="container">
                <div className="hello">
                    <div className="container-hello">
                        <h1>{t('formLoginTitle')}</h1>
                        <p>{t('formLoginText')} Ou</p>
                    </div>
                    <div className="btn">
                        <button onClick={handleCadastroClick} type="button">Cadastre-se</button>
                    </div>
                </div>
                <div className="login-form">
                    <h2>{t('entryCadText')}</h2>
                    <div className="formData">
                        <form action="">
                            <div className="data-section">
                                <label htmlFor="">Login:</label>
                                <input type="text" name="login" id="login" />
                            </div>

                            <div className="data-section">
                                <label htmlFor="password">Senha:</label>
                                <input type="text" name="Senha" id="password" />
                            </div>

                            <div className="btn-login">
                                <button type="button">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastroForm;