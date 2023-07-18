import Navbar from "../../components/Navbar"
import styles from "./about.module.css"
// import midIcon from "../../assets/midCircle.svg"
import midIcon from "../../assets/PlanetPNG.gif"
import WalletBtn from "../../components/WalletBtn"
import cardImg1 from "../../assets/card-1.gif"
import cardImg2 from "../../assets/card-2.gif"
import cardImg3 from "../../assets/card-3.gif"
import AboutCard from "../../components/AboutCard"
import FooterBar from "../../components/FooterBar"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (

        <div className={"container-fluid " + styles.about_container}>
        
            <Navbar />

            <img className={styles.mid_circle} src={midIcon} alt="" />
            <div className={"container-xxl mt-5 " + styles.about_main}>
                <div className={"row align-items-center " + styles.about_row}>

                    <div  className="col-lg-6 col-12">
                        <span className={styles.about_span}>. &nbsp; ABOUT US</span>
                        <p data-aos="zoom-out"
            data-aos-duration="1800" data-aos-delay="100"
            data-aos-easing="ease-in-sine" className={styles.main_para + " about_main_para"}>Empreal Exchange Governance</p>
                        <p data-aos="fade-right"
            data-aos-duration="1800" data-aos-delay="110"
            data-aos-easing="ease-in-sine" className="normal_para">With Arbitrum as the leading L2 network, our goal is to build a significant position as a Delegate to give a louder voice
                            to individual investors. Box</p>
                        <div >
                            <WalletBtn />
                        </div>
                    </div>

                    <div className={"col-lg-6 col-12 " + styles.card_main } >
                        <div data-aos="fade-right"  data-aos-duration="1000"
            data-aos-easing="ease-in-sine" className="mt-3">
                        <AboutCard image={cardImg1} title="Unique Liquidity Pairing" description="Our governance and rewards token, $EMP, is paired with wrapped $ARB to increase our standing as an Arbitrum Delegate." number="1" a="forward" />
                        </div>
                        <div data-aos="fade-up"  data-aos-duration="1000"
            data-aos-easing="ease-in-sine" className={"mt-3 " + styles.second_card}>
                            <AboutCard image={cardImg2} title="EmpEx Influence" description="Investors can stake their $EMP tokens to create a position of influence within the EmpEx ecosystem and help determine the use of our power as a Delegate." number="2" a="reverse" />
                        </div>

                        <div data-aos="fade-right"  data-aos-duration="1000"
            data-aos-easing="ease-in-sine" className="mt-3">
                        <AboutCard image={cardImg3} title="Real Yield" description="$EMP stakers can earn a portion of the revenue the protocol earns from our multitude of product offerings" number="3"
                            a="forward" />
                            </div>
                    </div>
                </div>
            </div>
        <FooterBar />
        </div>

    )
}

export default About;