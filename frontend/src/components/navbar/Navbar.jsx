import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from "../../styles/breakpoints";
import { useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    //Using mediaQuery for detect breakpoints
    const isTablet = useMediaQuery(breakpoints.tablet);
    const isMobile = useMediaQuery(breakpoints.mobile);

    //Setting the text length according to breakpoint
    let loginSize;
    let sigUpSize;
    let titleSize;

    if(isTablet){
        loginSize = '0.6rem';
        sigUpSize = '0.6rem';
        titleSize = '1.5rem';
    } else if(isMobile){
        loginSize = '0.4rem';
        sigUpSize = '0.4rem';
        titleSize = '0.8rem';
    }

    //Function for navigate to login
    const handleLoginClick = () => {
        navigate('/login');
    }

     //Function for navigate to login
     const handleCadastroClick = () => {
        navigate('/cadastro');
    }

    return (
        <nav id="nav">
            <div id="logo">
                <h1><a href="/" style={{fontSize: titleSize}}>Financial Promise</a></h1>
            </div>
            <div id="register-login">
                <ul>
                    <li><button onClick={handleLoginClick} className="login" style={{fontSize: loginSize}}>{t('login')}</button></li>
                    <li><button onClick={handleCadastroClick} className="register" style={{fontSize: sigUpSize}}>{t('signUp')}</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
