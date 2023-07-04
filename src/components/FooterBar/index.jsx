import styles from "./footerbar.module.css";
import { Link } from "react-router-dom";
import twitterIcon from "../../assets/twitter.svg";
import discordIcon from "../../assets/2.svg";
import telegramIcon from "../../assets/3.svg";

const index = () => {
  return (
    <div className={`${styles.footerbar_container} px-5 d-lg-block d-none`}>
      {/* <span className={styles.border_circle1}></span>
        <span className={styles.border_circle2}></span> */}
      <div className=" d-flex justify-content-between align-items-center">
        <Link className={`${styles.policy_link} w-50`}>
          Private Policy <span>and</span> Term
        </Link>

        <div className="d-flex justify-content-center align-items-center ">
          <Link>
            <img className={styles.social_icons} src={twitterIcon} alt="" />
          </Link>
          <Link>
            <img className={styles.social_icons} src={discordIcon} alt="" />
          </Link>
          <Link>
            <img className={styles.social_icons} src={telegramIcon} alt="" />
          </Link>
        </div>

        <span className={`${styles.all_rights} w-50 text-end`}>
          All rights reserved © Empyreal Exchange
        </span>
      </div>
    </div>
  );
};

export default index;
