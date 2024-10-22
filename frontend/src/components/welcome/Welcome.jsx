import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from "../../styles/breakpoints";
import moneyIncomeSVG from '../../assets/money-income-animate.svg';
import './Welcome.css';

function Welcome () {
    const { t } = useTranslation(); //Using translations pt-br & en-us

    //Using mediaQuery for detect breakpoints
    
    const isTablet = useMediaQuery(breakpoints.tablet);
    const isMobile = useMediaQuery(breakpoints.mobile);

    //Setting the text length according to breakpoint
    let titleSize;
    let textSize;

    if(isTablet){
        titleSize = '2rem';
        textSize = '1.5rem';
    } else if(isMobile) {
        titleSize = '1.5rem';
        textSize = '1rem';
    }

    return(
        <>
            <section id="home">
                <div className="bg">
                    <img src={moneyIncomeSVG} alt="Dinheiro" />
                </div>

                <div className="welcome">
                    <h1 style={{fontSize: titleSize}}>{t('homeTitle')}</h1>
                    <p style={{fontSize: textSize}}>
                        {t('homeText')}
                    </p>

                    <div className="start">
                       <button>Comece agora</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome;