import { useTranslation } from 'react-i18next';
import './Navbar.css'

function Navbar() {
    const { t } = useTranslation();

    return (
        <nav id="nav">
            <div id="logo">
                <h1><a href="">Financial Promise</a></h1>
            </div>
            <div id="register-login">
                <ul>
                    <li><button className="login">{t('login')}</button></li>
                    <li><button className="register">{t('signUp')}</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
