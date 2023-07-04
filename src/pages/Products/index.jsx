import Navbar from "../../components/Navbar";
import styles from "./product.module.css";
import cardImg1 from "../../assets/P-card1.png";
import cardImg2 from "../../assets/P-card2.png";
import FooterBar from '../../components/FooterBar';  
const Products = () => {

    return (

        <div className={styles.product_main}>
            <Navbar />
            <div className="container">
                <p data-aos="zoom-out"
            data-aos-duration="1800" data-aos-delay="100"
            data-aos-easing="ease-in-sine" className={"about_main_para text-center " + styles.main_heading}>
                    Simplicity in Action
                </p>
                <div data-aos="fade-right"
            data-aos-duration="1800" data-aos-delay="110"
            data-aos-easing="ease-in-sine" className={styles.descriptions + " w-52 text-center mx-auto"}>
                    <p>Due to our unique liquidity pairing, creating a position in the EmpEx ecosystem can be done completely through our very own exchange! </p>
                    <p>You can convert $ETH directly into $ARB, wrap it, and swap for $EMP, all with the click of a single button.
                        Each of our products, including the leverage and perpetuals tokens, adopt the same simplicity.</p>
                    <p>The goal is to keep things accessible for everyone! </p>
                </div>
            </div>

            <div className={"container " + styles.cards_container}>
                <div className="row">
                    <div data-aos="zoom-in-down"
            data-aos-duration="1000" data-aos-delay="150"
            data-aos-easing="ease-in-sine"  className={"col-lg-8 col-sm-12" + styles.card_1}>
                        <div className={" "+ styles.card_container}>
                        <div className={styles.img_div}>
                            <img className={styles.card_img + " img-fluid"} src={cardImg1} alt="" />
                        </div>
                        <div className={"mt-2 "+ styles.card_content}>
                            <p className={styles.card_title}>Faster than fastest</p>
                            <p className={styles.card_description +" "+  styles.card2_des }>From typing your site adress to complete setup, it only takes 60 seconds - not hours</p>
                        </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down"
            data-aos-duration="1000" data-aos-delay="50"
            data-aos-easing="ease-in-sine" className={"col-lg-4 col-sm-12 " + styles.card_2}>
                        <div className={"mt-3 mt-lg-0 "+ styles.card_container}>
                        <div className={styles.img_div}>
                            <img className={styles.card_img + " img-fluid"} src={cardImg2} alt="" />
                        </div>
                        <div className={"mt-2 "+ styles.card_content}>
                            <p className={styles.card_title}>Faster than fastest</p>
                            <p className={styles.card_description}>From typing your site adress to complete setup, it only takes 60 seconds - not hours</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBar />
        </div>

    )
}

export default Products;