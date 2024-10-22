import { useTranslation } from "react-i18next";
import moneyIncomeSVG from '../../assets/money-income-animate.svg'
import './Welcome.css';

function Welcome () {
    const { t } = useTranslation();

    return(
        <>
            <section id="home">
                <div className="bg">
                    <img src={moneyIncomeSVG} alt="Dinheiro" />
                </div>

                <div className="welcome">
                    <h1>{t('homeTitle')}</h1>
                    <p>
                        {t('homeText')}
                    </p>
                </div>
            </section>
        </>
    )
}

export default Welcome;