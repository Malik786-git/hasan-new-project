import { useState } from "react";
import styles from "./faqitem.module.css";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const index = ({ question, answer }) => {
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <div
      className={`${styles.faqs_item} mb-3`}
      onMouseEnter={() => setFaqToggle(true)}
      onMouseLeave={() => setFaqToggle(false)}
    >
      <div className={`${styles.faqs_body} px-3 py-4`}>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mt-1">{question}</h5>
          <span className={styles.btn_outline}>
            <button className={styles.child_btn}>
              {faqToggle ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </button>
          </span>
        </div>
        <div className={styles.faq_answer}>
          <p className="pt-4">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
