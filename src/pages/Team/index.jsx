import Navbar from "../../components/Navbar";
import styles from "./team.module.css"
import FooterBar from "../../components/FooterBar";
import TeamCard from "../../components/TeamCard";
import midIcon1 from "../../assets/teamMidCircle1.png";
import midIcon2 from "../../assets/teamMidCircle2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Team = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className={styles.container}>
            <Navbar />

            <div className="container mt-5 pt-5">
                <img className={styles.mid_circle1} src={midIcon1} alt="" />
                <img className={styles.mid_circle2} src={midIcon2} alt="" />
                <div className={"row " + styles.row}>
                    <div className="col-md-6">
                        <span className={styles.team_span}>. &nbsp; ROADMAP</span>
                        <p data-aos="zoom-out"
                            data-aos-duration="1000" data-aos-delay="100"
                            data-aos-easing="ease-in-sine" className={styles.main_para + " about_main_para"}>Charting Your Course</p>

                        <p data-aos="fade-right"
                            data-aos-duration="1800" data-aos-delay="110"
                            data-aos-easing="ease-in-sine" className="normal_para">Roadmap to Success: Set goals, overcome obstacles, achieve dreams.</p>
                    </div>
                    <div 
                         data-aos="fade-down"
                         data-aos-offset="400"
                         data-aos-duration="1000" 

                         data-aos-easing="ease-in-sine"
                         className={"col-md-6 d-flex justify-content-center " + styles.card1}>
                        <TeamCard number="1" />
                    </div>

                    <div className="row">
                        <div  data-aos="fade-up"
                               data-aos-duration="1000" 
                               data-aos-easing="ease-in-sine"
                        className={"col-md-6 d-flex justify-content-center " + styles.card2}>
                            <TeamCard number="2" />
                        </div>
                    </div>
                </div>
            </div>

            <FooterBar />
        </div>
    )
}
export default Team;